// sw.js - Service Worker JuabaDelivery (Persistente com IndexedDB + Loop waitUntil em 2º Plano)
self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => {
    e.waitUntil(
        self.clients.claim().then(() => startBackgroundLoop())
    );
});

const DB_NAME = 'juaba_sw_persistent_db';
const STORE_NAME = 'sw_state';

function openSwDb() {
    return new Promise((resolve, reject) => {
        const req = indexedDB.open(DB_NAME, 1);
        req.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME);
            }
        };
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
    });
}

async function loadSwState() {
    try {
        const db = await openSwDb();
        return await new Promise((resolve) => {
            const tx = db.transaction(STORE_NAME, 'readonly');
            const req = tx.objectStore(STORE_NAME).get('config');
            req.onsuccess = () => resolve(req.result || null);
            req.onerror = () => resolve(null);
        });
    } catch (e) {
        return null;
    }
}

async function saveSwState(state) {
    try {
        const db = await openSwDb();
        return await new Promise((resolve) => {
            const tx = db.transaction(STORE_NAME, 'readwrite');
            tx.objectStore(STORE_NAME).put(state, 'config');
            tx.oncomplete = () => resolve(true);
            tx.onerror = () => resolve(false);
        });
    } catch (e) {
        return false;
    }
}

function getDefaultState() {
    return {
        projectId: 'juaba-delivery',
        emailCliente: '',
        lojaId: '',
        initializedClient: false,
        initializedStore: false,
        clientStatusMemory: {},
        clientChatMemory: {},
        storeOrdersMemory: {},
        storeChatMemory: {}
    };
}

let isLoopRunning = false;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Recebe e salva no IndexedDB as credenciais e o estado atual dos pedidos vindos do App ou Painel
self.addEventListener('message', (event) => {
    const data = event.data || {};
    event.waitUntil((async () => {
        const state = (await loadSwState()) || getDefaultState();

        if (data.type === 'JUABA_WATCH_CLIENT') {
            if (data.projectId) state.projectId = data.projectId;
            if (data.emailCliente) {
                const cleanEmail = String(data.emailCliente).toLowerCase().trim();
                if (cleanEmail !== state.emailCliente) {
                    state.emailCliente = cleanEmail;
                }
            }
            if (data.ordersSnapshot && typeof data.ordersSnapshot === 'object') {
                for (const [id, info] of Object.entries(data.ordersSnapshot)) {
                    state.clientStatusMemory[id] = info.status;
                    state.clientChatMemory[id] = info.storeMsgCount;
                }
                state.initializedClient = true;
            }
            await saveSwState(state);
            await checkFirestoreInBackground();
            startBackgroundLoop();
        } else if (data.type === 'JUABA_WATCH_STORE') {
            if (data.projectId) state.projectId = data.projectId;
            if (data.lojaId && data.lojaId !== state.lojaId) {
                state.lojaId = data.lojaId;
            }
            if (data.ordersSnapshot && typeof data.ordersSnapshot === 'object') {
                for (const [id, info] of Object.entries(data.ordersSnapshot)) {
                    state.storeOrdersMemory[id] = true;
                    state.storeChatMemory[id] = info.cliMsgCount;
                }
                state.initializedStore = true;
            }
            await saveSwState(state);
            await checkFirestoreInBackground();
            startBackgroundLoop();
        } else if (data.type === 'JUABA_APP_BACKGROUNDED') {
            await checkFirestoreInBackground();
            startBackgroundLoop();
        }
    })());
});

async function startBackgroundLoop() {
    if (isLoopRunning) return;
    isLoopRunning = true;
    try {
        // Mantém o Service Worker acordado verificando a cada 5 segundos
        for (let i = 0; i < 36; i++) {
            await checkFirestoreInBackground();
            await sleep(5000);
        }
    } catch (e) {}
    isLoopRunning = false;
    // Renova o ciclo via Background Sync para o Android não encerrar o monitoramento
    try {
        if (self.registration && self.registration.sync) {
            await self.registration.sync.register('juaba-bg-keepalive');
        }
    } catch (e) {}
}

async function checkFirestoreInBackground() {
    const state = await loadSwState();
    if (!state) return;

    const proj = state.projectId || 'juaba-delivery';
    const url = `https://firestore.googleapis.com/v1/projects/${proj}/databases/(default)/documents:runQuery`;
    let stateChanged = false;

    // 1. Monitora atualizações de status e chat para o Cliente mesmo com o app fechado
    if (state.emailCliente) {
        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    structuredQuery: {
                        from: [{ collectionId: 'pedidos' }],
                        where: {
                            fieldFilter: {
                                field: { fieldPath: 'emailCliente' },
                                op: 'EQUAL',
                                value: { stringValue: state.emailCliente }
                            }
                        }
                    }
                })
            });
            const rows = await res.json();
            if (Array.isArray(rows)) {
                for (const r of rows) {
                    if (!r.document) continue;
                    const docId = r.document.name.split('/').pop();
                    const f = r.document.fields || {};
                    const status = f.status?.stringValue || 'Novo';
                    const nomeLoja = f.nomeLoja?.stringValue || 'Restaurante';
                    const chatValues = f.chat?.arrayValue?.values || [];
                    const storeMsgs = chatValues.filter(v => v.mapValue?.fields?.sender?.stringValue === 'loja');
                    const storeMsgCount = storeMsgs.length;

                    const prevStatus = state.clientStatusMemory[docId];
                    const prevChatCount = state.clientChatMemory[docId];

                    if (state.initializedClient) {
                        if (prevStatus && prevStatus !== status) {
                            let body = `Status atualizado para: ${status}`;
                            if (status === 'Preparando') body = '🍳 A loja aceitou seu pedido e já está preparando!';
                            else if (status === 'Entrega') body = '🛵 Seu pedido saiu para entrega! Prepare-se para receber.';
                            else if (status === 'Concluido') body = '✅ Pedido entregue e concluído! Bom apetite!';
                            else if (status === 'Cancelado') body = '❌ Seu pedido foi cancelado pela loja.';
                            await showNativeSwNotification(`🛵 ${nomeLoja}`, body, docId, `juaba_status_${docId}_${status}`);
                            await notifyOpenClients({ type: 'JUABA_SW_SYNC_CLIENT', docId, status, storeMsgCount });
                        } else if (!prevStatus && status !== 'Novo') {
                            let body = `Status atualizado para: ${status}`;
                            if (status === 'Preparando') body = '🍳 A loja aceitou seu pedido e já está preparando!';
                            else if (status === 'Entrega') body = '🛵 Seu pedido saiu para entrega! Prepare-se para receber.';
                            await showNativeSwNotification(`🛵 ${nomeLoja}`, body, docId, `juaba_status_${docId}_${status}`);
                            await notifyOpenClients({ type: 'JUABA_SW_SYNC_CLIENT', docId, status, storeMsgCount });
                        }

                        if (prevChatCount !== undefined && storeMsgCount > prevChatCount) {
                            const lastMsg = storeMsgs[storeMsgs.length - 1]?.mapValue?.fields?.text?.stringValue || 'Nova mensagem da loja!';
                            await showNativeSwNotification(`💬 ${nomeLoja}`, lastMsg, docId, `juaba_chat_${docId}_${storeMsgCount}`);
                            await notifyOpenClients({ type: 'JUABA_SW_SYNC_CLIENT', docId, status, storeMsgCount });
                        }
                    }

                    if (state.clientStatusMemory[docId] !== status || state.clientChatMemory[docId] !== storeMsgCount) {
                        state.clientStatusMemory[docId] = status;
                        state.clientChatMemory[docId] = storeMsgCount;
                        stateChanged = true;
                    }
                }
                if (!state.initializedClient) {
                    state.initializedClient = true;
                    stateChanged = true;
                }
            }
        } catch (e) {}
    }

    // 2. Monitora novos pedidos e mensagens para o Painel do Lojista mesmo com o app fechado
    if (state.lojaId) {
        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    structuredQuery: {
                        from: [{ collectionId: 'pedidos' }],
                        where: {
                            fieldFilter: {
                                field: { fieldPath: 'lojaId' },
                                op: 'EQUAL',
                                value: { stringValue: state.lojaId }
                            }
                        }
                    }
                })
            });
            const rows = await res.json();
            if (Array.isArray(rows)) {
                for (const r of rows) {
                    if (!r.document) continue;
                    const docId = r.document.name.split('/').pop();
                    const f = r.document.fields || {};
                    const status = f.status?.stringValue || 'Novo';
                    const cliente = f.cliente?.stringValue || 'Cliente';
                    const chatValues = f.chat?.arrayValue?.values || [];
                    const cliMsgs = chatValues.filter(v => v.mapValue?.fields?.sender?.stringValue === 'cliente');
                    const cliMsgCount = cliMsgs.length;

                    const knownOrder = state.storeOrdersMemory[docId];
                    const prevCliChat = state.storeChatMemory[docId];

                    if (state.initializedStore) {
                        if (!knownOrder && status === 'Novo') {
                            await showNativeSwNotification(
                                `🔔 Novo Pedido #${docId.substring(0, 6).toUpperCase()}`,
                                '🔔 Novo pedido no JuabaDelivery! Abra seu painel para aceitar.',
                                docId,
                                `juaba_neworder_${docId}`
                            );
                            await notifyOpenClients({ type: 'JUABA_SW_SYNC_STORE', docId, cliMsgCount });
                        }
                        if (prevCliChat !== undefined && cliMsgCount > prevCliChat) {
                            const lastMsg = cliMsgs[cliMsgs.length - 1]?.mapValue?.fields?.text?.stringValue || 'Nova mensagem do cliente!';
                            await showNativeSwNotification(`💬 ${cliente}`, lastMsg, docId, `juaba_storechat_${docId}_${cliMsgCount}`);
                            await notifyOpenClients({ type: 'JUABA_SW_SYNC_STORE', docId, cliMsgCount });
                        }
                    }

                    if (!state.storeOrdersMemory[docId] || state.storeChatMemory[docId] !== cliMsgCount) {
                        state.storeOrdersMemory[docId] = true;
                        state.storeChatMemory[docId] = cliMsgCount;
                        stateChanged = true;
                    }
                }
                if (!state.initializedStore) {
                    state.initializedStore = true;
                    stateChanged = true;
                }
            }
        } catch (e) {}
    }

    if (stateChanged) {
        await saveSwState(state);
    }
}

async function notifyOpenClients(msg) {
    try {
        const list = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
        for (const c of list) {
            c.postMessage(msg);
        }
    } catch (e) {}
}

self.addEventListener('periodicsync', (event) => {
    event.waitUntil(startBackgroundLoop());
});

self.addEventListener('sync', (event) => {
    event.waitUntil(startBackgroundLoop());
});

async function showNativeSwNotification(title, body, orderId, customTag) {
    const options = {
        body: String(body || ''),
        icon: 'https://cdn-icons-png.flaticon.com/512/1046/1046784.png',
        badge: 'https://cdn-icons-png.flaticon.com/512/1046/1046784.png',
        tag: customTag || (orderId ? `juaba_sw_${orderId}` : `juaba_sw_${Date.now()}`),
        renotify: true,
        requireInteraction: true,
        vibrate: [300, 100, 300, 100, 400],
        data: { orderId, url: self.registration.scope }
    };
    return self.registration.showNotification(title, options);
}

// Recebe Push direto do FCM / Google Apps Script quando o app está 100% fechado
self.addEventListener('push', (event) => {
    let data = {};
    try {
        data = event.data ? event.data.json() : {};
    } catch (e) {
        data = { notification: { title: '🛵 JuabaDelivery', body: event.data ? event.data.text() : 'Nova atualização!' } };
    }
    const notif = data.notification || data.data || {};
    const title = notif.title || '🛵 JuabaDelivery';
    const body = notif.body || 'Você tem uma nova atualização no seu pedido!';
    const orderId = data.data?.orderId || notif.orderId || null;

    event.waitUntil(
        Promise.all([
            showNativeSwNotification(title, body, orderId),
            startBackgroundLoop()
        ])
    );
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    const targetUrl = event.notification.data?.url || self.registration.scope || '/';
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
            for (const client of windowClients) {
                if ('focus' in client) return client.focus();
            }
            if (clients.openWindow) return clients.openWindow(targetUrl);
        })
    );
});
