<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JuabaDelivery | Peça Online</title>
    <meta name="theme-color" content="#ea1d2c">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="JuabaDelivery">
    <meta name="application-name" content="JuabaDelivery">
    <link rel="manifest" href="/manifest.json" id="pwa-manifest-link">
    <link rel="icon" type="image/png" sizes="192x192" id="pwa-fav-icon" href="https://placehold.co/192x192/ea1d2c/ffffff.png?text=JD">
    <link rel="apple-touch-icon" sizes="192x192" id="pwa-apple-icon" href="https://placehold.co/192x192/ea1d2c/ffffff.png?text=JD">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #ea1d2c;
            --primary-dark: #c81421;
            --primary-light: #fff1f2;
            --success: #16a34a;
            --warning: #f59e0b;
            --dark: #18181b;
            --bg: #f8fafc;
            --white: #ffffff;
            --border: #e4e4e7;
            --safe-bottom: env(safe-area-inset-bottom, 0px);
        }
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Inter', sans-serif; -webkit-tap-highlight-color: transparent; }
        body { background: var(--bg); color: var(--dark); font-size: 14px; padding-bottom: calc(135px + var(--safe-bottom)); overflow-x: hidden; }

        .mobile-header { background: var(--white); padding: 14px 16px; position: sticky; top: 0; z-index: 100; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border); box-shadow: 0 2px 10px rgba(0,0,0,0.03); }
        .brand-logo { font-weight: 900; font-size: 1.25rem; letter-spacing: -0.5px; color: var(--dark); cursor: pointer; }
        .brand-logo span { color: var(--primary); }

        .header-cart-creative { position: relative; background: #f4f4f5; color: var(--dark); border: 1.5px solid var(--border); height: 42px; min-width: 44px; padding: 0 13px; border-radius: 999px; display: inline-flex; align-items: center; justify-content: center; gap: 8px; cursor: pointer; font-weight: 900; font-size: 0.8rem; transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1); box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
        .header-cart-creative:active { transform: scale(0.93); }
        .header-cart-creative.has-items { background: linear-gradient(135deg, var(--primary) 0%, #c81421 100%); color: #fff; border-color: var(--primary); padding: 0 15px; box-shadow: 0 6px 18px rgba(234,29,44,0.32); }
        .header-cart-creative .cart-icon-svg { width: 20px; height: 20px; stroke: currentColor; fill: none; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; flex-shrink: 0; }
        .header-cart-creative .cart-count-pill { display: none; align-items: center; gap: 5px; white-space: nowrap; font-weight: 900; font-size: 0.8rem; letter-spacing: -0.2px; }
        .header-cart-creative.has-items .cart-count-pill { display: inline-flex; }
        @keyframes cartBounce { 0%, 100% { transform: scale(1); } 45% { transform: scale(1.12); } }
        .header-cart-creative.bump { animation: cartBounce 0.35s ease; }

        .desktop-header, .desktop-footer { display: none; }
        .view-section { display: none; max-width: 600px; margin: 0 auto; padding: 14px 16px 65px; animation: ifoodSlideFade 0.26s cubic-bezier(0.22, 1, 0.36, 1); }
        .view-section.active { display: block; }
        @keyframes ifoodSlideFade { 0% { opacity: 0; transform: translateY(8px) scale(0.992); } 100% { opacity: 1; transform: translateY(0) scale(1); } }

        #ifood-splash-screen { position: fixed; inset: 0; background: linear-gradient(145deg, #ea1d2c 0%, #c81421 100%); z-index: 99999; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #fff; transition: opacity 0.45s ease, transform 0.45s ease; }
        #ifood-splash-screen.hide-splash { opacity: 0; transform: scale(1.08); pointer-events: none; }
        .splash-logo-wrap { display: flex; flex-direction: column; align-items: center; animation: splashPopIn 0.65s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .splash-bag-icon { width: 78px; height: 78px; background: #fff; color: var(--primary); border-radius: 24px; display: flex; align-items: center; justify-content: center; box-shadow: 0 16px 35px rgba(0,0,0,0.22); margin-bottom: 14px; animation: splashBagBounce 1.2s ease-in-out infinite; }
        .splash-brand-title { font-size: 2rem; font-weight: 900; letter-spacing: -0.8px; color: #fff; }
        .splash-smile-curve { width: 64px; height: 16px; margin-top: 4px; stroke: #fff; stroke-width: 4; fill: none; stroke-linecap: round; stroke-dasharray: 80; stroke-dashoffset: 80; animation: splashSmileDraw 0.7s 0.25s ease-out forwards; }
        @keyframes splashPopIn { 0% { opacity: 0; transform: scale(0.6) translateY(20px); } 100% { opacity: 1; transform: scale(1) translateY(0); } }
        @keyframes splashBagBounce { 0%, 100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-6px) scale(1.04); } }
        @keyframes splashSmileDraw { to { stroke-dashoffset: 0; } }

        .nav-unread-badge { position: absolute; top: -4px; right: -10px; background: #ea1d2c; color: #fff; font-size: 0.65rem; font-weight: 900; min-width: 18px; height: 18px; padding: 0 5px; border-radius: 999px; display: none; align-items: center; justify-content: center; border: 2px solid #fff; box-shadow: 0 2px 6px rgba(234,29,44,0.45); animation: pulseUnreadBadge 1.4s infinite; }
        @keyframes pulseUnreadBadge { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.16); } }
        .chat-btn-unread { background: #fff1f2 !important; color: #ea1d2c !important; border: 2px solid #ea1d2c !important; animation: pulseChatBtn 1.5s infinite; }
        @keyframes pulseChatBtn { 0%, 100% { box-shadow: 0 0 0 0 rgba(234,29,44,0.35); } 50% { box-shadow: 0 0 0 6px rgba(234,29,44,0); } }

        .pass-input-wrapper { position: relative; display: flex; align-items: center; }
        .pass-input-wrapper input { padding-right: 46px !important; }
        .pass-eye-btn { position: absolute; right: 10px; background: none; border: none; color: #71717a; cursor: pointer; padding: 6px; display: flex; align-items: center; justify-content: center; border-radius: 8px; }
        .strong-pass-rules { background: #f8fafc; border: 1px solid var(--border); border-radius: 12px; padding: 10px 12px; margin-top: 8px; font-size: 0.74rem; font-weight: 700; color: #71717a; display: none; flex-direction: column; gap: 4px; }
        .pass-rule-item { display: flex; align-items: center; gap: 6px; transition: color 0.2s; }
        .pass-rule-item.valid { color: var(--success); font-weight: 800; }

        .pwa-install-screen-banner { background: linear-gradient(135deg, #18181b 0%, #27272a 100%); color: #fff; border-radius: 16px; padding: 12px 14px; margin-bottom: 14px; display: flex; align-items: center; justify-content: space-between; gap: 10px; box-shadow: 0 6px 18px rgba(0,0,0,0.12); border: 1px solid #3f3f46; }
        .suggestions-section-box { background: linear-gradient(180deg, #fff 0%, #f8fafc 100%); border: 1px solid #e4e4e7; border-radius: 18px; padding: 12px 14px 24px; margin: 8px 0 50px; box-shadow: 0 2px 10px rgba(0,0,0,0.02); }
        .suggestions-peek-header { display: flex; justify-content: space-between; align-items: center; padding-bottom: 8px; margin-bottom: 10px; border-bottom: 1px dashed #e4e4e7; }

        .banners-carousel-wrapper { position: relative; width: 100%; margin-bottom: 16px; }
        .banners-row { display: flex; gap: 12px; width: 100%; overflow-x: auto; padding: 2px 2px 6px; scroll-snap-type: x mandatory; scroll-behavior: smooth; scrollbar-width: none; -webkit-overflow-scrolling: touch; }
        .banners-row::-webkit-scrollbar { display: none; }
        .banner-card { width: 245px; min-width: 245px; height: 135px; border-radius: 16px; position: relative; scroll-snap-align: start; flex-shrink: 0; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08); background: #fff; }
        .banner-card img { width: 100%; height: 100%; object-fit: cover; display: block; pointer-events: none; }
        .banner-card .banner-title { position: absolute; bottom: 0; inset-inline: 0; padding: 18px 12px 8px; background: linear-gradient(to top, rgba(0,0,0,0.82), transparent); color: #fff; font-weight: 900; font-size: 0.92rem; z-index: 2; text-shadow: 0 2px 6px rgba(0,0,0,0.5); }
        .carousel-nav-btn { display: none !important; }

        .categories-row { display: flex; gap: 10px; overflow-x: auto; padding: 6px 4px 10px; margin-bottom: 12px; scrollbar-width: none; }
        .categories-row::-webkit-scrollbar { display: none; }
        .cat-item { display: flex; flex-direction: column; align-items: center; gap: 6px; cursor: pointer; flex-shrink: 0; width: 74px; text-align: center; }
        .cat-icon-box { width: 64px; height: 64px; border-radius: 18px; background: var(--white); border: 2px solid var(--border); display: flex; align-items: center; justify-content: center; font-size: 1.75rem; transition: all 0.2s ease; box-shadow: 0 2px 6px rgba(0,0,0,0.03); }
        .cat-item.active .cat-icon-box { border-color: var(--primary); background: var(--primary-light); box-shadow: 0 4px 12px rgba(234,29,44,0.18); transform: translateY(-2px); }
        .cat-item span { font-size: 0.76rem; font-weight: 800; color: #3f3f46; }
        .cat-item.active span { color: var(--primary); font-weight: 900; }

        .quick-filters-bar, .store-cats-bar { display: flex; gap: 8px; overflow-x: auto; padding-bottom: 10px; margin-bottom: 12px; scrollbar-width: none; }
        .quick-filters-bar::-webkit-scrollbar, .store-cats-bar::-webkit-scrollbar { display: none; }
        .filter-chip, .store-cat-pill { padding: 8px 14px; border-radius: 999px; border: 1px solid var(--border); background: var(--white); color: #3f3f46; font-weight: 800; font-size: 0.78rem; cursor: pointer; white-space: nowrap; transition: 0.15s; }
        .filter-chip.active { border-color: var(--primary); background: var(--primary-light); color: var(--primary); }
        .store-cat-pill.active { background: var(--primary); color: #fff; border-color: var(--primary); }

        .section-header-row { display: flex; justify-content: space-between; align-items: center; margin: 10px 0 12px; }
        .single-view-toggle-btn { width: 38px; height: 38px; border-radius: 12px; border: 1px solid var(--border); background: var(--white); color: var(--primary); font-weight: 900; font-size: 1.15rem; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 2px 6px rgba(0,0,0,0.06); }

        .stores-container.list-mode, .products-container.list-mode { display: flex; flex-direction: column; gap: 12px; }
        .stores-container.grid-mode, .products-container.grid-mode { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
        .store-card { background: var(--white); border: 1px solid var(--border); border-radius: 18px; padding: 14px; display: flex; align-items: center; gap: 14px; cursor: pointer; transition: transform 0.15s; box-shadow: 0 2px 8px rgba(0,0,0,0.02); }
        .store-card:active, .prod-card:active { transform: scale(0.98); }
        .store-card img { width: 58px; height: 58px; border-radius: 50%; object-fit: cover; border: 1px solid var(--border); flex-shrink: 0; background: #f4f4f5; }
        .stores-container.grid-mode .store-card { flex-direction: column; text-align: center; padding: 16px 12px; gap: 10px; }

        .prod-card { background: var(--white); border: 1px solid var(--border); border-radius: 18px; padding: 14px; display: flex; justify-content: space-between; align-items: center; gap: 12px; cursor: pointer; transition: 0.15s; box-shadow: 0 2px 8px rgba(0,0,0,0.02); }
        .prod-card img { width: 84px; height: 84px; border-radius: 14px; object-fit: contain; background: #f8fafc; border: 1px solid #f1f5f9; padding: 4px; flex-shrink: 0; }
        .products-container.grid-mode .prod-card { flex-direction: column-reverse; text-align: center; align-items: center; padding: 14px 10px; }
        .products-container.grid-mode .prod-card img { width: 100%; height: 110px; }

        .product-full-page-card { background: var(--white); border: 1px solid var(--border); border-radius: 20px; padding: 14px 16px; box-shadow: 0 4px 14px rgba(0,0,0,0.03); margin-bottom: 8px; }
        .product-hero-img-box { width: 100%; height: 140px; background: #f8fafc; border-radius: 14px; display: flex; align-items: center; justify-content: center; padding: 6px; margin-bottom: 10px; border: 1px solid #f1f5f9; position: relative; }
        .product-hero-img-box img { max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 10px; }
        .addon-group-box { border: 1px solid var(--border); border-radius: 14px; padding: 12px; margin-bottom: 12px; background: #fafafa; }
        .addon-option-row { display: flex; justify-content: space-between; align-items: center; padding: 9px 6px; border-bottom: 1px solid #f1f5f9; cursor: pointer; }
        .addon-option-row:last-child { border-bottom: none; }

        .detail-actions-row { display: flex; gap: 10px; align-items: stretch; margin-top: 14px; }
        .detail-qty-box { display: flex; align-items: center; justify-content: space-between; gap: 10px; background: #f4f4f5; border: 1px solid var(--border); height: 50px; padding: 0 12px; border-radius: 14px; font-weight: 900; flex-shrink: 0; }
        .detail-qty-box button { border: none; background: none; font-size: 1.25rem; font-weight: 900; cursor: pointer; width: 26px; height: 100%; color: var(--dark); }
        .detail-add-btn-fixed { flex: 1; height: 50px; padding: 0 16px; border-radius: 14px; background: var(--primary); color: #fff; border: none; font-weight: 900; font-size: 0.95rem; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; white-space: nowrap; box-shadow: 0 6px 16px rgba(234,29,44,0.25); }

        .bottom-nav { position: fixed; bottom: 0; left: 0; width: 100%; height: calc(60px + var(--safe-bottom)); background: var(--white); border-top: 1px solid var(--border); display: flex; justify-content: space-around; align-items: center; padding-bottom: var(--safe-bottom); z-index: 900; box-shadow: 0 -2px 10px rgba(0,0,0,0.03); }
        .nav-tab { background: none; border: none; color: #71717a; font-weight: 800; font-size: 0.72rem; display: flex; flex-direction: column; align-items: center; gap: 3px; cursor: pointer; flex: 1; }
        .nav-tab.active { color: var(--primary); }

        .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 2000; display: none; align-items: flex-end; justify-content: center; }
        .modal-sheet { background: var(--white); width: 100%; max-width: 540px; border-radius: 24px 24px 0 0; padding: 20px 18px calc(22px + var(--safe-bottom)); max-height: 90vh; overflow-y: auto; animation: slideUp 0.22s ease-out; }
        @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }

        .input-group { margin-bottom: 12px; text-align: left; }
        .input-group label { display: block; font-size: 0.76rem; font-weight: 800; color: #52525b; margin-bottom: 5px; }
        .input-group input, .input-group select, .input-group textarea { width: 100%; padding: 12px 14px; border: 1px solid #d4d4d8; border-radius: 12px; font-size: 0.92rem; font-weight: 600; outline: none; background: #fff; }
        .btn-primary { width: 100%; background: var(--primary); color: #fff; border: none; padding: 14px; border-radius: 14px; font-weight: 900; font-size: 0.98rem; cursor: pointer; }

        .addr-card { background: #fff; border: 1px solid var(--border); border-radius: 14px; padding: 14px; display: flex; justify-content: space-between; align-items: center; gap: 10px; margin-bottom: 10px; position: relative; }
        .dots-btn { background: #f4f4f5; border: none; width: 34px; height: 34px; border-radius: 10px; font-size: 1.2rem; font-weight: 900; cursor: pointer; color: #3f3f46; }
        .dots-dropdown { position: absolute; right: 14px; top: 48px; background: #fff; border: 1px solid var(--border); border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.12); z-index: 50; display: none; flex-direction: column; min-width: 140px; overflow: hidden; }
        .dots-dropdown.show { display: flex; }
        .dots-dropdown button { padding: 10px 14px; border: none; background: none; text-align: left; font-weight: 800; font-size: 0.82rem; cursor: pointer; display: flex; align-items: center; gap: 8px; }
        .dots-dropdown button:hover { background: #f8fafc; }

        .chat-msgs-box { height: 310px; overflow-y: auto; background: #f1f5f9; border-radius: 14px; padding: 12px; display: flex; flex-direction: column; gap: 8px; margin: 12px 0; border: 1px solid var(--border); }
        .chat-bubble { max-width: 82%; padding: 10px 13px; border-radius: 14px; font-size: 0.86rem; line-height: 1.35; word-wrap: break-word; }
        .chat-bubble.me { align-self: flex-end; background: var(--primary); color: #fff; border-bottom-right-radius: 4px; }
        .chat-bubble.them { align-self: flex-start; background: #fff; color: #18181b; border: 1px solid var(--border); border-bottom-left-radius: 4px; }

        .step-row { display: flex; align-items: center; gap: 10px; padding: 8px 0; color: #a1a1aa; font-weight: 700; }
        .step-dot { width: 26px; height: 26px; border-radius: 50%; background: #e4e4e7; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 900; }
        .step-row.done { color: var(--success); font-weight: 900; }
        .step-row.done .step-dot { background: var(--success); color: #fff; }

        .toast { position: fixed; top: 18px; left: 50%; transform: translateX(-50%) translateY(-150%); background: #18181b; color: #fff; padding: 12px 22px; border-radius: 999px; font-weight: 800; font-size: 0.85rem; z-index: 9999; transition: 0.3s; box-shadow: 0 10px 25px rgba(0,0,0,0.2); }
        .toast.show { transform: translateX(-50%) translateY(0); }

        @media (min-width: 768px) {
            body { padding-bottom: 40px; }
            .mobile-header, .bottom-nav { display: none !important; }
            .desktop-header { display: block; position: sticky; top: 0; z-index: 1000; background: var(--white); border-bottom: 1px solid var(--border); box-shadow: 0 2px 12px rgba(0,0,0,0.03); }
            .desktop-header-inner { max-width: 1320px; margin: 0 auto; padding: 14px 28px; display: flex; align-items: center; justify-content: space-between; gap: 20px; }
            .desktop-nav-links { display: flex; align-items: center; gap: 18px; }
            .desktop-nav-links button { background: none; border: none; font-weight: 800; font-size: 0.92rem; color: #3f3f46; cursor: pointer; padding: 6px 10px; border-radius: 8px; }
            .desktop-nav-links button.active { color: var(--primary); background: var(--primary-light); }
            .desktop-search-box { flex: 1; max-width: 480px; position: relative; }
            .desktop-search-box input { width: 100%; padding: 11px 16px 11px 40px; border-radius: 12px; border: 1px solid #e4e4e7; background: #f4f4f5; font-weight: 600; outline: none; }
            .desktop-search-box input:focus { background: #fff; border-color: var(--primary); }
            .desktop-actions { display: flex; align-items: center; gap: 12px; }
            .view-section { max-width: 1320px; padding: 24px 28px; }
            .banners-carousel-wrapper { max-width: 100%; margin-bottom: 24px; }
            .banners-row { gap: 16px; }
            .banner-card { width: 300px; min-width: 300px; height: 165px; }
            .carousel-nav-btn { display: flex !important; position: absolute; top: 50%; transform: translateY(-50%); z-index: 5; width: 42px; height: 42px; border-radius: 50%; border: none; background: rgba(255,255,255,0.92); color: #18181b; font-weight: 900; font-size: 1.05rem; cursor: pointer; align-items: center; justify-content: center; box-shadow: 0 4px 14px rgba(0,0,0,0.25); }
            .carousel-nav-btn.prev { left: 12px; }
            .carousel-nav-btn.next { right: 12px; }
            .categories-row { justify-content: flex-start; gap: 16px; }
            .cat-item { width: 96px; }
            .cat-icon-box { width: 80px; height: 80px; font-size: 2rem; }
            .stores-container.list-mode, .products-container.list-mode { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
            .stores-container.grid-mode { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
            .products-container.grid-mode { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
            .product-full-page-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 28px; align-items: start; }
            .product-hero-img-box { height: 240px; margin-bottom: 0; }
            #modal-cart { justify-content: flex-end; align-items: stretch; }
            #modal-cart .modal-sheet { max-width: 430px; height: 100vh; max-height: 100vh; border-radius: 24px 0 0 24px; }
            .desktop-footer { display: block; max-width: 1320px; margin: 40px auto 0; padding: 24px 28px; border-top: 1px solid var(--border); color: #71717a; font-size: 0.82rem; font-weight: 600; text-align: center; }
        }
    </style>
</head>
<body>

<div id="ifood-splash-screen">
    <div class="splash-logo-wrap">
        <div class="splash-bag-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
        </div>
        <div class="splash-brand-title">JuabaDelivery</div>
        <svg class="splash-smile-curve" viewBox="0 0 64 18"><path d="M6 4 Q32 18 58 4"></path></svg>
    </div>
</div>
<script>
    // Trava de segurança independente: garante que a Splash Screen sempre feche após 1.4s
    (function() {
        var sp = document.getElementById('ifood-splash-screen');
        if (!sp) return;
        if (sessionStorage.getItem('juaba_splash_shown') === '1') {
            sp.style.display = 'none';
        } else {
            sessionStorage.setItem('juaba_splash_shown', '1');
            setTimeout(function() {
                sp.classList.add('hide-splash');
                setTimeout(function() { sp.style.display = 'none'; }, 480);
            }, 1400);
        }
    })();
</script>

<div class="toast" id="toast">Aviso</div>

<header class="desktop-header">
    <div class="desktop-header-inner">
        <div style="display:flex; align-items:center; gap:24px;">
            <div class="brand-logo" onclick="switchTab('home')" style="font-size:1.5rem;">Juaba<span>Delivery</span></div>
            <nav class="desktop-nav-links">
                <button id="dnav-home" class="active" onclick="switchTab('home')">Início</button>
                <button id="dnav-pedidos" style="display:none; position:relative;" onclick="switchTab('pedidos')">
                    Meus Pedidos
                    <span id="dnav-pedidos-badge" class="nav-unread-badge" style="top:-6px; right:-8px;">0</span>
                </button>
            </nav>
        </div>
        <div class="desktop-search-box">
            <span style="position:absolute; left:14px; top:50%; transform:translateY(-50%);">🔍</span>
            <input type="text" id="desktop-search-input" placeholder="Buscar loja, lanche, bebida ou pizza..." oninput="debouncedSearch(this.value, true)">
        </div>
        <div class="desktop-actions">
            <button onclick="openProfileSubView('enderecos')" style="background:#f4f4f5; border:none; padding:10px 14px; border-radius:12px; font-weight:800; font-size:0.82rem; cursor:pointer; color:#3f3f46;">
                📍 <span id="desktop-addr-label">Endereço</span>
            </button>
            <button onclick="switchTab('perfil')" id="desktop-user-btn" style="background:#f4f4f5; border:none; padding:10px 14px; border-radius:12px; font-weight:800; font-size:0.82rem; cursor:pointer; color:#18181b;">
                👤 Entrar
            </button>
            <button class="header-cart-creative" id="desktop-cart-btn" onclick="openCartModal()" title="Abrir Minha Sacola">
                <svg class="cart-icon-svg" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                <span class="cart-count-pill" id="desktop-cart-count"></span>
            </button>
        </div>
    </div>
</header>

<header class="mobile-header">
    <div class="brand-logo" onclick="switchTab('home')">Juaba<span>Delivery</span></div>
    <div style="display:flex; align-items:center; gap:8px;">
        <button onclick="requestNotificationPermissionManual()" id="btn-enable-notif-mob" style="display:none; background:#fef3c7; color:#b45309; border:1px solid #fde68a; padding:7px 10px; border-radius:999px; font-weight:800; font-size:0.72rem; cursor:pointer;">
            🔔 Ativar Alertas
        </button>
        <button onclick="triggerNativePwaInstall()" id="btn-pwa-install-mob" style="display:none; background:var(--primary); color:#fff; border:none; padding:7px 11px; border-radius:999px; font-weight:800; font-size:0.74rem; cursor:pointer;">
            📲 Instalar App
        </button>
        <button type="button" class="header-cart-creative" id="mobile-header-cart-btn" onclick="openCartModal()" aria-label="Minha Sacola">
            <svg class="cart-icon-svg" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            <span class="cart-count-pill" id="mobile-header-cart-count"></span>
        </button>
    </div>
</header>

<!-- ABA 1: INÍCIO -->
<main id="sec-home" class="view-section active">
    <div class="pwa-install-screen-banner" id="pwa-onscreen-install-card">
        <div style="display:flex; align-items:center; gap:10px; min-width:0; flex:1;">
            <div style="width:40px; height:40px; border-radius:12px; background:var(--primary); color:#fff; display:flex; align-items:center; justify-content:center; font-size:1.25rem; flex-shrink:0; font-weight:900;">📲</div>
            <div style="min-width:0;">
                <div style="font-weight:900; font-size:0.88rem; color:#fff; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">Baixar App JuabaDelivery</div>
                <div style="font-size:0.72rem; color:#d4d4d8; font-weight:600;">Instale no celular para pedir mais rápido</div>
            </div>
        </div>
        <div style="display:flex; align-items:center; gap:6px; flex-shrink:0;">
            <button type="button" onclick="triggerNativePwaInstall()" style="background:var(--primary); color:#fff; border:none; padding:8px 14px; border-radius:10px; font-weight:900; font-size:0.78rem; cursor:pointer;">Baixar</button>
            <button type="button" onclick="dismissOnscreenPwaCard()" style="background:rgba(255,255,255,0.1); color:#a1a1aa; border:none; width:28px; height:28px; border-radius:8px; font-weight:900; font-size:0.8rem; cursor:pointer;">✕</button>
        </div>
    </div>

    <div class="banners-carousel-wrapper" id="home-banners-wrapper">
        <button type="button" class="carousel-nav-btn prev" onclick="stepBannerCarousel(-1)" aria-label="Anterior">❮</button>
        <div class="banners-row" id="home-banners"></div>
        <button type="button" class="carousel-nav-btn next" onclick="stepBannerCarousel(1)" aria-label="Próximo">❯</button>
    </div>

    <div class="categories-row" id="home-categories">
        <div class="cat-item" onclick="openCategoryFullScreen('Lanches')"><div class="cat-icon-box">🍔</div><span>Lanches</span></div>
        <div class="cat-item" onclick="openCategoryFullScreen('Pizzas')"><div class="cat-icon-box">🍕</div><span>Pizzas</span></div>
        <div class="cat-item" onclick="openCategoryFullScreen('Bebidas')"><div class="cat-icon-box">🥤</div><span>Bebidas</span></div>
        <div class="cat-item" onclick="openCategoryFullScreen('Petiscos')"><div class="cat-icon-box">🍟</div><span>Petiscos</span></div>
        <div class="cat-item" onclick="openCategoryFullScreen('Açaí')"><div class="cat-icon-box">🍨</div><span>Açaí</span></div>
        <div class="cat-item" onclick="openCategoryFullScreen('Refeições')"><div class="cat-icon-box">🍲</div><span>Refeições</span></div>
        <div class="cat-item" onclick="openCategoryFullScreen('Doces')"><div class="cat-icon-box">🍰</div><span>Doces</span></div>
    </div>

    <div class="quick-filters-bar">
        <button class="filter-chip active" onclick="setQuickFilter('ALL', this)">🏪 Todas as Lojas</button>
        <button class="filter-chip" onclick="setQuickFilter('OPEN', this)">🟢 Abertas Agora</button>
        <button class="filter-chip" onclick="setQuickFilter('TOP', this)">⭐ Super Restaurantes (4.8+)</button>
        <button class="filter-chip" onclick="setQuickFilter('COUPON', this)">🎟️ Com Cupom de Desconto</button>
    </div>

    <div class="section-header-row">
        <div style="display:flex; align-items:baseline; gap:8px;">
            <h3 style="font-weight:900; font-size:1.12rem;">Lojas Disponíveis</h3>
            <span id="stores-count-label" style="font-size:0.78rem; color:#71717a; font-weight:700;">0 loja(s)</span>
        </div>
        <button type="button" class="single-view-toggle-btn" id="btn-toggle-home-view" onclick="toggleUnifiedViewMode()" title="Alternar visualização">⊞</button>
    </div>
    <div id="stores-list" class="stores-container grid-mode">Carregando lojas...</div>
</main>

<!-- CATEGORIA EM TELA CHEIA -->
<section id="sec-category-view" class="view-section">
    <div style="display:flex; align-items:center; gap:12px; background:#fff; padding:14px; border-radius:18px; border:1px solid var(--border); margin-bottom:14px;">
        <button onclick="closeCategoryFullScreen()" style="background:#f4f4f5; border:none; width:38px; height:38px; border-radius:50%; font-weight:900; font-size:1.1rem; cursor:pointer;">←</button>
        <div id="cat-fullscreen-icon" style="width:46px; height:46px; border-radius:14px; background:var(--primary-light); border:1px solid var(--primary); display:flex; align-items:center; justify-content:center; font-size:1.5rem;">🍽️</div>
        <div style="flex:1;">
            <h2 id="cat-fullscreen-title" style="font-weight:900; font-size:1.15rem; color:#111;">Categoria</h2>
            <div id="cat-fullscreen-subtitle" style="font-size:0.76rem; color:#71717a; font-weight:700; margin-top:2px;">Produtos e lojas disponíveis</div>
        </div>
    </div>
    <div class="store-cats-bar" id="cat-fullscreen-pills" style="margin-bottom:14px;"></div>
    <div style="margin-bottom:26px;">
        <div class="section-header-row">
            <div>
                <h3 id="home-category-products-title" style="font-weight:900; font-size:1.08rem; color:#111;">🍴 Produtos na Categoria</h3>
                <span id="home-category-products-count" style="font-size:0.76rem; color:#71717a; font-weight:700;">0 produto(s)</span>
            </div>
            <button type="button" class="single-view-toggle-btn" id="btn-toggle-cat-view" onclick="toggleUnifiedViewMode()">⊞</button>
        </div>
        <div id="home-category-products-list" class="products-container grid-mode"></div>
    </div>
    <div>
        <div class="section-header-row">
            <div>
                <h3 id="cat-stores-title" style="font-weight:900; font-size:1.08rem; color:#111;">🏪 Lojas com esta Categoria</h3>
                <span id="cat-stores-count-label" style="font-size:0.76rem; color:#71717a; font-weight:700;">0 loja(s)</span>
            </div>
        </div>
        <div id="cat-stores-list" class="stores-container grid-mode"></div>
    </div>
</section>

<!-- CARDÁPIO DA LOJA -->
<section id="sec-store-menu" class="view-section">
    <div style="display:flex; align-items:center; gap:12px; background:#fff; padding:14px; border-radius:18px; border:1px solid var(--border); margin-bottom:14px;">
        <button onclick="goBackFromStoreMenu()" style="background:#f4f4f5; border:none; width:38px; height:38px; border-radius:50%; font-weight:900; font-size:1.1rem; cursor:pointer;">←</button>
        <img id="menu-store-logo" src="" style="width:48px; height:48px; border-radius:50%; object-fit:cover; border:1px solid var(--border);">
        <div style="flex:1;">
            <h2 id="menu-store-name" style="font-weight:900; font-size:1.12rem;">Loja</h2>
            <div id="menu-store-status" style="font-size:0.78rem; font-weight:800; margin-top:2px;"></div>
        </div>
    </div>
    <div id="menu-categories-bar" class="store-cats-bar"></div>
    <div id="menu-products-list" class="products-container list-mode"></div>
</section>

<!-- DETALHES DO PRODUTO -->
<section id="sec-product-detail" class="view-section">
    <div style="display:flex; align-items:center; justify-content:space-between; gap:10px; margin-bottom:12px;">
        <button onclick="goBackFromProductDetail()" style="background:#fff; border:1px solid var(--border); padding:9px 14px; border-radius:999px; font-weight:900; font-size:0.84rem; cursor:pointer;">← Voltar</button>
        <div onclick="openStoreFromProductDetail()" style="background:#fff; border:1px solid var(--border); padding:7px 13px; border-radius:999px; font-size:0.78rem; font-weight:800; color:#3f3f46; cursor:pointer;">
            🏪 <span id="detail-store-name">Ver Loja</span>
        </div>
    </div>
    <div class="product-full-page-card">
        <div class="product-full-page-grid">
            <div class="product-hero-img-box">
                <img id="detail-prod-img" src="" alt="Produto">
                <span id="detail-prod-discount-badge" style="display:none; position:absolute; top:12px; left:12px; background:#fee2e2; color:#dc2626; font-size:0.76rem; font-weight:900; padding:4px 10px; border-radius:999px;"></span>
            </div>
            <div>
                <div id="detail-prod-cat-badge" style="font-size:0.72rem; font-weight:800; color:var(--primary); text-transform:uppercase; margin-bottom:2px;">Categoria</div>
                <h1 id="detail-prod-name" style="font-weight:900; font-size:1.25rem; color:#111; margin-bottom:4px;">Nome do Produto</h1>
                <p id="detail-prod-desc" style="font-size:0.84rem; color:#52525b; line-height:1.35; margin-bottom:8px;"></p>
                <div style="display:flex; align-items:baseline; gap:10px; margin-bottom:10px;">
                    <span id="detail-prod-price" style="font-weight:900; font-size:1.28rem; color:var(--success);">R$ 0,00</span>
                    <span id="detail-prod-old-price" style="display:none; font-size:0.88rem; font-weight:800; color:#a1a1aa; text-decoration:line-through;">R$ 0,00</span>
                </div>
                <div id="detail-addons-container"></div>
                <div class="input-group" style="margin-top:6px; margin-bottom:8px;">
                    <label>Observações do item (Opcional)</label>
                    <input type="text" id="detail-prod-obs" placeholder="Ex: Sem cebola, bem gelada, ponto da carne..." maxlength="180">
                </div>
                <div class="detail-actions-row">
                    <div class="detail-qty-box">
                        <button type="button" onclick="changeDetailQty(-1)">−</button>
                        <span id="detail-prod-qty" style="font-size:1rem; min-width:20px; text-align:center;">1</span>
                        <button type="button" onclick="changeDetailQty(1)">+</button>
                    </div>
                    <button type="button" class="detail-add-btn-fixed" onclick="confirmAddToCart()">
                        <span>Adicionar</span><span>•</span><span id="detail-total-btn-price">R$ 0,00</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="suggestions-section-box">
        <div class="suggestions-peek-header">
            <div style="display:flex; align-items:center; gap:6px;">
                <span>✨</span><span style="font-weight:800; font-size:0.9rem; color:#52525b;">Outras opções para você</span>
            </div>
            <button type="button" class="single-view-toggle-btn" id="btn-toggle-sug-view" onclick="toggleUnifiedViewMode()" style="width:32px; height:32px; font-size:0.95rem;">⊞</button>
        </div>
        <div id="detail-suggestions-list" class="products-container grid-mode"></div>
    </div>
</section>

<!-- ABA 2: BUSCA -->
<section id="sec-busca" class="view-section">
    <div class="input-group">
        <input type="text" id="mobile-search-input" placeholder="🔍 Buscar lojas, lanches, bebidas, pizzas..." oninput="debouncedSearch(this.value, false)">
    </div>
    <div id="search-results-box">
        <p style="text-align:center; padding:30px; color:#71717a; font-weight:700;">Digite acima para buscar lojas ou produtos.</p>
    </div>
</section>

<!-- ABA 3: MEUS PEDIDOS -->
<section id="sec-pedidos" class="view-section">
    <h2 style="font-weight:900; font-size:1.25rem; margin-bottom:14px;">🧾 Meus Pedidos</h2>
    <div id="client-orders-list"></div>
</section>

<!-- ABA 4: PERFIL -->
<section id="sec-perfil" class="view-section">
    <div id="profile-logged-out" style="background:#fff; border:1px solid var(--border); border-radius:20px; padding:22px;">
        <h2 style="font-weight:900; font-size:1.25rem; margin-bottom:6px;">👤 Acesse sua Conta</h2>
        <p style="color:#71717a; font-size:0.84rem; margin-bottom:16px; font-weight:600;">Entre ou cadastre-se para salvar seus endereços e acompanhar pedidos.</p>
        <div id="auth-name-group" style="display:none; gap:10px; flex-wrap:wrap;">
            <div class="input-group" style="flex:1; min-width:135px;"><label>Nome *</label><input type="text" id="cli-auth-first-name" placeholder="Ex: João"></div>
            <div class="input-group" style="flex:1; min-width:135px;"><label>Sobrenome *</label><input type="text" id="cli-auth-last-name" placeholder="Ex: Silva"></div>
        </div>
        <div class="input-group" id="auth-phone-group" style="display:none;">
            <label>Seu WhatsApp (com DDD) *</label>
            <input type="tel" id="cli-auth-phone" placeholder="Ex: 91988887777">
        </div>
        <div class="input-group"><label>E-mail</label><input type="email" id="cli-auth-email" placeholder="seuemail@gmail.com"></div>
        <div class="input-group">
            <label>Senha</label>
            <div class="pass-input-wrapper">
                <input type="password" id="cli-auth-pass" placeholder="Sua senha..." oninput="validateStrongPasswordLive(this.value)">
                <button type="button" class="pass-eye-btn" onclick="togglePasswordVisibility('cli-auth-pass', this)">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                </button>
            </div>
            <div class="strong-pass-rules" id="strong-pass-rules-box">
                <div style="font-weight:900; color:#18181b; margin-bottom:2px;">🔒 Sua senha precisa ter:</div>
                <div class="pass-rule-item" id="prule-len"><span>○</span> Mínimo de 6 caracteres</div>
                <div class="pass-rule-item" id="prule-upper"><span>○</span> Pelo menos 1 letra maiúscula (A-Z)</div>
                <div class="pass-rule-item" id="prule-num"><span>○</span> Pelo menos 1 número (0-9)</div>
                <div class="pass-rule-item" id="prule-spec"><span>○</span> Pelo menos 1 caractere especial (@, #, $, !, %...)</div>
            </div>
        </div>
        <div id="forgot-pass-link-box" style="text-align:right; margin-top:-6px; margin-bottom:12px;">
            <button type="button" onclick="openForgotPasswordModal()" style="background:none; border:none; color:#71717a; font-weight:800; font-size:0.78rem; cursor:pointer; text-decoration:underline;">Esqueci minha senha</button>
        </div>
        <button class="btn-primary" id="cli-auth-submit-btn" onclick="submitClientAuth()">Entrar na Conta</button>
        <button type="button" onclick="toggleClientAuthMode()" id="cli-auth-toggle-btn" style="width:100%; background:none; border:none; color:var(--primary); font-weight:800; margin-top:14px; cursor:pointer;">Ainda não tem conta? Cadastre-se grátis</button>
    </div>

    <div id="profile-logged-in" style="display:none;">
        <div id="profile-main-menu">
            <div style="background:#fff; border:1px solid var(--border); border-radius:20px; padding:18px; margin-bottom:14px; display:flex; justify-content:space-between; align-items:center;">
                <div>
                    <h3 id="prof-header-name" style="font-weight:900; font-size:1.15rem;">Cliente</h3>
                    <div id="prof-header-email" style="font-size:0.8rem; color:#71717a; font-weight:600;"></div>
                    <div id="prof-header-phone" style="font-size:0.78rem; color:var(--success); font-weight:800; margin-top:3px;"></div>
                </div>
                <button onclick="logoutClient()" style="background:#fee2e2; color:#dc2626; border:none; padding:9px 14px; border-radius:12px; font-weight:900; cursor:pointer;">Sair</button>
            </div>
            <div style="display:flex; flex-direction:column; gap:10px;">
                <div onclick="openProfileSubView('enderecos')" style="background:#fff; border:1px solid var(--border); border-radius:18px; padding:16px; display:flex; justify-content:space-between; align-items:center; cursor:pointer;">
                    <div style="display:flex; align-items:center; gap:12px;">
                        <div style="width:44px; height:44px; border-radius:12px; background:var(--primary-light); color:var(--primary); display:flex; align-items:center; justify-content:center; font-size:1.3rem;">📍</div>
                        <div><div style="font-weight:900; font-size:1rem;">Endereços</div><div style="font-size:0.78rem; color:#71717a; font-weight:600;">Meus endereços de entrega salvos</div></div>
                    </div>
                    <span style="font-weight:900; color:#a1a1aa;">➔</span>
                </div>
                <div onclick="openProfileSubView('conta')" style="background:#fff; border:1px solid var(--border); border-radius:18px; padding:16px; display:flex; justify-content:space-between; align-items:center; cursor:pointer;">
                    <div style="display:flex; align-items:center; gap:12px;">
                        <div style="width:44px; height:44px; border-radius:12px; background:#f4f4f5; color:#18181b; display:flex; align-items:center; justify-content:center; font-size:1.3rem;">⚙️</div>
                        <div><div style="font-weight:900; font-size:1rem;">Conta</div><div style="font-size:0.78rem; color:#71717a; font-weight:600;">Alterar nome, sobrenome e telefone</div></div>
                    </div>
                    <span style="font-weight:900; color:#a1a1aa;">➔</span>
                </div>
            </div>
        </div>

        <div id="profile-sub-enderecos" style="display:none;">
            <button onclick="openProfileSubView('main')" style="background:#fff; border:1px solid var(--border); padding:8px 14px; border-radius:999px; font-weight:800; margin-bottom:14px; cursor:pointer;">← Voltar ao Perfil</button>
            <div style="background:#fff; border:1px solid var(--border); border-radius:20px; padding:18px;">
                <div style="display:flex; justify-content:space-between; align-items:center; gap:10px; margin-bottom:14px; flex-wrap:wrap;">
                    <div><h3 style="font-weight:900; font-size:1.08rem;">📍 Meus Endereços</h3><p style="font-size:0.76rem; color:#71717a; font-weight:600;">Locais salvos para entrega</p></div>
                    <button type="button" onclick="openAddressFormModal()" style="background:var(--primary); color:#fff; border:none; padding:10px 15px; border-radius:12px; font-weight:900; font-size:0.8rem; cursor:pointer;">+ Adicionar Endereço</button>
                </div>
                <div id="saved-addresses-list"></div>
            </div>
        </div>

        <div id="profile-sub-conta" style="display:none;">
            <button onclick="openProfileSubView('main')" style="background:#fff; border:1px solid var(--border); padding:8px 14px; border-radius:999px; font-weight:800; margin-bottom:14px; cursor:pointer;">← Voltar ao Perfil</button>
            <div style="background:#fff; border:1px solid var(--border); border-radius:20px; padding:18px;">
                <h3 style="font-weight:900; font-size:1.1rem; margin-bottom:14px;">⚙️ Dados da Minha Conta</h3>
                <div style="display:flex; gap:10px; flex-wrap:wrap;">
                    <div class="input-group" style="flex:1; min-width:135px;"><label>Nome *</label><input type="text" id="acc-edit-first-name"></div>
                    <div class="input-group" style="flex:1; min-width:135px;"><label>Sobrenome *</label><input type="text" id="acc-edit-last-name"></div>
                </div>
                <div class="input-group"><label>Telefone / WhatsApp *</label><input type="tel" id="acc-edit-phone"></div>
                <button class="btn-primary" onclick="saveAccountDetails()" style="background:var(--success);">💾 Salvar Alterações</button>
            </div>
        </div>
    </div>
</section>

<footer class="desktop-footer">© 2026 <b>JuabaDelivery</b> • O seu marketplace de restaurantes locais • Rápido, seguro e sem taxas escondidas.</footer>

<nav class="bottom-nav">
    <button class="nav-tab active" id="tab-home" onclick="switchTab('home')"><span style="font-size:1.2rem;">🏠</span><span>Início</span></button>
    <button class="nav-tab" id="tab-busca" onclick="switchTab('busca')"><span style="font-size:1.2rem;">🔍</span><span>Busca</span></button>
    <button class="nav-tab" id="tab-pedidos" style="display:none; position:relative;" onclick="switchTab('pedidos')">
        <span style="font-size:1.2rem; position:relative; display:inline-block;">🧾<span id="mob-pedidos-badge" class="nav-unread-badge">0</span></span>
        <span>Pedidos</span>
    </button>
    <button class="nav-tab" id="tab-perfil" onclick="switchTab('perfil')"><span style="font-size:1.2rem;">👤</span><span>Perfil</span></button>
</nav>

<!-- MODAL SACOLA -->
<div class="modal-overlay" id="modal-cart" onclick="if(event.target===this) closeCartModal()">
    <div class="modal-sheet">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
            <h3 style="font-weight:900; font-size:1.2rem;">🛍️ Minha Sacola</h3>
            <button onclick="closeCartModal()" style="background:none; border:none; font-size:1.4rem; cursor:pointer;">✕</button>
        </div>
        <div id="cart-items-list" style="margin-bottom:16px;"></div>
        <div class="input-group">
            <label>📍 Como deseja receber?</label>
            <input type="hidden" id="cart-delivery-select" value="">
            <div onclick="openCartDeliveryModal()" style="background:#fff; border:1px solid #d4d4d8; border-radius:12px; padding:12px; display:flex; justify-content:space-between; align-items:center; cursor:pointer;">
                <div style="min-width:0; flex:1;">
                    <div id="cart-delivery-title" style="font-weight:900; font-size:0.88rem; color:#18181b; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">🛵 Selecionar endereço de entrega</div>
                    <div id="cart-delivery-sub" style="font-size:0.74rem; color:#71717a; font-weight:600; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; margin-top:2px;">Toque para escolher ou retirar na loja</div>
                </div>
                <span style="background:#f4f4f5; border:1px solid #e4e4e7; padding:5px 10px; border-radius:8px; font-weight:800; font-size:0.74rem; color:var(--primary); flex-shrink:0;">Trocar ▾</span>
            </div>
        </div>
        <div class="input-group">
            <label>🎟️ Cupom de Desconto</label>
            <div style="display:flex; gap:8px;">
                <input type="text" id="cart-coupon-input" placeholder="DIGITE SEU CUPOM" style="flex:1; text-transform:uppercase;">
                <button type="button" onclick="applyCoupon()" style="background:#18181b; color:#fff; border:none; padding:0 16px; border-radius:12px; font-weight:900; cursor:pointer;">Aplicar</button>
            </div>
        </div>
        <div class="input-group">
            <label>💳 Forma de Pagamento</label>
            <select id="cart-payment-select" onchange="toggleChangeField()">
                <option value="PIX">💠 PIX</option>
                <option value="Cartão na Entrega">💳 Cartão na Entrega</option>
                <option value="Dinheiro">💵 Dinheiro</option>
            </select>
        </div>
        <div class="input-group" id="cart-change-box" style="display:none;">
            <label>Troco para quanto?</label>
            <input type="text" id="cart-change-input" placeholder="Ex: R$ 50,00 ou Não precisa">
        </div>
        <div style="background:#f8fafc; border:1px solid var(--border); padding:14px; border-radius:14px; margin:14px 0;">
            <div style="display:flex; justify-content:space-between; font-weight:700; color:#52525b; margin-bottom:6px;"><span>Subtotal</span><span id="cart-subtotal-val">R$ 0,00</span></div>
            <div id="cart-delivery-fee-row" style="display:none; justify-content:space-between; font-weight:700; color:#52525b; margin-bottom:6px;"><span>Taxa de Entrega</span><span id="cart-delivery-fee-val">Grátis</span></div>
            <div id="cart-discount-row" style="display:none; justify-content:space-between; font-weight:800; color:var(--primary); margin-bottom:6px;"><span>Desconto Cupom</span><span id="cart-discount-val">- R$ 0,00</span></div>
            <div style="display:flex; justify-content:space-between; font-weight:900; font-size:1.15rem; color:#111;"><span>Total</span><span id="cart-final-val" style="color:var(--success);">R$ 0,00</span></div>
        </div>
        <button class="btn-primary" onclick="checkoutOrder()">✅ Finalizar Pedido</button>
    </div>
</div>

<!-- MODAL ESCOLHER ENDEREÇO -->
<div class="modal-overlay" id="modal-select-delivery-address" style="z-index:2400;" onclick="if(event.target===this) closeCartDeliveryModal()">
    <div class="modal-sheet" style="max-width:460px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
            <div><h3 style="font-weight:900; font-size:1.12rem;">📍 Onde deseja receber?</h3><p style="font-size:0.76rem; color:#71717a; font-weight:600;">Escolha um dos seus endereços ou retirada</p></div>
            <button type="button" onclick="closeCartDeliveryModal()" style="background:none; border:none; font-size:1.4rem; cursor:pointer;">✕</button>
        </div>
        <div id="cart-delivery-options-list" style="max-height:55vh; overflow-y:auto; margin-bottom:12px;"></div>
        <button type="button" onclick="closeCartDeliveryModal(); openAddressFormModal(true);" style="width:100%; background:#f8fafc; color:#18181b; border:1px dashed #a1a1aa; padding:12px; border-radius:12px; font-weight:900; font-size:0.84rem; cursor:pointer;">+ Cadastrar Novo Endereço</button>
    </div>
</div>

<!-- MODAL CADASTRAR/EDITAR ENDEREÇO -->
<div class="modal-overlay" id="modal-address-form" style="z-index:2600;" onclick="if(event.target===this) closeAddressFormModal()">
    <div class="modal-sheet" style="max-width:460px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
            <h3 style="font-weight:900; font-size:1.1rem;" id="addr-form-title">➕ Novo Endereço</h3>
            <button type="button" onclick="closeAddressFormModal()" style="background:none; border:none; font-size:1.4rem; cursor:pointer;">✕</button>
        </div>
        <div style="display:flex; gap:10px; flex-wrap:wrap;">
            <div class="input-group" style="flex:2; min-width:170px;"><label>Rua / Avenida *</label><input type="text" id="addr-rua" placeholder="Ex: Rua Oeiras do Pará"></div>
            <div class="input-group" style="flex:1; min-width:90px;"><label>Número *</label><input type="text" id="addr-numero" placeholder="Ex: 136"></div>
        </div>
        <div style="display:flex; gap:10px; flex-wrap:wrap;">
            <div class="input-group" style="flex:1; min-width:135px;"><label>Bairro *</label><input type="text" id="addr-bairro" placeholder="Ex: Primavera"></div>
            <div class="input-group" style="flex:1; min-width:135px;"><label>Complemento</label><input type="text" id="addr-comp" placeholder="Ex: Casa B, Apto 102"></div>
        </div>
        <div class="input-group"><label>Ponto de Referência (Opcional)</label><input type="text" id="addr-ref" placeholder="Ex: Próximo à praça"></div>
        <div style="display:flex; gap:8px; margin-top:10px;">
            <button type="button" onclick="closeAddressFormModal()" style="flex:1; background:#f4f4f5; color:#18181b; border:none; padding:12px; border-radius:12px; font-weight:800; cursor:pointer;">Cancelar</button>
            <button type="button" onclick="saveAddressFromProfile()" class="btn-primary" style="flex:1.5; padding:12px;" id="btn-save-addr">💾 Salvar Endereço</button>
        </div>
    </div>
</div>

<!-- MODAL RASTREIO DO PEDIDO -->
<div class="modal-overlay" id="modal-track-order" onclick="if(event.target===this) this.style.display='none'">
    <div class="modal-sheet">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
            <h3 style="font-weight:900; font-size:1.15rem;">🛵 Acompanhar Pedido</h3>
            <button onclick="document.getElementById('modal-track-order').style.display='none'" style="background:none; border:none; font-size:1.4rem; cursor:pointer;">✕</button>
        </div>
        <div id="track-order-body"></div>
    </div>
</div>

<!-- MODAL PIX COPIA E COLA -->
<div class="modal-overlay" id="modal-pix-checkout" style="z-index:2450;" onclick="if(event.target===this) closePixCheckoutModal()">
    <div class="modal-sheet" style="text-align:center; max-width:440px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <span style="background:#dcfce7; color:#15803d; font-weight:900; font-size:0.74rem; padding:4px 10px; border-radius:999px;">💠 PAGAMENTO INSTANTÂNEO</span>
            <button type="button" onclick="closePixCheckoutModal()" style="background:none; border:none; font-size:1.4rem; cursor:pointer; color:#71717a;">✕</button>
        </div>
        <div style="font-size:2.4rem; margin-bottom:4px;">🎉</div>
        <h3 style="font-weight:900; font-size:1.22rem; margin-bottom:4px;">Pedido Enviado! Pague com PIX</h3>
        <p style="font-size:0.82rem; color:#52525b; font-weight:600; margin-bottom:14px;">O código abaixo está no <b>Padrão Banco Central</b> com o valor exato incluso:</p>
        <div style="background:#f0fdf4; border:2px dashed #22c55e; border-radius:18px; padding:16px; margin-bottom:14px; text-align:left;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                <span id="pix-modal-store-name" style="font-weight:900; font-size:0.9rem; color:#166534;">🏪 Restaurante</span>
                <span id="pix-modal-amount" style="background:#16a34a; color:#fff; font-weight:900; font-size:0.95rem; padding:4px 10px; border-radius:10px;">R$ 0,00</span>
            </div>
            <div style="font-size:0.72rem; font-weight:800; color:#15803d; text-transform:uppercase; margin-bottom:4px;">Código PIX Copia e Cola:</div>
            <input type="text" id="pix-modal-payload-input" readonly style="width:100%; padding:10px 12px; border:1px solid #86efac; border-radius:10px; background:#fff; font-family:monospace; font-size:0.76rem; font-weight:700; margin-bottom:10px; outline:none;">
            <button type="button" id="pix-modal-copy-btn" style="width:100%; background:#16a34a; color:#fff; border:none; padding:14px; border-radius:12px; font-weight:900; font-size:0.96rem; cursor:pointer;">📋 Copiar Código PIX Copia e Cola</button>
        </div>
        <div style="display:flex; flex-direction:column; gap:8px;">
            <button type="button" id="pix-modal-chat-btn" class="btn-primary" style="padding:12px;">📎 Enviar Comprovante no Chat da Loja</button>
            <button type="button" id="pix-modal-track-btn" style="width:100%; background:#f4f4f5; color:#18181b; border:none; padding:12px; border-radius:12px; font-weight:800; font-size:0.86rem; cursor:pointer;">🛵 Acompanhar Status do Pedido</button>
        </div>
    </div>
</div>

<!-- MODAL CHAT -->
<div class="modal-overlay" id="modal-chat" onclick="if(event.target===this) closeClientChat()">
    <div class="modal-sheet">
        <div style="display:flex; justify-content:space-between; align-items:center;">
            <h3 id="chat-modal-title" style="font-weight:900; font-size:1.05rem;">💬 Chat com a Loja</h3>
            <button onclick="closeClientChat()" style="background:none; border:none; font-size:1.4rem; cursor:pointer;">✕</button>
        </div>
        <div class="chat-msgs-box" id="client-chat-msgs"></div>
        <div style="display:flex; gap:6px; align-items:center; width:100%;">
            <input type="file" id="chat-file-input" accept="image/*,application/pdf,.pdf" style="display:none;" onchange="handleClientReceiptUpload(this)">
            <button type="button" onclick="document.getElementById('chat-file-input').click()" style="background:#dcfce7; color:#15803d; border:1px solid #86efac; padding:11px 10px; border-radius:12px; font-weight:900; font-size:0.75rem; cursor:pointer; white-space:nowrap;">📎 Comprovante</button>
            <input type="text" id="client-chat-input" placeholder="Mensagem..." maxlength="300" style="flex:1; min-width:0; padding:11px 10px; border:1px solid #d4d4d8; border-radius:12px; font-weight:600; font-size:0.88rem;" onkeypress="if(event.key==='Enter') sendClientChatMsg()">
            <button type="button" onclick="sendClientChatMsg()" style="background:var(--primary); color:#fff; border:none; padding:11px 14px; border-radius:12px; font-weight:900; font-size:0.84rem; cursor:pointer;">Enviar</button>
        </div>
    </div>
</div>

<!-- MODAL VISUALIZADOR DE COMPROVANTE INTERNO (SEGURO PARA PWA) -->
<div class="modal-overlay" id="modal-attachment-viewer" style="z-index:8000; align-items:center;" onclick="if(event.target===this) closeAttachmentViewer()">
    <div class="modal-sheet" style="max-width:600px; border-radius:20px; margin:16px; max-height:92vh; display:flex; flex-direction:column;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <h3 style="font-weight:900; font-size:1.05rem;">📎 Visualizar Comprovante</h3>
            <button type="button" onclick="closeAttachmentViewer()" style="background:#f4f4f5; border:none; width:34px; height:34px; border-radius:50%; font-size:1.1rem; font-weight:900; cursor:pointer;">✕</button>
        </div>
        <div id="attachment-viewer-body" style="flex:1; overflow:auto; display:flex; align-items:center; justify-content:center; background:#f8fafc; border-radius:14px; padding:10px; min-height:280px;"></div>
    </div>
</div>

<!-- MODAL CANCELAR PEDIDO -->
<div class="modal-overlay" id="modal-client-cancel-order" style="z-index:2500;" onclick="if(event.target===this) closeClientCancelModal()">
    <div class="modal-sheet" style="max-width:440px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <h3 style="font-weight:900; font-size:1.15rem; color:#dc2626;">❌ Cancelar Pedido</h3>
            <button type="button" onclick="closeClientCancelModal()" style="background:none; border:none; font-size:1.4rem; cursor:pointer;">✕</button>
        </div>
        <div class="input-group">
            <label>Motivo do Cancelamento</label>
            <select id="client-cancel-reason-select" onchange="document.getElementById('client-cancel-custom-box').style.display = this.value === 'OUTRO' ? 'block' : 'none'">
                <option value="Pedi por engano">Pedi por engano</option>
                <option value="Quero alterar os itens">Quero alterar os itens</option>
                <option value="Demora na entrega">Demora na entrega</option>
                <option value="OUTRO">Outro motivo...</option>
            </select>
        </div>
        <div class="input-group" id="client-cancel-custom-box" style="display:none;">
            <label>Qual o motivo?</label>
            <input type="text" id="client-cancel-custom-input" placeholder="Digite o motivo..." maxlength="140">
        </div>
        <div style="display:flex; gap:8px; margin-top:14px;">
            <button type="button" onclick="closeClientCancelModal()" style="flex:1; background:#f4f4f5; color:#18181b; border:none; padding:13px; border-radius:12px; font-weight:800; cursor:pointer;">Voltar</button>
            <button type="button" onclick="confirmClientCancelOrder()" style="flex:1; background:#dc2626; color:#fff; border:none; padding:13px; border-radius:12px; font-weight:900; cursor:pointer;">Confirmar</button>
        </div>
    </div>
</div>

<!-- MODAL AVALIAR PEDIDO -->
<div class="modal-overlay" id="modal-rate-order" onclick="if(event.target===this) closeRateModal()">
    <div class="modal-sheet" style="text-align:center;">
        <div style="font-size:2.8rem; margin-bottom:8px;">⭐</div>
        <h3 style="font-weight:900; font-size:1.25rem; margin-bottom:6px;">Avalie seu Pedido</h3>
        <p id="rate-store-name" style="color:#71717a; font-size:0.86rem; margin-bottom:16px; font-weight:700;">Como foi sua experiência?</p>
        <div style="display:flex; justify-content:center; gap:8px; margin-bottom:16px;">
            <button type="button" onclick="setRatingStars(1)" style="background:none; border:none; font-size:2.2rem; cursor:pointer;" id="star-btn-1">⭐</button>
            <button type="button" onclick="setRatingStars(2)" style="background:none; border:none; font-size:2.2rem; cursor:pointer;" id="star-btn-2">⭐</button>
            <button type="button" onclick="setRatingStars(3)" style="background:none; border:none; font-size:2.2rem; cursor:pointer;" id="star-btn-3">⭐</button>
            <button type="button" onclick="setRatingStars(4)" style="background:none; border:none; font-size:2.2rem; cursor:pointer;" id="star-btn-4">⭐</button>
            <button type="button" onclick="setRatingStars(5)" style="background:none; border:none; font-size:2.2rem; cursor:pointer;" id="star-btn-5">⭐</button>
        </div>
        <div class="input-group"><textarea id="rate-comment" rows="2" placeholder="Deixe um elogio ou comentário (opcional)..." maxlength="220"></textarea></div>
        <button class="btn-primary" onclick="submitOrderRating()">Enviar Avaliação</button>
    </div>
</div>

<!-- MODAL VERIFICAÇÃO PIN 4 DÍGITOS -->
<div class="modal-overlay" id="modal-client-verify-pin" style="z-index:6500;">
    <div class="modal-sheet" style="text-align:center; max-width:420px; border-radius:24px; margin:auto;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
            <span style="font-size:0.74rem; font-weight:900; color:var(--primary); text-transform:uppercase;">Verificação de Segurança</span>
            <button type="button" onclick="document.getElementById('modal-client-verify-pin').style.display='none'" style="background:none; border:none; font-size:1.3rem; cursor:pointer; color:#71717a;">✕</button>
        </div>
        <div style="font-size:2.4rem; margin-bottom:6px;">📩</div>
        <h3 style="font-weight:900; font-size:1.2rem; margin-bottom:6px;">Confirme seu E-mail</h3>
        <p style="color:#52525b; font-size:0.84rem; font-weight:600; margin-bottom:14px;">Enviamos um código PIN de <b>4 dígitos</b> para:<br><b id="client-pin-target-email" style="color:var(--primary);"></b></p>
        <div class="input-group" style="text-align:center;">
            <label style="text-align:center;">Digite o PIN de 4 dígitos</label>
            <input type="text" id="client-pin-code-input" maxlength="4" inputmode="numeric" placeholder="0000" style="text-align:center; font-size:1.6rem; font-weight:900; letter-spacing:10px; padding:12px;" onkeypress="if(event.key==='Enter') confirmClientEmailPin()">
        </div>
        <button type="button" class="btn-primary" id="btn-client-confirm-pin" onclick="confirmClientEmailPin()" style="background:var(--success); margin-bottom:10px;">✅ Validar PIN e Concluir Cadastro</button>
        <button type="button" onclick="resendClientPin()" style="background:none; border:none; color:var(--primary); font-weight:800; font-size:0.82rem; cursor:pointer;">🔄 Reenviar PIN para meu e-mail</button>
    </div>
</div>

<!-- MODAL RECUPERAÇÃO DE SENHA -->
<div class="modal-overlay" id="modal-forgot-password" onclick="if(event.target===this) closeForgotPasswordModal()">
    <div class="modal-sheet" style="text-align:center; max-width:420px; border-radius:24px; margin:auto;">
        <div style="display:flex; justify-content:flex-end;">
            <button type="button" onclick="closeForgotPasswordModal()" style="background:none; border:none; font-size:1.3rem; cursor:pointer; color:#71717a;">✕</button>
        </div>
        <div style="font-size:2.4rem; margin-bottom:6px;">🔑</div>
        <h3 style="font-weight:900; font-size:1.22rem; margin-bottom:6px;">Recuperar Minha Senha</h3>
        <p style="color:#52525b; font-size:0.84rem; font-weight:600; margin-bottom:14px;">Informe seu e-mail cadastrado para receber o link de redefinição:</p>
        <div class="input-group"><label>Seu E-mail Cadastrado</label><input type="email" id="forgot-pass-email" placeholder="seuemail@gmail.com" onkeypress="if(event.key==='Enter') sendClientPasswordReset()"></div>
        <button type="button" class="btn-primary" onclick="sendClientPasswordReset()">📩 Enviar E-mail de Recuperação</button>
    </div>
</div>

<!-- MODAL AJUDA INSTALAÇÃO PWA -->
<div class="modal-overlay" id="modal-pwa-install-help" style="z-index:7000;" onclick="if(event.target===this) this.style.display='none'">
    <div class="modal-sheet" style="max-width:440px; text-align:left;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <h3 style="font-weight:900; font-size:1.15rem;">📲 Baixar App JuabaDelivery</h3>
            <button type="button" onclick="document.getElementById('modal-pwa-install-help').style.display='none'" style="background:none; border:none; font-size:1.4rem; cursor:pointer;">✕</button>
        </div>
        <div style="background:#f8fafc; border:1px solid var(--border); border-radius:14px; padding:14px; margin-bottom:10px;">
            <div style="font-weight:900; font-size:0.88rem; margin-bottom:6px;">🤖 No Android (Chrome / Samsung):</div>
            <div style="font-size:0.8rem; color:#3f3f46; font-weight:600; line-height:1.5;">1. Toque nos <b>3 pontinhos (⋮)</b> no canto superior.<br>2. Toque em <b>"Instalar aplicativo"</b> ou <b>"Adicionar à tela inicial"</b>.</div>
        </div>
        <div style="background:#f8fafc; border:1px solid var(--border); border-radius:14px; padding:14px; margin-bottom:14px;">
            <div style="font-weight:900; font-size:0.88rem; margin-bottom:6px;">🍎 No iPhone (Safari):</div>
            <div style="font-size:0.8rem; color:#3f3f46; font-weight:600; line-height:1.5;">1. Toque em <b>Compartilhar (⬆️)</b> na barra inferior.<br>2. Toque em <b>"Adicionar à Tela de Início"</b>.</div>
        </div>
        <button type="button" class="btn-primary" onclick="document.getElementById('modal-pwa-install-help').style.display='none'">Entendi!</button>
    </div>
</div>

<script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
    import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
    import { getFirestore, collection, doc, getDoc, setDoc, addDoc, onSnapshot, query, where } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
    import { getMessaging, getToken, onMessage, isSupported } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging.js";

    const firebaseConfig = {
        apiKey: "AIzaSyBYRRtW1_lmoEMd89f7kQ-L6IzkhTkofR4",
        authDomain: "juaba-delivery.firebaseapp.com",
        projectId: "juaba-delivery",
        storageBucket: "juaba-delivery.firebasestorage.app",
        messagingSenderId: "1048831257004",
        appId: "1:1048831257004:web:8db55b5383206296ad3209"
    };

    const app = initializeApp(firebaseConfig, "JuabaClienteApp");
    const auth = getAuth(app);
    const db = getFirestore(app);
    const el = (id) => document.getElementById(id);

    // Escopo Privado de Segurança (Inacessível via Console DevTools)
    const GOOGLE_SCRIPT_URL = localStorage.getItem('juaba_gscript_url') || "https://script.google.com/macros/s/AKfycbzPwVthaJMg8GifsEy09DapU84EJzVrpuJeyD6EB4dGyIdv3VR6yCzW_1LR_Zdg1GYb/exec";
    let _pendingClientReg = null;
    let _pinHash = null;
    let _internalCoupons = [];
    let _unsubscribeOrders = null;

    const hashPin = (pin) => btoa("JB_SALT_" + String(pin).trim());

    window.escapeHtml = function(str) {
        return String(str ?? '')
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    };

    // Motor PWA Híbrido
    window.deferredPwaPrompt = null;
    window.generateAppPngIcon = function(size) {
        try {
            const c = document.createElement('canvas'); c.width = size; c.height = size;
            const ctx = c.getContext('2d');
            ctx.fillStyle = '#ea1d2c'; ctx.beginPath();
            const r = Math.round(size * 0.22);
            ctx.roundRect ? ctx.roundRect(0, 0, size, size, r) : ctx.fillRect(0, 0, size, size);
            ctx.fill();
            ctx.fillStyle = '#fff'; ctx.font = `900 ${Math.round(size * 0.42)}px Inter, sans-serif`;
            ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            ctx.fillText('JD', size / 2, size * 0.48);
            ctx.strokeStyle = '#fff'; ctx.lineWidth = Math.max(4, Math.round(size * 0.045)); ctx.lineCap = 'round';
            ctx.beginPath(); ctx.moveTo(size * 0.26, size * 0.72); ctx.quadraticCurveTo(size * 0.5, size * 0.88, size * 0.74, size * 0.72); ctx.stroke();
            return c.toDataURL('image/png');
        } catch (e) { return `https://placehold.co/${size}x${size}/ea1d2c/ffffff.png?text=JD`; }
    };

    (async function setupHybridPwaEngine() {
        const icon192 = window.generateAppPngIcon(192);
        if (el('pwa-fav-icon')) el('pwa-fav-icon').href = icon192;
        if (el('pwa-apple-icon')) el('pwa-apple-icon').href = icon192;

        // Mantém o link fixo para /manifest.json para o Android instalar em tela cheia (WebAPK) sem barra de URL
        if ('serviceWorker' in navigator) {
            try {
                const reg = await navigator.serviceWorker.register('/sw.js', { scope: '/' });
                window.swRegistration = reg;
            } catch (err) {
                navigator.serviceWorker.register('./sw.js', { scope: '/' }).catch(() => {});
            }
        }
    })();

    window.isRunningStandalone = () => window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

    window.allStores = [];
    window.allProducts = [];
    window.storesWithCoupons = new Set();
    window.myOrders = [];
    try {
        window.cart = JSON.parse(localStorage.getItem('juaba_saved_cart') || '[]');
        if (!Array.isArray(window.cart)) window.cart = [];
    } catch (e) { window.cart = []; }
    window.globalBillingEnabled = true;
    window.currentClient = null;
    window.clientProfileData = { nome: '', primeiroNome: '', sobrenome: '', telefone: '', enderecos: [] };
    window.isRegisterMode = false;
    window.editingAddressIndex = -1;
    window.prevStoreChatCounts = {};
    window.prevOrderStatusMap = {};
    window.initialOrdersLoadDone = false;

    window.selectedCategory = 'TODOS';
    window.quickFilterMode = 'ALL';
    window.storesViewMode = localStorage.getItem('juaba_stores_view') || 'grid';
    window.catProductsViewMode = localStorage.getItem('juaba_catprod_view') || 'grid';
    window.suggestedViewMode = localStorage.getItem('juaba_sug_view') || 'grid';

    window.activeStoreId = null;
    window.activeStoreCategory = 'TODOS';
    window.previousSectionBeforeProduct = 'home';
    window.previousSectionBeforeStore = 'home';
    window.selectedDeliveryIdx = 0;
    window.reopenDeliveryModalAfterSave = false;

    window.categoryIconsMap = {
        'Lanches': '🍔', 'Pizzas': '🍕', 'Bebidas': '🥤',
        'Petiscos': '🍟', 'Açaí': '🍨', 'Refeições': '🍲', 'Doces': '🍰'
    };

    window.detailProduct = null;
    window.detailQty = 1;
    window.detailAddonSelections = {};
    window.appliedCoupon = null;
    window.activeTrackOrderId = null;
    window.activeChatOrderId = null;
    window.selectedStarsCount = 5;
    window.ratingTargetOrderId = null;
    window.clientFcmToken = localStorage.getItem('juaba_fcm_token') || '';

    window.defaultBanners = [
        { img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80", text: "Festival de Pizzas" },
        { img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80", text: "Artesanais Suculentos" }
    ];

    window.showToast = (msg) => {
        const t = el('toast'); if (!t) return;
        t.innerText = msg; t.classList.add('show');
        setTimeout(() => t.classList.remove('show'), 3000);
    };

    window.playClientNotificationSound = () => {
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator(), gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(587.33, ctx.currentTime);
            osc.frequency.setValueAtTime(880, ctx.currentTime + 0.11);
            gain.gain.setValueAtTime(0.18, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.38);
            osc.connect(gain); gain.connect(ctx.destination);
            osc.start(); osc.stop(ctx.currentTime + 0.38);
        } catch (e) {}
    };

    window.dismissOnscreenPwaCard = () => {
        if (el('pwa-onscreen-install-card')) el('pwa-onscreen-install-card').style.display = 'none';
        sessionStorage.setItem('juaba_pwa_card_closed', '1');
    };
    if (window.isRunningStandalone() || sessionStorage.getItem('juaba_pwa_card_closed') === '1') {
        if (el('pwa-onscreen-install-card')) el('pwa-onscreen-install-card').style.display = 'none';
    }

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        window.deferredPwaPrompt = e;
        if (el('btn-pwa-install-mob')) el('btn-pwa-install-mob').style.display = 'inline-flex';
        if (el('pwa-onscreen-install-card') && !window.isRunningStandalone()) el('pwa-onscreen-install-card').style.display = 'flex';
    });

    window.addEventListener('appinstalled', () => {
        window.deferredPwaPrompt = null;
        if (el('btn-pwa-install-mob')) el('btn-pwa-install-mob').style.display = 'none';
        if (el('pwa-onscreen-install-card')) el('pwa-onscreen-install-card').style.display = 'none';
        window.showToast("🎉 Aplicativo instalado com sucesso!");
    });

    window.triggerNativePwaInstall = async () => {
        if (window.deferredPwaPrompt) {
            window.deferredPwaPrompt.prompt();
            await window.deferredPwaPrompt.userChoice;
            window.deferredPwaPrompt = null;
        } else {
            el('modal-pwa-install-help').style.display = 'flex';
        }
    };

    window.checkNotificationButtonUI = () => {
        const btn = el('btn-enable-notif-mob');
        if (!btn) return;
        if ('Notification' in window && Notification.permission === 'default') {
            btn.style.display = 'inline-flex';
        } else {
            btn.style.display = 'none';
        }
    };

    window.requestNotificationPermissionManual = async () => {
        if (!('Notification' in window)) {
            window.showToast("ℹ️ Seu navegador não suporta alertas nativos.");
            return;
        }
        try {
            const perm = await Notification.requestPermission();
            window.checkNotificationButtonUI();
            if (perm === 'granted') {
                window.showToast("🔔 Alertas ativados com sucesso!");
                window.initPushNotificationsEngine();
            } else {
                window.showToast("⚠️ Permissão de notificação negada nas configurações do navegador.");
            }
        } catch (e) {}
    };

    window.initPushNotificationsEngine = async () => {
        window.checkNotificationButtonUI();
        try {
            if ('serviceWorker' in navigator && !window.swRegistration) {
                window.swRegistration = await navigator.serviceWorker.getRegistration().catch(() => null);
            }
            const supported = await isSupported().catch(() => false);
            if (!supported) return;
            const messaging = getMessaging(app);

            onMessage(messaging, (payload) => {
                const title = payload?.notification?.title || payload?.data?.title || 'JuabaDelivery';
                const body = payload?.notification?.body || payload?.data?.body || 'Atualização no seu pedido!';
                window.triggerNativeSystemNotification(title, body, payload?.data?.orderId);
            });

            if ('Notification' in window && Notification.permission === 'granted') {
                const swReg = window.swRegistration || await navigator.serviceWorker?.ready.catch(() => null);
                const token = await getToken(messaging, swReg ? { serviceWorkerRegistration: swReg } : undefined).catch(() => '');
                if (token) {
                    window.clientFcmToken = token;
                    localStorage.setItem('juaba_fcm_token', token);
                    if (window.currentClient?.uid) {
                        setDoc(doc(db, "usuario", window.currentClient.uid), { fcmToken: token, updatedAtMs: Date.now() }, { merge: true }).catch(() => {});
                    }
                }
            }
        } catch (e) {}
    };

    window.triggerNativeSystemNotification = async (title, body, orderId = null) => {
        window.playClientNotificationSound();
        if (navigator.vibrate) { try { navigator.vibrate([300, 120, 300, 120, 400]); } catch (e) {} }
        if (!('Notification' in window) || Notification.permission !== 'granted') return;
        const iconUrl = window.generateAppPngIcon(192);
        const options = {
            body: String(body || ''),
            icon: iconUrl,
            badge: iconUrl,
            tag: orderId ? `juaba_ord_${orderId}` : `juaba_notif_${Date.now()}`,
            renotify: true,
            requireInteraction: true,
            vibrate: [300, 120, 300, 120, 400],
            data: { orderId, url: window.location.origin + '/?pedido=' + (orderId || '') }
        };
        try {
            const reg = window.swRegistration || await navigator.serviceWorker?.getRegistration();
            if (reg && typeof reg.showNotification === 'function') {
                await reg.showNotification(title, options);
                return;
            }
        } catch (e) {}
        try {
            const n = new Notification(title, options);
            n.onclick = () => {
                window.focus();
                if (orderId) window.openTrackModal(orderId);
                n.close();
            };
        } catch (e) {}
    };

    window.togglePasswordVisibility = (inputId, btnEl) => {
        const inp = el(inputId); if (!inp) return;
        const isPass = inp.type === 'password';
        inp.type = isPass ? 'text' : 'password';
        btnEl.innerHTML = isPass
            ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ea1d2c" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>`
            : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
    };

    window.checkStrongPassword = (pass) => {
        const p = String(pass || '');
        return {
            len: p.length >= 6, upper: /[A-Z]/.test(p), num: /[0-9]/.test(p), spec: /[^A-Za-z0-9]/.test(p),
            get isValid() { return this.len && this.upper && this.num && this.spec; }
        };
    };

    window.validateStrongPasswordLive = (val) => {
        if (!window.isRegisterMode) return;
        const res = window.checkStrongPassword(val);
        const setRule = (id, ok) => {
            const node = el(id); if (!node) return;
            node.classList.toggle('valid', ok);
            const sp = node.querySelector('span'); if (sp) sp.innerText = ok ? '✔' : '○';
        };
        setRule('prule-len', res.len); setRule('prule-upper', res.upper);
        setRule('prule-num', res.num); setRule('prule-spec', res.spec);
    };

    window.saveNavigationState = (stateObj) => {
        try { sessionStorage.setItem('juaba_nav_state', JSON.stringify(stateObj)); } catch (e) {}
    };

    window.restoreNavigationState = () => {
        try {
            const raw = sessionStorage.getItem('juaba_nav_state');
            if (!raw) return;
            const st = JSON.parse(raw);
            if (!st || !st.view) return;
            if (st.view === 'category-view' && st.category && st.category !== 'TODOS') window.openCategoryFullScreen(st.category);
            else if (st.view === 'store-menu' && st.storeId) { window.activeStoreId = st.storeId; window.openStoreMenu(st.storeId); }
            else if (st.view === 'product-detail' && st.prodId) {
                const foundProd = window.allProducts.find(x => x.id === st.prodId);
                if (foundProd) window.openProductDetailModal(st.prodId);
                else if (st.storeId) window.openStoreMenu(st.storeId);
            } else if (st.view === 'perfil') {
                window.switchTab('perfil');
                if (st.profileSub && st.profileSub !== 'main') window.openProfileSubView(st.profileSub);
            } else if (['home', 'busca', 'pedidos'].includes(st.view)) window.switchTab(st.view);
        } catch (e) {}
    };

    window.getStoreMessagesCount = (orderObj) => (orderObj && Array.isArray(orderObj.chat)) ? orderObj.chat.filter(m => m.sender === 'loja').length : 0;

    window.getUnreadStoreMessagesForOrder = (orderObj) => {
        if (!orderObj || window.isOrderDone(orderObj.status) || orderObj.status === 'Cancelado') return 0;
        const totalStoreMsgs = window.getStoreMessagesCount(orderObj);
        const seenCount = parseInt(localStorage.getItem('juaba_seen_chat_' + orderObj.id) || '0', 10);
        return Math.max(0, totalStoreMsgs - seenCount);
    };

    window.markOrderChatAsRead = (orderId) => {
        const o = window.myOrders.find(x => x.id === orderId); if (!o) return;
        try { localStorage.setItem('juaba_seen_chat_' + orderId, String(window.getStoreMessagesCount(o))); } catch (e) {}
        window.updateUnreadChatBadgesUI();
        window.renderClientOrders();
    };

    window.updateUnreadChatBadgesUI = () => {
        let totalUnread = 0;
        (window.myOrders || []).forEach(o => { totalUnread += window.getUnreadStoreMessagesForOrder(o); });
        ['mob-pedidos-badge', 'dnav-pedidos-badge'].forEach(id => {
            const b = el(id);
            if (!b) return;
            if (totalUnread > 0) { b.innerText = totalUnread > 9 ? '9+' : String(totalUnread); b.style.display = 'inline-flex'; }
            else b.style.display = 'none';
        });
    };

    window.parseCurrencyToNumber = (valRaw) => {
        if (typeof valRaw === 'number') return valRaw;
        const clean = String(valRaw || '0').replace(/[^\d,.-]/g, '').replace(/\.(?=\d{3}(?:,|$))/g, '').replace(',', '.');
        return parseFloat(clean) || 0;
    };

    window.getStoreDeliveryFee = (loja) => loja ? Math.max(0, window.parseCurrencyToNumber(loja.taxa_entrega ?? loja.taxaEntrega ?? 0)) : 0;

    window.getStorePixKey = (loja, orderObj = null) => {
        if (orderObj?.chavePixLoja) return String(orderObj.chavePixLoja).trim();
        if (loja?.chave_pix) return String(loja.chave_pix).trim();
        if (loja?.whatsapp) return String(loja.whatsapp).trim();
        if (loja?.email_loja) return String(loja.email_loja).trim();
        return '';
    };

    window.generatePixCopiaECola = (chaveRaw, nomeLojaRaw, valorNum, txidRaw) => {
        let key = String(chaveRaw || '').trim();
        if (!key) return '';
        const cleanDigits = key.replace(/\D/g, '');
        if (!key.includes('@') && !key.startsWith('+')) {
            if (cleanDigits.length === 11 && !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(key)) {
                key = (key.includes('(') || key.includes('-') || key.includes(' ')) ? '+55' + cleanDigits : cleanDigits;
            } else if (cleanDigits.length === 14) key = cleanDigits;
        }
        const f = (id, val) => id + String(val.length).padStart(2, '0') + val;
        const nome = (nomeLojaRaw || 'RESTAURANTE').normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9 ]/g, "").substring(0, 25).trim() || 'LOJA';
        const txid = (txidRaw || 'JUABA').replace(/[^a-zA-Z0-9]/g, '').substring(0, 20) || 'JUABA';
        const gui = f('00', 'br.gov.bcb.pix') + f('01', key);
        const amountNumber = window.parseCurrencyToNumber(valorNum);
        let payload = f('00', '01') + f('26', gui) + f('52', '0000') + f('53', '986');
        if (amountNumber > 0) payload += f('54', amountNumber.toFixed(2));
        payload += f('58', 'BR') + f('59', nome) + f('60', 'BRASIL') + f('62', f('05', txid)) + '6304';

        let crc = 0xFFFF;
        for (let i = 0; i < payload.length; i++) {
            crc ^= payload.charCodeAt(i) << 8;
            for (let j = 0; j < 8; j++) crc = (crc & 0x8000) ? ((crc << 1) ^ 0x1021) : (crc << 1);
        }
        return payload + (crc & 0xFFFF).toString(16).toUpperCase().padStart(4, '0');
    };

    window.copyTextToClipboard = (txt, successMsg) => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(txt).then(() => window.showToast(successMsg));
        } else {
            const ta = document.createElement('textarea');
            ta.value = txt; document.body.appendChild(ta); ta.select();
            document.execCommand('copy'); document.body.removeChild(ta);
            window.showToast(successMsg);
        }
    };

    window.openPixCheckoutModal = (orderId, orderObj = null) => {
        const o = window.myOrders.find(x => x.id === orderId) || orderObj; if (!o) return;
        const loja = window.allStores.find(s => s.id === o.lojaId);
        const nomeLoja = o.nomeLoja || loja?.nome_loja || 'Restaurante';
        const chavePix = window.getStorePixKey(loja, o);
        const valNum = window.parseCurrencyToNumber(o.total);
        const pixPayload = o.pixCopiaECola || window.generatePixCopiaECola(chavePix || '00000000000', nomeLoja, valNum, String(orderId || 'JUABA').substring(0, 8));

        el('pix-modal-store-name').innerText = `🏪 ${nomeLoja}`;
        el('pix-modal-amount').innerText = o.total || `R$ ${valNum.toFixed(2).replace('.', ',')}`;
        el('pix-modal-payload-input').value = pixPayload;
        el('pix-modal-copy-btn').onclick = () => window.copyTextToClipboard(pixPayload, "✅ Código PIX Copia e Cola copiado!");
        el('pix-modal-chat-btn').onclick = () => { window.closePixCheckoutModal(); window.openClientChat(orderId); };
        el('pix-modal-track-btn').onclick = () => { window.closePixCheckoutModal(); window.openTrackModal(orderId, o); };
        el('modal-pix-checkout').style.display = 'flex';
    };
    window.closePixCheckoutModal = () => { el('modal-pix-checkout').style.display = 'none'; };

    window.isStoreOpenBySchedule = (loja) => {
        if (!loja) return false;
        const cobrancaAtiva = (window.globalBillingEnabled !== false) && !(loja.cobrancaAtiva === false || String(loja.cobrancaAtiva).toLowerCase() === 'false');
        const expiraMs = Number(loja.expiraEmMs) || 0;
        if (cobrancaAtiva && (loja.contaExpirada === true || (expiraMs > 0 && Date.now() > expiraMs))) return false;
        if (loja.aberto === false || String(loja.aberto).toLowerCase() === 'false') return false;
        if (!loja.horarioAutoAtivo) return true;

        const abreStr = String(loja.horarioAbre || '').trim(), fechaStr = String(loja.horarioFecha || '').trim();
        if (!abreStr || !fechaStr) return true;
        const now = new Date(), curDay = now.getDay(), prevDay = (curDay + 6) % 7;
        const dias = Array.isArray(loja.diasFuncionamento) ? loja.diasFuncionamento.map(Number) : [0, 1, 2, 3, 4, 5, 6];
        const [aH, aM] = abreStr.split(':').map(Number), [fH, fM] = fechaStr.split(':').map(Number);
        if (isNaN(aH) || isNaN(fH)) return true;
        const nowMins = now.getHours() * 60 + now.getMinutes(), aMins = aH * 60 + (aM || 0), fMins = fH * 60 + (fM || 0);
        if (aMins === fMins) return dias.includes(curDay);
        return aMins < fMins ? (dias.includes(curDay) && nowMins >= aMins && nowMins < fMins) : (nowMins >= aMins ? dias.includes(curDay) : (nowMins < fMins ? dias.includes(prevDay) : false));
    };

    window.categoryMatches = (prodCat, selectedCat) => {
        if (!selectedCat || selectedCat === 'TODOS') return true;
        const a = String(prodCat || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
        const b = String(selectedCat || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
        if (!a) return false;
        const rA = a.endsWith('s') ? a.slice(0, -1) : a, rB = b.endsWith('s') ? b.slice(0, -1) : b;
        return a === b || rA === rB || a.includes(rB) || b.includes(rA);
    };

    window.switchTab = (tab) => {
        if (tab === 'home') window.selectedCategory = 'TODOS';
        document.querySelectorAll('.view-section').forEach(s => s.classList.remove('active'));
        if (el(`sec-${tab}`)) el(`sec-${tab}`).classList.add('active');
        document.querySelectorAll('.nav-tab').forEach(b => b.classList.remove('active'));
        const navBtn = el(`tab-${tab === 'category-view' ? 'home' : tab}`);
        if (navBtn) navBtn.classList.add('active');
        if (el('dnav-home')) el('dnav-home').classList.toggle('active', tab === 'home' || tab === 'category-view');
        if (el('dnav-pedidos')) el('dnav-pedidos').classList.toggle('active', tab === 'pedidos');

        if (tab === 'perfil' && window.currentClient) {
            el('profile-main-menu').style.display = 'block';
            el('profile-sub-enderecos').style.display = 'none';
            el('profile-sub-conta').style.display = 'none';
            window.updateClientHeaderUI();
        }
        window.saveNavigationState({ view: tab, profileSub: 'main' });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.applyUnifiedViewMode = (mode) => {
        window.storesViewMode = mode; window.catProductsViewMode = mode; window.suggestedViewMode = mode;
        localStorage.setItem('juaba_stores_view', mode);
        ['stores-list', 'cat-stores-list', 'home-category-products-list', 'detail-suggestions-list'].forEach(id => {
            const node = el(id);
            if (node) { node.classList.toggle('list-mode', mode === 'list'); node.classList.toggle('grid-mode', mode === 'grid'); }
        });
        const iconChar = mode === 'grid' ? '⊞' : '☰';
        ['btn-toggle-home-view', 'btn-toggle-cat-view', 'btn-toggle-sug-view'].forEach(id => { if (el(id)) el(id).innerText = iconChar; });
    };

    window.toggleUnifiedViewMode = () => window.applyUnifiedViewMode(window.storesViewMode === 'grid' ? 'list' : 'grid');

    window.stepBannerCarousel = (dir) => {
        const row = el('home-banners'); if (!row) return;
        const firstCard = row.querySelector('.banner-card');
        const stepWidth = firstCard ? (firstCard.offsetWidth + 16) : 260;
        const maxScroll = row.scrollWidth - row.clientWidth;
        if (dir > 0 && row.scrollLeft >= maxScroll - 10) row.scrollTo({ left: 0, behavior: 'smooth' });
        else if (dir < 0 && row.scrollLeft <= 10) row.scrollTo({ left: maxScroll, behavior: 'smooth' });
        else row.scrollBy({ left: dir * stepWidth, behavior: 'smooth' });
    };

    window.renderBanners = (bannersArr) => {
        const box = el('home-banners'); if (!box) return;
        const list = (Array.isArray(bannersArr) && bannersArr.length > 0) ? bannersArr : window.defaultBanners;
        box.innerHTML = list.map(b => `
            <div class="banner-card">
                <img src="${window.escapeHtml(b.img)}" onerror="this.src='https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80'">
                ${b.text ? `<div class="banner-title">${window.escapeHtml(b.text)}</div>` : ''}
            </div>`).join('');
    };

    window.renderStoreCardHtml = (s) => {
        const isOpen = window.isStoreOpenBySchedule(s);
        return `
        <div class="store-card" onclick="openStoreMenu('${s.id}')">
            <img src="${window.escapeHtml(s.logo_loja || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=150')}" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=150'">
            <div>
                <div style="font-weight:900; font-size:1rem; color:#111;">${window.escapeHtml(s.nome_loja || 'Restaurante')}</div>
                <div style="font-size:0.78rem; font-weight:800; margin-top:4px; display:flex; align-items:center; gap:6px; flex-wrap:wrap; justify-content:inherit;">
                    <span style="color:#f59e0b;">★ ${window.escapeHtml(s.nota || '5.0')}</span><span>•</span>
                    <span style="color:${isOpen ? 'var(--success)' : '#dc2626'};">${isOpen ? '🟢 Aberta' : '🔴 Fechada'}</span>
                </div>
            </div>
        </div>`;
    };

    window.renderProdCardHtml = (p, showStoreName = true) => {
        const loja = window.allStores.find(s => s.id === p.lojaId);
        const precoAtual = parseFloat(p.preco || 0), precoAntigo = parseFloat(p.precoAntigo || 0);
        const temDesconto = precoAntigo > precoAtual;
        const pct = temDesconto ? Math.round(((precoAntigo - precoAtual) / precoAntigo) * 100) : 0;
        return `
        <div class="prod-card" onclick="openProductDetailModal('${p.id}')">
            <div style="flex:1;">
                ${showStoreName ? `<div style="font-size:0.72rem; font-weight:800; color:var(--primary); margin-bottom:2px;">🏪 ${window.escapeHtml(loja ? loja.nome_loja : 'Restaurante')}</div>` : ''}
                <div style="font-weight:900; font-size:0.95rem; color:#111;">${window.escapeHtml(p.nome)}</div>
                <div style="font-size:0.76rem; color:#71717a; margin:3px 0 6px; line-height:1.3;">${window.escapeHtml(p.descricao || '')}</div>
                <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap; justify-content:inherit;">
                    <span style="font-weight:900; font-size:0.94rem; color:var(--success);">R$ ${precoAtual.toFixed(2).replace('.', ',')}</span>
                    ${temDesconto ? `<span style="font-size:0.74rem; font-weight:800; color:#a1a1aa; text-decoration:line-through;">R$ ${precoAntigo.toFixed(2).replace('.', ',')}</span><span style="background:#fee2e2; color:#dc2626; font-size:0.65rem; font-weight:900; padding:2px 6px; border-radius:6px;">🔥 -${pct}% OFF</span>` : ''}
                </div>
            </div>
            <img src="${window.escapeHtml(p.imagem || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=150')}" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=150'">
        </div>`;
    };

    window.setQuickFilter = (mode, btnEl) => {
        window.quickFilterMode = mode;
        document.querySelectorAll('.quick-filters-bar .filter-chip').forEach(c => c.classList.remove('active'));
        if (btnEl) btnEl.classList.add('active');
        window.renderHomeView();
    };

    window.renderHomeView = () => {
        window.applyUnifiedViewMode(window.storesViewMode);
        const activeStores = window.allStores.filter(s => !(s.bloqueada === true || String(s.bloqueada).toLowerCase() === 'true'));
        const filteredStores = activeStores.filter(s => {
            if (window.quickFilterMode === 'OPEN') return window.isStoreOpenBySchedule(s);
            if (window.quickFilterMode === 'TOP') return parseFloat(s.nota || '5.0') >= 4.8;
            if (window.quickFilterMode === 'COUPON') return window.storesWithCoupons.has(s.id);
            return true;
        });
        if (el('stores-count-label')) el('stores-count-label').innerText = `${filteredStores.length} loja(s)`;
        const storesEl = el('stores-list');
        if (storesEl) {
            storesEl.innerHTML = filteredStores.length
                ? filteredStores.map(window.renderStoreCardHtml).join('')
                : `<p style="grid-column:1/-1; text-align:center; padding:26px; color:#71717a; font-weight:700; background:#fff; border-radius:16px; border:1px solid var(--border);">Nenhuma loja encontrada para este filtro.</p>`;
        }
        if (window.selectedCategory && window.selectedCategory !== 'TODOS') window.renderCategoryFullScreen();
    };

    window.openCategoryFullScreen = (cat) => {
        window.selectedCategory = cat;
        window.renderCategoryFullScreen();
        document.querySelectorAll('.view-section').forEach(s => s.classList.remove('active'));
        el('sec-category-view').classList.add('active');
        window.saveNavigationState({ view: 'category-view', category: cat });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.closeCategoryFullScreen = () => { window.selectedCategory = 'TODOS'; window.switchTab('home'); };

    window.renderCategoryFullScreen = () => {
        const cat = window.selectedCategory; if (!cat || cat === 'TODOS') return;
        window.applyUnifiedViewMode(window.storesViewMode);
        el('cat-fullscreen-icon').innerText = window.categoryIconsMap[cat] || '🍽️';
        el('cat-fullscreen-title').innerText = cat;
        el('cat-fullscreen-pills').innerHTML = Object.keys(window.categoryIconsMap).map(c =>
            `<button type="button" class="store-cat-pill ${c === cat ? 'active' : ''}" onclick="openCategoryFullScreen('${c}')">${window.categoryIconsMap[c]} ${c}</button>`
        ).join('');

        const activeStores = window.allStores.filter(s => !(s.bloqueada === true || String(s.bloqueada).toLowerCase() === 'true'));
        const activeIds = new Set(activeStores.map(s => s.id));
        const catProds = window.allProducts.filter(p => activeIds.has(p.lojaId) && !(p.ativo === false || String(p.ativo).toLowerCase() === 'false') && window.categoryMatches(p.categoria, cat));
        el('home-category-products-title').innerText = `🍴 Opções em ${cat}`;
        el('home-category-products-count').innerText = `${catProds.length} produto(s)`;
        el('home-category-products-list').innerHTML = catProds.length ? catProds.map(p => window.renderProdCardHtml(p, true)).join('') : `<p style="grid-column:1/-1; text-align:center; padding:20px; color:#71717a; font-weight:700;">Nenhum produto encontrado.</p>`;

        const catStores = activeStores.filter(s => window.allProducts.some(p => p.lojaId === s.id && !(p.ativo === false || String(p.ativo).toLowerCase() === 'false') && window.categoryMatches(p.categoria, cat)));
        el('cat-stores-title').innerText = `🏪 Lojas com ${cat}`;
        el('cat-stores-count-label').innerText = `${catStores.length} loja(s)`;
        el('cat-fullscreen-subtitle').innerText = `${catProds.length} produto(s) • ${catStores.length} loja(s)`;
        el('cat-stores-list').innerHTML = catStores.length ? catStores.map(window.renderStoreCardHtml).join('') : `<p style="grid-column:1/-1; text-align:center; padding:20px; color:#71717a; font-weight:700;">Nenhuma loja encontrada.</p>`;
    };

    window.openStoreMenu = (storeId) => {
        const cur = document.querySelector('.view-section.active');
        if (cur && cur.id !== 'sec-store-menu' && cur.id !== 'sec-product-detail') window.previousSectionBeforeStore = cur.id.replace('sec-', '');
        window.activeStoreId = storeId; window.activeStoreCategory = 'TODOS';
        window.renderStoreMenu(storeId);
        document.querySelectorAll('.view-section').forEach(s => s.classList.remove('active'));
        el('sec-store-menu').classList.add('active');
        window.saveNavigationState({ view: 'store-menu', storeId });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.renderStoreMenu = (storeId) => {
        const loja = window.allStores.find(s => s.id === storeId); if (!loja) return;
        el('menu-store-logo').src = loja.logo_loja || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=150';
        el('menu-store-name').innerText = loja.nome_loja || 'Restaurante';
        const isOpen = window.isStoreOpenBySchedule(loja);
        el('menu-store-status').innerHTML = `<span style="color:${isOpen ? 'var(--success)' : '#dc2626'};">${isOpen ? '🟢 Aberta para pedidos' : '🔴 Fechada no momento'}</span>`;

        const prods = window.allProducts.filter(p => p.lojaId === storeId && !(p.ativo === false || String(p.ativo).toLowerCase() === 'false'));
        const cats = ['TODOS', ...new Set(prods.map(p => (p.categoria || 'Geral').trim()).filter(Boolean))];
        el('menu-categories-bar').innerHTML = cats.map(c =>
            `<button type="button" class="store-cat-pill ${window.activeStoreCategory === c ? 'active' : ''}" onclick="window.activeStoreCategory='${window.escapeHtml(c)}'; window.renderStoreMenu('${storeId}')">${c === 'TODOS' ? '🍽️ Todos' : window.escapeHtml(c)}</button>`
        ).join('');

        const filtered = prods.filter(p => window.activeStoreCategory === 'TODOS' || window.categoryMatches(p.categoria, window.activeStoreCategory));
        el('menu-products-list').innerHTML = filtered.length ? filtered.map(p => window.renderProdCardHtml(p, false)).join('') : `<p style="text-align:center; padding:30px; color:#71717a; font-weight:700;">Nenhum produto nesta categoria.</p>`;
    };

    window.goBackFromStoreMenu = () => {
        if (window.previousSectionBeforeStore === 'category-view' && window.selectedCategory !== 'TODOS') window.openCategoryFullScreen(window.selectedCategory);
        else window.switchTab('home');
    };

    window.openProductDetailModal = (prodId) => {
        const p = window.allProducts.find(x => x.id === prodId); if (!p) return;
        window.detailProduct = p; window.detailQty = 1; window.detailAddonSelections = {};
        const cur = document.querySelector('.view-section.active');
        if (cur && cur.id !== 'sec-product-detail') window.previousSectionBeforeProduct = cur.id.replace('sec-', '');

        const loja = window.allStores.find(s => s.id === p.lojaId);
        el('detail-store-name').innerText = loja ? loja.nome_loja : 'Restaurante';
        el('detail-prod-img').src = p.imagem || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=150';

        const precoAtual = parseFloat(p.preco || 0), precoAntigo = parseFloat(p.precoAntigo || 0);
        const temDesconto = precoAntigo > precoAtual;
        const badge = el('detail-prod-discount-badge');
        if (temDesconto) { badge.innerText = `🔥 -${Math.round(((precoAntigo - precoAtual) / precoAntigo) * 100)}% OFF`; badge.style.display = 'block'; }
        else badge.style.display = 'none';

        el('detail-prod-cat-badge').innerText = p.categoria || 'Geral';
        el('detail-prod-name').innerText = p.nome;
        el('detail-prod-desc').innerText = p.descricao || '';
        el('detail-prod-price').innerText = `R$ ${precoAtual.toFixed(2).replace('.', ',')}`;
        const oldPriceEl = el('detail-prod-old-price');
        if (temDesconto) { oldPriceEl.innerText = `R$ ${precoAntigo.toFixed(2).replace('.', ',')}`; oldPriceEl.style.display = 'inline'; }
        else oldPriceEl.style.display = 'none';

        el('detail-prod-qty').innerText = '1';
        el('detail-prod-obs').value = '';
        window.renderDetailAddons(); window.updateDetailTotalPrice(); window.renderProductSuggestions(p);

        document.querySelectorAll('.view-section').forEach(s => s.classList.remove('active'));
        el('sec-product-detail').classList.add('active');
        window.saveNavigationState({ view: 'product-detail', prodId, storeId: p.lojaId });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.goBackFromProductDetail = () => {
        const prev = window.previousSectionBeforeProduct || 'home';
        if (prev === 'store-menu' && window.activeStoreId) window.openStoreMenu(window.activeStoreId);
        else if (prev === 'category-view' && window.selectedCategory !== 'TODOS') window.openCategoryFullScreen(window.selectedCategory);
        else window.switchTab('home');
    };
    window.openStoreFromProductDetail = () => { if (window.detailProduct?.lojaId) window.openStoreMenu(window.detailProduct.lojaId); };

    window.renderDetailAddons = () => {
        const box = el('detail-addons-container'); if (!box || !window.detailProduct) return;
        let groups = [];
        try { groups = JSON.parse(window.detailProduct.adicionais || "[]"); if (!Array.isArray(groups)) groups = []; } catch (e) { groups = []; }
        if (!groups.length) { box.innerHTML = ''; return; }
        box.innerHTML = groups.map((g, gIdx) => {
            const min = parseInt(g.min) || 0, max = Math.max(1, parseInt(g.max) || 1);
            const selectedArr = window.detailAddonSelections[gIdx] || [];
            const reqBadge = min > 0
                ? `<span style="background:#fee2e2; color:#dc2626; padding:2px 8px; border-radius:6px; font-size:0.68rem; font-weight:900;">Obrigatório (${min} a ${max})</span>`
                : `<span style="background:#f4f4f5; color:#71717a; padding:2px 8px; border-radius:6px; font-size:0.68rem; font-weight:800;">Opcional (até ${max})</span>`;
            const itemsHtml = (g.items || []).map((it, iIdx) => {
                const isSelected = selectedArr.includes(iIdx), priceNum = parseFloat(it.price) || 0;
                return `<div class="addon-option-row" onclick="toggleDetailAddon(${gIdx}, ${iIdx})">
                    <div style="display:flex; align-items:center; gap:8px;">
                        <input type="checkbox" ${isSelected ? 'checked' : ''} style="width:18px; height:18px; accent-color:var(--primary); pointer-events:none;">
                        <span style="font-weight:700; font-size:0.86rem; color:#18181b;">${window.escapeHtml(it.name)}</span>
                    </div>
                    <span style="font-weight:800; font-size:0.82rem; color:${priceNum > 0 ? 'var(--success)' : '#71717a'};">${priceNum > 0 ? `+ R$ ${priceNum.toFixed(2).replace('.', ',')}` : 'Grátis'}</span>
                </div>`;
            }).join('');
            return `<div class="addon-group-box"><div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;"><span style="font-weight:900; font-size:0.88rem;">${window.escapeHtml(g.name || 'Opções')}</span>${reqBadge}</div>${itemsHtml}</div>`;
        }).join('');
    };

    window.toggleDetailAddon = (gIdx, iIdx) => {
        if (!window.detailProduct) return;
        let groups = []; try { groups = JSON.parse(window.detailProduct.adicionais || "[]"); } catch (e) {}
        const grp = groups[gIdx]; if (!grp) return;
        const max = Math.max(1, parseInt(grp.max) || 1);
        if (!Array.isArray(window.detailAddonSelections[gIdx])) window.detailAddonSelections[gIdx] = [];
        const cur = window.detailAddonSelections[gIdx], pos = cur.indexOf(iIdx);
        if (pos > -1) cur.splice(pos, 1);
        else if (max === 1) window.detailAddonSelections[gIdx] = [iIdx];
        else if (cur.length < max) cur.push(iIdx);
        else { window.showToast(`⚠️ Máximo de ${max} opção(ões).`); return; }
        window.renderDetailAddons(); window.updateDetailTotalPrice();
    };

    window.changeDetailQty = (delta) => {
        window.detailQty = Math.max(1, (window.detailQty || 1) + delta);
        el('detail-prod-qty').innerText = String(window.detailQty);
        window.updateDetailTotalPrice();
    };

    window.calculateUnitWithAddons = () => {
        const p = window.detailProduct; if (!p) return { unitPrice: 0, addonsNames: [] };
        let base = parseFloat(p.preco || 0), addonsTotal = 0; const addonsNames = [];
        let groups = []; try { groups = JSON.parse(p.adicionais || "[]"); } catch (e) {}
        groups.forEach((g, gIdx) => {
            const sel = window.detailAddonSelections[gIdx] || []; if (!sel.length) return;
            const prices = [];
            sel.forEach(iIdx => { const it = (g.items || [])[iIdx]; if (it) { addonsNames.push(it.name); prices.push(parseFloat(it.price) || 0); } });
            addonsTotal += (g.chargeType === 'max' && prices.length) ? Math.max(...prices) : prices.reduce((a, b) => a + b, 0);
        });
        return { unitPrice: base + addonsTotal, addonsNames };
    };

    window.updateDetailTotalPrice = () => {
        const { unitPrice } = window.calculateUnitWithAddons();
        if (el('detail-total-btn-price')) el('detail-total-btn-price').innerText = `R$ ${(unitPrice * (window.detailQty || 1)).toFixed(2).replace('.', ',')}`;
    };

    window.renderProductSuggestions = (currentProd) => {
        const box = el('detail-suggestions-list'); if (!box || !currentProd) return;
        const activeIds = new Set(window.allStores.filter(s => !(s.bloqueada === true || String(s.bloqueada).toLowerCase() === 'true')).map(s => s.id));
        const suggestions = window.allProducts.filter(p => p.id !== currentProd.id && activeIds.has(p.lojaId) && !(p.ativo === false || String(p.ativo).toLowerCase() === 'false') && window.categoryMatches(p.categoria, currentProd.categoria)).slice(0, 8);
        box.innerHTML = suggestions.length ? suggestions.map(p => window.renderProdCardHtml(p, true)).join('') : `<p style="grid-column:1/-1; text-align:center; padding:18px; color:#71717a; font-weight:700;">Nenhuma outra sugestão no momento.</p>`;
    };

    window.confirmAddToCart = () => {
        const p = window.detailProduct; if (!p) return;
        const loja = window.allStores.find(s => s.id === p.lojaId);
        if (loja && !window.isStoreOpenBySchedule(loja)) { window.showToast("🔴 Esta loja está fechada no momento."); return; }

        let groups = []; try { groups = JSON.parse(p.adicionais || "[]"); } catch (e) {}
        for (let gIdx = 0; gIdx < groups.length; gIdx++) {
            const min = parseInt(groups[gIdx].min) || 0, sel = window.detailAddonSelections[gIdx] || [];
            if (sel.length < min) { window.showToast(`⚠️ Escolha pelo menos ${min} opção(ões) em "${groups[gIdx].name}".`); return; }
        }
        if (window.cart.length > 0 && window.cart[0].lojaId !== p.lojaId) {
            window.cart = []; window.appliedCoupon = null;
        }
        const { unitPrice, addonsNames } = window.calculateUnitWithAddons();
        const obs = el('detail-prod-obs').value.trim(), addonsKey = addonsNames.slice().sort().join('|');
        const existingIdx = window.cart.findIndex(item => item.prodId === p.id && item.addonsKey === addonsKey && item.obs.toLowerCase() === obs.toLowerCase());
        if (existingIdx > -1) window.cart[existingIdx].qty += window.detailQty;
        else window.cart.push({ prodId: p.id, lojaId: p.lojaId, nome: p.nome, unitPrice, qty: window.detailQty, addonsNames, addonsKey, obs });

        window.updateCartFloatingBar();
        window.showToast("🛍️ Produto adicionado à sacola!");
        window.goBackFromProductDetail();
    };

    window.updateCartFloatingBar = () => {
        try { localStorage.setItem('juaba_saved_cart', JSON.stringify(window.cart || [])); } catch (e) {}
        const totalItems = window.cart.reduce((acc, i) => acc + i.qty, 0);
        const labelTxt = totalItems === 1 ? '1 item' : `${totalItems} itens`;
        [['mobile-header-cart-btn', 'mobile-header-cart-count'], ['desktop-cart-btn', 'desktop-cart-count']].forEach(([bId, cId]) => {
            const btn = el(bId), cnt = el(cId);
            if (!btn || !cnt) return;
            if (totalItems > 0) { cnt.innerText = labelTxt; btn.classList.add('has-items', 'bump'); setTimeout(() => btn.classList.remove('bump'), 380); }
            else { cnt.innerText = ''; btn.classList.remove('has-items'); }
        });
    };

    window.openCartModal = () => {
        if (!window.cart.length) { window.showToast("Sua sacola está vazia!"); return; }
        window.renderCartModal(); el('modal-cart').style.display = 'flex';
    };
    window.closeCartModal = () => { el('modal-cart').style.display = 'none'; };

    window.removeCartItem = (idx) => {
        if (!window.cart[idx]) return;
        window.cart.splice(idx, 1); window.updateCartFloatingBar();
        if (!window.cart.length) window.closeCartModal(); else window.renderCartModal();
    };
    window.changeCartItemQty = (idx, delta) => {
        if (!window.cart[idx]) return;
        window.cart[idx].qty += delta;
        if (window.cart[idx].qty <= 0) window.cart.splice(idx, 1);
        window.updateCartFloatingBar();
        if (!window.cart.length) window.closeCartModal(); else window.renderCartModal();
    };

    window.renderCartModal = () => {
        el('cart-items-list').innerHTML = window.cart.map((item, idx) => `
            <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 0; border-bottom:1px solid #f1f5f9; gap:10px;">
                <div style="flex:1; min-width:0;">
                    <div style="font-weight:900; font-size:0.95rem;">${window.escapeHtml(item.nome)}</div>
                    ${item.addonsNames?.length ? `<div style="font-size:0.75rem; color:#71717a; font-weight:600;">+ ${window.escapeHtml(item.addonsNames.join(', '))}</div>` : ''}
                    ${item.obs ? `<div style="font-size:0.74rem; color:#d97706; font-weight:700;">Obs: ${window.escapeHtml(item.obs)}</div>` : ''}
                    <div style="font-weight:900; color:var(--success); font-size:0.9rem; margin-top:2px;">R$ ${(item.unitPrice * item.qty).toFixed(2).replace('.', ',')}</div>
                </div>
                <div style="display:flex; align-items:center; gap:6px;">
                    <div style="display:flex; align-items:center; gap:8px; background:#f4f4f5; padding:6px 10px; border-radius:12px; font-weight:900;">
                        <button type="button" onclick="changeCartItemQty(${idx}, -1)" style="border:none; background:none; font-size:1.1rem; font-weight:900; color:var(--primary); cursor:pointer;">−</button>
                        <span>${item.qty}</span>
                        <button type="button" onclick="changeCartItemQty(${idx}, 1)" style="border:none; background:none; font-size:1.1rem; font-weight:900; color:var(--success); cursor:pointer;">+</button>
                    </div>
                    <button type="button" onclick="removeCartItem(${idx})" style="width:34px; height:34px; border-radius:10px; border:1px solid #fecaca; background:#fee2e2; color:#dc2626; cursor:pointer;">🗑️</button>
                </div>
            </div>`).join('');
        window.syncCartDeliveryDisplay(); window.updateCartTotals();
    };

    window.syncCartDeliveryDisplay = () => {
        const addrs = window.clientProfileData?.enderecos || [];
        const hiddenInput = el('cart-delivery-select'), titleEl = el('cart-delivery-title'), subEl = el('cart-delivery-sub');
        if (!hiddenInput || !titleEl || !subEl) return;
        if (window.selectedDeliveryIdx === -1) {
            hiddenInput.value = 'Retirar na Loja'; titleEl.innerText = '🏪 Vou Retirar na Loja'; subEl.innerText = 'Você busca o pedido no balcão do restaurante';
            return;
        }
        if (!addrs.length) {
            hiddenInput.value = 'Entregar em: '; titleEl.innerText = '📍 Nenhum endereço cadastrado'; subEl.innerText = 'Toque para cadastrar seu endereço ou escolher retirada';
            return;
        }
        if (window.selectedDeliveryIdx >= addrs.length) window.selectedDeliveryIdx = 0;
        const a = addrs[window.selectedDeliveryIdx] || addrs[0];
        const fullStr = a.rua || window.formatAddressDisplay(a);
        hiddenInput.value = `Entregar em: ${fullStr}`;
        titleEl.innerText = a.logradouro ? `🛵 ${a.logradouro}, Nº ${a.numero || 'S/N'}` : `🛵 ${fullStr}`;
        subEl.innerText = a.bairro ? `Bairro ${a.bairro}${a.complemento ? ' • ' + a.complemento : ''}` : 'Endereço selecionado para entrega';
    };

    window.openCartDeliveryModal = () => {
        const addrs = window.clientProfileData?.enderecos || [];
        const box = el('cart-delivery-options-list'); if (!box) return;
        let html = addrs.length ? addrs.map((a, idx) => {
            const isSel = window.selectedDeliveryIdx === idx;
            const mainLine = a.logradouro ? `${a.logradouro}, Nº ${a.numero || 'S/N'} — ${a.bairro || ''}` : (a.rua || '');
            return `<div style="border:1px solid ${isSel ? 'var(--primary)' : 'var(--border)'}; background:${isSel ? 'var(--primary-light)' : '#fff'}; border-radius:14px; padding:14px; margin-bottom:8px; display:flex; justify-content:space-between; align-items:center; cursor:pointer;" onclick="selectCartDeliveryOption(${idx})"><div style="font-weight:900; font-size:0.88rem;">🛵 ${window.escapeHtml(mainLine)}</div><span>${isSel ? '🔘' : '⚪'}</span></div>`;
        }).join('') : `<div style="padding:14px; text-align:center; color:#71717a; font-weight:700; font-size:0.82rem; background:#f8fafc; border-radius:12px; margin-bottom:10px;">Nenhum endereço salvo. Cadastre abaixo ou escolha retirada:</div>`;

        const isPickup = window.selectedDeliveryIdx === -1;
        html += `<div style="border:1px solid ${isPickup ? 'var(--primary)' : 'var(--border)'}; background:${isPickup ? 'var(--primary-light)' : '#fff'}; border-radius:14px; padding:14px; display:flex; justify-content:space-between; align-items:center; cursor:pointer;" onclick="selectCartDeliveryOption(-1)"><div><div style="font-weight:900; font-size:0.88rem;">🏪 Vou Retirar na Loja</div><div style="font-size:0.74rem; color:#52525b; font-weight:600;">Sem taxa de entrega</div></div><span>${isPickup ? '🔘' : '⚪'}</span></div>`;
        box.innerHTML = html; el('modal-select-delivery-address').style.display = 'flex';
    };
    window.closeCartDeliveryModal = () => { el('modal-select-delivery-address').style.display = 'none'; };
    window.selectCartDeliveryOption = (idx) => { window.selectedDeliveryIdx = idx; window.syncCartDeliveryDisplay(); window.updateCartTotals(); window.closeCartDeliveryModal(); };

    window.applyCoupon = () => {
        const code = el('cart-coupon-input').value.trim().toUpperCase();
        if (!code || !window.cart.length) return;
        const found = _internalCoupons.find(c => c.lojaId === window.cart[0].lojaId && String(c.codigo || '').toUpperCase() === code);
        if (!found) { window.appliedCoupon = null; window.showToast("❌ Cupom inválido para esta loja."); }
        else { window.appliedCoupon = { codigo: found.codigo, porcentagem: found.porcentagem, lojaId: found.lojaId }; window.showToast(`🎟️ Cupom ${found.codigo} aplicado!`); }
        window.updateCartTotals();
    };

    window.updateCartTotals = () => {
        const subtotal = window.cart.reduce((acc, i) => acc + (i.unitPrice * i.qty), 0);
        const discount = window.appliedCoupon ? subtotal * ((parseFloat(window.appliedCoupon.porcentagem) || 0) / 100) : 0;
        let deliveryFee = 0;
        const feeRow = el('cart-delivery-fee-row'), feeValEl = el('cart-delivery-fee-val');
        if (window.cart.length > 0 && window.selectedDeliveryIdx !== -1) {
            const loja = window.allStores.find(s => s.id === window.cart[0].lojaId);
            deliveryFee = window.getStoreDeliveryFee(loja);
            if (feeRow && feeValEl) { feeRow.style.display = 'flex'; feeValEl.innerText = deliveryFee > 0 ? `R$ ${deliveryFee.toFixed(2).replace('.', ',')}` : 'Grátis'; }
        } else if (feeRow) feeRow.style.display = 'none';

        const finalVal = Math.max(0, subtotal - discount + deliveryFee);
        el('cart-subtotal-val').innerText = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
        if (el('cart-discount-row')) {
            el('cart-discount-row').style.display = discount > 0 ? 'flex' : 'none';
            el('cart-discount-val').innerText = `- R$ ${discount.toFixed(2).replace('.', ',')}`;
        }
        el('cart-final-val').innerText = `R$ ${finalVal.toFixed(2).replace('.', ',')}`;
    };

    window.toggleChangeField = () => { el('cart-change-box').style.display = el('cart-payment-select').value === 'Dinheiro' ? 'block' : 'none'; };

    window.checkoutOrder = async () => {
        if (!window.currentClient) { window.closeCartModal(); window.switchTab('perfil'); window.showToast("👤 Entre na sua conta para finalizar o pedido!"); return; }
        if (!window.cart.length) return;
        const lojaId = window.cart[0].lojaId, loja = window.allStores.find(s => s.id === lojaId);
        if (loja && !window.isStoreOpenBySchedule(loja)) { window.showToast("🔴 Esta loja acabou de fechar."); return; }

        if (!window.clientProfileData?.telefone || String(window.clientProfileData.telefone).replace(/\D/g, '').length < 8) {
            window.closeCartModal(); window.openProfileSubView('conta'); window.showToast("📱 Informe seu WhatsApp nos dados da conta!"); return;
        }
        const deliveryChoice = el('cart-delivery-select').value;
        if (deliveryChoice.startsWith('Entregar em:') && (!window.clientProfileData?.enderecos || !window.clientProfileData.enderecos.length)) {
            window.closeCartModal(); window.openProfileSubView('enderecos'); window.showToast("📍 Cadastre seu endereço para entrega!"); return;
        }

        const payMethod = el('cart-payment-select').value, changeVal = el('cart-change-input').value.trim();
        const payStr = (payMethod === 'Dinheiro' && changeVal) ? `Dinheiro (Troco p/ ${changeVal})` : payMethod;
        const itensStr = window.cart.map(i => `${i.qty}x ${i.nome}${i.addonsNames?.length ? ` [${i.addonsNames.join(', ')}]` : ''}${i.obs ? ` (Obs: ${i.obs})` : ''}`).join(', ');
        const finalTotalTxt = el('cart-final-val').innerText, finalValNum = window.parseCurrencyToNumber(finalTotalTxt);
        const storePixKey = window.getStorePixKey(loja);
        const isPix = payStr.toUpperCase().includes('PIX');
        const generatedPixPayload = isPix ? window.generatePixCopiaECola(storePixKey || '00000000000', loja ? loja.nome_loja : 'Restaurante', finalValNum, 'PED' + String(Date.now()).slice(-6)) : '';

        const newOrder = {
            lojaId, nomeLoja: loja ? loja.nome_loja : 'Restaurante', chavePixLoja: storePixKey, pixCopiaECola: generatedPixPayload,
            cliente: window.clientProfileData.nome || window.currentClient.email.split('@')[0],
            emailCliente: window.currentClient.email.toLowerCase(),
            fcmTokenCliente: window.clientFcmToken || localStorage.getItem('juaba_fcm_token') || '',
            telefone: window.clientProfileData.telefone || '',
            endereco: deliveryChoice.replace('Entregar em: ', ''),
            itens: itensStr,
            itensCart: window.cart.map(i => ({ prodId: i.prodId, lojaId: i.lojaId, nome: i.nome, unitPrice: i.unitPrice, qty: i.qty, addonsNames: i.addonsNames || [], addonsKey: i.addonsKey || '', obs: i.obs || '' })),
            pagamento: payStr, total: finalTotalTxt, status: 'Novo', data: new Date().toLocaleString('pt-BR'), chat: []
        };

        try {
            if ('Notification' in window && Notification.permission === 'default') {
                Notification.requestPermission().then(() => window.checkNotificationButtonUI()).catch(() => {});
            }
            window.initPushNotificationsEngine();
            const docRef = await addDoc(collection(db, "pedidos"), newOrder);
            const createdOrder = { id: docRef.id, ...newOrder };

            window.prevOrderStatusMap[docRef.id] = 'Novo';
            window.prevStoreChatCounts[docRef.id] = 0;
            try {
                localStorage.setItem('juaba_last_status_' + docRef.id, 'Novo');
                localStorage.setItem('juaba_seen_chat_' + docRef.id, '0');
            } catch (e) {}

            window.cart = []; window.appliedCoupon = null; window.updateCartFloatingBar(); window.closeCartModal();
            window.showToast("🎉 Pedido enviado com sucesso!");

            if (isPix) {
                window.openPixCheckoutModal(docRef.id, createdOrder);
            } else {
                window.openTrackModal(docRef.id, createdOrder);
            }
        } catch (e) { window.showToast("⚠️ Erro ao enviar pedido."); }
    };

    window.searchTimeout = null;
    window.debouncedSearch = (val, isDesk = false) => {
        clearTimeout(window.searchTimeout);
        window.searchTimeout = setTimeout(() => {
            if (isDesk && val.trim()) { window.switchTab('busca'); el('mobile-search-input').value = val; }
            window.handleSearch(val);
        }, 250);
    };

    window.handleSearch = (qRaw) => {
        const q = String(qRaw || '').toLowerCase().trim(), box = el('search-results-box');
        if (!q) { box.innerHTML = `<p style="text-align:center; padding:30px; color:#71717a; font-weight:700;">Digite acima para buscar lojas ou produtos.</p>`; return; }
        const activeStores = window.allStores.filter(s => !(s.bloqueada === true || String(s.bloqueada).toLowerCase() === 'true'));
        const activeIds = new Set(activeStores.map(s => s.id));
        const mStores = activeStores.filter(s => (s.nome_loja || '').toLowerCase().includes(q));
        const mProds = window.allProducts.filter(p => activeIds.has(p.lojaId) && !(p.ativo === false || String(p.ativo).toLowerCase() === 'false') && ((p.nome || '').toLowerCase().includes(q) || (p.categoria || '').toLowerCase().includes(q) || (p.descricao || '').toLowerCase().includes(q)));

        let html = '';
        if (mStores.length) html += `<h3 style="font-weight:900; margin:10px 0;">🏪 Lojas (${mStores.length})</h3><div class="stores-container list-mode" style="margin-bottom:20px;">${mStores.map(renderStoreCardHtml).join('')}</div>`;
        if (mProds.length) html += `<h3 style="font-weight:900; margin:10px 0;">🍔 Produtos (${mProds.length})</h3><div class="products-container list-mode">${mProds.map(p => renderProdCardHtml(p, true)).join('')}</div>`;
        box.innerHTML = html || `<p style="text-align:center; padding:30px; color:#71717a; font-weight:700;">Nenhum resultado para "${window.escapeHtml(qRaw)}".</p>`;
    };

    window.isOrderDone = (st) => ['concluido', 'entregue'].includes(String(st || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));

    window.openTrackModal = (orderId, fallback = null) => {
        window.activeTrackOrderId = orderId;
        const o = window.myOrders.find(x => x.id === orderId) || fallback; if (!o) return;
        const loja = window.allStores.find(s => s.id === o.lojaId), st = o.status || 'Novo', isCanc = st === 'Cancelado';
        const s2 = !isCanc && (['Preparando', 'Entrega', 'Concluido'].includes(st) || window.isOrderDone(st));
        const s3 = !isCanc && (['Entrega', 'Concluido'].includes(st) || window.isOrderDone(st));
        const s4 = !isCanc && window.isOrderDone(st);

        let pixHtml = '';
        if (!isCanc && st === 'Novo' && String(o.pagamento || '').toUpperCase().includes('PIX')) {
            const pixCode = o.pixCopiaECola || window.generatePixCopiaECola(window.getStorePixKey(loja, o) || '00000000000', o.nomeLoja || 'Restaurante', window.parseCurrencyToNumber(o.total), o.id.substring(0, 8));
            pixHtml = `<div style="background:#f0fdf4; border:2px dashed #22c55e; border-radius:16px; padding:14px; margin:12px 0;">
                <div style="display:flex; justify-content:space-between; margin-bottom:8px;"><span style="font-weight:900; color:#15803d; font-size:0.84rem;">💠 PIX Copia e Cola</span><span style="font-weight:900; color:#166534;">${window.escapeHtml(o.total)}</span></div>
                <input type="text" readonly value="${window.escapeHtml(pixCode)}" style="width:100%; padding:8px; border:1px solid #86efac; border-radius:8px; background:#fff; font-family:monospace; font-size:0.72rem; margin-bottom:8px;">
                <button type="button" onclick="copyTextToClipboard('${window.escapeHtml(pixCode)}', '✅ Código PIX copiado!')" style="width:100%; background:#16a34a; color:#fff; border:none; padding:12px; border-radius:12px; font-weight:900; cursor:pointer;">📋 Copiar Código PIX</button>
            </div>`;
        }

        el('track-order-body').innerHTML = `
            <div style="font-weight:900; font-size:1rem; margin-bottom:4px;">${window.escapeHtml(o.nomeLoja || 'Loja')} • #${o.id.substring(0,6).toUpperCase()}</div>
            <div style="font-size:0.82rem; color:#71717a; margin-bottom:12px;">${window.escapeHtml(o.itens || '')}</div>
            ${isCanc ? `<div style="background:#fef2f2; border:1px solid #fecaca; border-radius:14px; padding:14px; margin:12px 0; color:#991b1b;"><b>❌ Pedido Cancelado:</b> ${window.escapeHtml(o.motivoCancelamento || 'Não informado')}</div>` : `
            <div style="margin:14px 0;">
                <div class="step-row done"><div class="step-dot">1</div><span>Pedido enviado à loja</span></div>
                <div class="step-row ${s2 ? 'done' : ''}"><div class="step-dot">2</div><span>Loja preparando seu pedido</span></div>
                <div class="step-row ${s3 ? 'done' : ''}"><div class="step-dot">3</div><span>Saiu para entrega</span></div>
                <div class="step-row ${s4 ? 'done' : ''}"><div class="step-dot">4</div><span>Pedido concluído</span></div>
            </div>`}
            ${pixHtml}
            ${(!isCanc && st === 'Novo') ? `<button class="btn-primary" style="margin-bottom:8px; padding:11px;" onclick="document.getElementById('modal-track-order').style.display='none'; openClientChat('${o.id}')">💬 Conversar / Enviar Comprovante</button><button type="button" onclick="openClientCancelModal('${o.id}')" style="width:100%; background:#fff1f2; color:#e11d48; border:1px solid #fecdd3; padding:10px; border-radius:12px; font-weight:800; cursor:pointer;">✕ Cancelar Pedido</button>` : ''}
        `;
        el('modal-track-order').style.display = 'flex';
    };

    window.clientCancelTargetOrderId = null;
    window.openClientCancelModal = (id) => { window.clientCancelTargetOrderId = id; el('modal-client-cancel-order').style.display = 'flex'; };
    window.closeClientCancelModal = () => { window.clientCancelTargetOrderId = null; el('modal-client-cancel-order').style.display = 'none'; };
    window.confirmClientCancelOrder = async () => {
        const id = window.clientCancelTargetOrderId, o = window.myOrders.find(x => x.id === id); if (!o) return;
        if (o.status && o.status !== 'Novo') { window.showToast("⚠️ Pedido já em preparo. Fale no chat!"); window.closeClientCancelModal(); return; }
        const sel = el('client-cancel-reason-select').value, cust = el('client-cancel-custom-input').value.trim();
        const motivo = sel === 'OUTRO' ? (cust || 'Solicitado pelo cliente') : sel;
        const chatArr = Array.isArray(o.chat) ? [...o.chat] : [];
        chatArr.push({ sender: 'cliente', senderName: window.clientProfileData?.nome || 'Cliente', text: `❌ Cancelado pelo cliente: ${motivo}`, time: new Date().toTimeString().slice(0,5) });
        try {
            await setDoc(doc(db, "pedidos", id), { status: 'Cancelado', motivoCancelamento: motivo, canceladoPor: 'Cliente', chat: chatArr }, { merge: true });
            window.closeClientCancelModal(); el('modal-track-order').style.display = 'none'; window.showToast("❌ Pedido cancelado.");
        } catch (e) { window.showToast("⚠️ Erro ao cancelar."); }
    };

    window.openClientChat = (orderId) => {
        const o = window.myOrders.find(x => x.id === orderId);
        if (!o || window.isOrderDone(o.status) || o.status === 'Cancelado') {
            window.showToast("ℹ️ O chat fica disponível apenas enquanto o pedido está em andamento.");
            return;
        }
        window.activeChatOrderId = orderId;
        el('chat-modal-title').innerText = `💬 Chat — ${o?.nomeLoja || 'Loja'}`;
        el('modal-chat').style.display = 'flex';
        window.markOrderChatAsRead(orderId); window.renderClientChatMessages();
    };
    window.closeClientChat = () => { window.activeChatOrderId = null; el('modal-chat').style.display = 'none'; };

    window.openAttachmentViewer = (dataUrl, isPdf = false) => {
        const body = el('attachment-viewer-body'); if (!body) return;
        body.innerHTML = (isPdf || String(dataUrl).startsWith('data:application/pdf'))
            ? `<iframe src="${window.escapeHtml(dataUrl)}" style="width:100%; height:70vh; border:none; border-radius:10px;"></iframe>`
            : `<img src="${window.escapeHtml(dataUrl)}" style="max-width:100%; max-height:72vh; border-radius:12px; object-fit:contain;">`;
        el('modal-attachment-viewer').style.display = 'flex';
    };
    window.closeAttachmentViewer = () => { el('modal-attachment-viewer').style.display = 'none'; el('attachment-viewer-body').innerHTML = ''; };
    window.openChatMediaByIndex = (idx) => {
        const o = window.myOrders.find(x => x.id === window.activeChatOrderId);
        const m = o?.chat?.[idx]; if (!m) return;
        const src = m.fileData || m.img; if (src) window.openAttachmentViewer(src, m.fileType === 'pdf');
    };

    window.renderClientChatMessages = () => {
        const box = el('client-chat-msgs'), o = window.myOrders.find(x => x.id === window.activeChatOrderId);
        if (!box || !o) return;
        const msgs = Array.isArray(o.chat) ? o.chat : [];
        if (!msgs.length) { box.innerHTML = `<p style="text-align:center; color:#71717a; margin:auto; font-weight:700;">Envie uma mensagem ou anexe o comprovante PIX.</p>`; return; }
        box.innerHTML = msgs.map((m, idx) => {
            const isMe = m.sender === 'cliente';
            const lbl = isMe ? `👤 ${window.escapeHtml(m.senderName || 'Você')}` : `🏪 ${window.escapeHtml(m.senderName || o.nomeLoja || 'Loja')}`;
            let media = '';
            if (m.fileType === 'pdf' && m.fileData) media = `<div onclick="openChatMediaByIndex(${idx})" style="background:rgba(0,0,0,0.12); padding:10px; border-radius:10px; margin-top:6px; cursor:pointer; font-weight:900;">📄 ${window.escapeHtml(m.fileName || 'Comprovante.pdf')}</div>`;
            else if (m.img || m.fileData) media = `<img src="${window.escapeHtml(m.img || m.fileData)}" onclick="openChatMediaByIndex(${idx})" style="max-width:100%; max-height:190px; border-radius:10px; margin-top:6px; cursor:pointer; display:block;">`;
            return `<div class="chat-bubble ${isMe ? 'me' : 'them'}"><div style="font-size:0.68rem; font-weight:900; opacity:0.85; margin-bottom:3px;">${lbl}</div><div>${window.escapeHtml(m.text || '')}</div>${media}<div style="font-size:0.65rem; opacity:0.75; text-align:right; margin-top:3px;">${window.escapeHtml(m.time || '')}</div></div>`;
        }).join('');
        box.scrollTop = box.scrollHeight;
    };

    window.sendClientChatMsg = async () => {
        if (!window.activeChatOrderId) return;
        const inp = el('client-chat-input'), txt = inp.value.trim(); if (!txt) return;
        inp.value = '';
        const o = window.myOrders.find(x => x.id === window.activeChatOrderId);
        const chatArr = Array.isArray(o?.chat) ? [...o.chat] : [];
        chatArr.push({ sender: 'cliente', senderName: window.clientProfileData?.nome || 'Cliente', text: txt, time: new Date().toTimeString().slice(0,5) });
        await setDoc(doc(db, "pedidos", window.activeChatOrderId), { chat: chatArr }, { merge: true });
    };

    window.handleClientReceiptUpload = (fileInput) => {
        const file = fileInput.files?.[0]; if (!file || !window.activeChatOrderId) return;
        const isPdf = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
        const senderName = window.clientProfileData?.nome || 'Cliente';

        if (isPdf) {
            if (file.size > 450 * 1024) { window.showToast("⚠️ O PDF deve ter no máximo 450 KB."); fileInput.value = ''; return; }
            const r = new FileReader();
            r.onload = async (e) => {
                const o = window.myOrders.find(x => x.id === window.activeChatOrderId);
                const chatArr = Array.isArray(o?.chat) ? [...o.chat] : [];
                chatArr.push({ sender: 'cliente', senderName, text: '🧾 Comprovante PDF enviado', fileType: 'pdf', fileName: file.name, fileData: e.target.result, time: new Date().toTimeString().slice(0,5) });
                await setDoc(doc(db, "pedidos", window.activeChatOrderId), { chat: chatArr, temComprovante: true }, { merge: true }).catch(() => window.showToast("⚠️ Arquivo muito grande."));
                window.showToast("✅ Comprovante enviado!"); fileInput.value = '';
            };
            r.readAsDataURL(file);
        } else {
            const r = new FileReader();
            r.onload = (e) => {
                const img = new Image();
                img.onload = async () => {
                    const c = document.createElement('canvas'); const max = 700;
                    let w = img.width, h = img.height;
                    if (w > h && w > max) { h = Math.round((h * max) / w); w = max; } else if (h >= w && h > max) { w = Math.round((w * max) / h); h = max; }
                    c.width = w; c.height = h; c.getContext('2d').drawImage(img, 0, 0, w, h);
                    const o = window.myOrders.find(x => x.id === window.activeChatOrderId);
                    const chatArr = Array.isArray(o?.chat) ? [...o.chat] : [];
                    chatArr.push({ sender: 'cliente', senderName, text: '🧾 Comprovante enviado', fileType: 'image', img: c.toDataURL('image/jpeg', 0.68), time: new Date().toTimeString().slice(0,5) });
                    await setDoc(doc(db, "pedidos", window.activeChatOrderId), { chat: chatArr, temComprovante: true }, { merge: true });
                    window.showToast("✅ Foto do comprovante enviada!"); fileInput.value = '';
                };
                img.src = e.target.result;
            };
            r.readAsDataURL(file);
        }
    };

    window.openRateOrderModal = (id) => { window.ratingTargetOrderId = id; window.setRatingStars(5); el('rate-comment').value = ''; el('modal-rate-order').style.display = 'flex'; };
    window.closeRateModal = () => { el('modal-rate-order').style.display = 'none'; window.ratingTargetOrderId = null; };
    window.setRatingStars = (n) => { window.selectedStarsCount = n; for (let i = 1; i <= 5; i++) if (el(`star-btn-${i}`)) el(`star-btn-${i}`).style.opacity = i <= n ? '1' : '0.35'; };
    window.submitOrderRating = async () => {
        const id = window.ratingTargetOrderId, o = window.myOrders.find(x => x.id === id); if (!o) return;
        const stars = window.selectedStarsCount || 5, comment = el('rate-comment').value.trim();
        try {
            await setDoc(doc(db, "pedidos", id), { avaliacao: { stars, comment, data: new Date().toLocaleDateString('pt-BR') } }, { merge: true });
            const lRef = doc(db, "lojas", o.lojaId), lSnap = await getDoc(lRef);
            if (lSnap.exists()) {
                const d = lSnap.data(), cur = parseFloat(d.nota || '5.0'), cnt = parseInt(d.ratingCount || '10') + 1;
                await setDoc(lRef, { nota: Math.min(5, Math.max(1, ((cur * (cnt - 1)) + stars) / cnt)).toFixed(1), ratingCount: cnt }, { merge: true });
            }
            window.closeRateModal(); window.showToast("⭐ Obrigado pela avaliação!");
        } catch (e) { window.showToast("⚠️ Erro ao avaliar."); }
    };

    window.reorderToCart = (orderId) => {
        const o = window.myOrders.find(x => x.id === orderId); if (!o) return;
        const loja = window.allStores.find(s => s.id === o.lojaId);
        if (loja && !window.isStoreOpenBySchedule(loja)) { window.showToast("🔴 Loja fechada no momento."); return; }
        if (window.cart.length && window.cart[0].lojaId !== o.lojaId) { window.cart = []; window.appliedCoupon = null; }
        if (Array.isArray(o.itensCart) && o.itensCart.length) {
            o.itensCart.forEach(s => window.cart.push({ prodId: s.prodId, lojaId: o.lojaId, nome: s.nome, unitPrice: parseFloat(s.unitPrice) || 0, qty: parseInt(s.qty) || 1, addonsNames: s.addonsNames || [], addonsKey: s.addonsKey || '', obs: s.obs || '' }));
            window.updateCartFloatingBar(); window.openCartModal(); window.showToast("🛍️ Itens adicionados na sacola!");
        } else window.openStoreMenu(o.lojaId);
    };

    window.renderClientOrders = () => {
        const box = el('client-orders-list'); if (!box) return;
        if (!window.currentClient) { box.innerHTML = `<p style="padding:20px; color:#71717a; font-weight:700;">Faça login na aba Perfil para acompanhar seus pedidos.</p>`; return; }
        if (!window.myOrders.length) { box.innerHTML = `<p style="padding:20px; color:#71717a; font-weight:700;">Você ainda não fez nenhum pedido.</p>`; return; }
        box.innerHTML = [...window.myOrders].reverse().map(o => {
            const loja = window.allStores.find(s => s.id === o.lojaId);
            const logo = loja?.logo_loja || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=150';
            const isDone = window.isOrderDone(o.status), isCanc = o.status === 'Cancelado', unread = window.getUnreadStoreMessagesForOrder(o);
            return `<div style="background:#fff; border:${isCanc ? '1px solid #fecaca' : '1px solid var(--border)'}; border-radius:18px; padding:15px 16px; margin-bottom:12px;">
                <div style="display:flex; align-items:center; gap:10px; margin-bottom:8px; cursor:pointer;" onclick="openStoreMenu('${o.lojaId}')">
                    <img src="${window.escapeHtml(logo)}" style="width:38px; height:38px; border-radius:50%; object-fit:cover;">
                    <div><div style="font-weight:900; font-size:0.95rem;">${window.escapeHtml(o.nomeLoja || loja?.nome_loja || 'Restaurante')}</div>
                    <div style="font-size:0.72rem; font-weight:800; color:${isDone ? '#16a34a' : (isCanc ? '#dc2626' : '#71717a')};">${isDone ? 'Pedido finalizado' : (isCanc ? 'Cancelado' : 'Em andamento')}</div></div>
                </div>
                <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                    <span style="font-size:0.78rem; font-weight:800; color:#71717a;">Pagamento: <b style="color:#111;">${window.escapeHtml(o.pagamento || 'PIX')}</b></span>
                    <span style="font-size:0.98rem; font-weight:900; color:${isCanc ? '#dc2626' : 'var(--success)'};">${window.escapeHtml(o.total || 'R$ 0,00')}</span>
                </div>
                <div style="display:flex; gap:6px; flex-wrap:wrap; justify-content:flex-end;">
                    ${(!isDone && !isCanc) ? `<button type="button" class="${unread > 0 ? 'chat-btn-unread' : ''}" onclick="openClientChat('${o.id}')" style="background:#f4f4f5; border:none; padding:8px 12px; border-radius:10px; font-weight:800; font-size:0.78rem; cursor:pointer;">💬 Chat ${unread > 0 ? `(${unread})` : ''}</button>` : ''}
                    ${isDone && !isCanc ? `<button type="button" onclick="reorderToCart('${o.id}')" style="background:var(--success); color:#fff; border:none; padding:8px 12px; border-radius:10px; font-weight:900; font-size:0.78rem; cursor:pointer;">🛍️ Repetir</button>` : `<button type="button" onclick="openTrackModal('${o.id}')" style="background:var(--primary); color:#fff; border:none; padding:8px 12px; border-radius:10px; font-weight:900; font-size:0.78rem; cursor:pointer;">🛵 Acompanhar</button>`}
                    ${isDone && !isCanc && !o.avaliacao ? `<button type="button" onclick="openRateOrderModal('${o.id}')" style="background:#fef3c7; color:#b45309; border:none; padding:8px 12px; border-radius:10px; font-weight:900; font-size:0.78rem; cursor:pointer;">⭐ Avaliar</button>` : ''}
                </div>
            </div>`;
        }).join('');
    };

    window.toggleClientAuthMode = () => {
        window.isRegisterMode = !window.isRegisterMode;
        el('auth-name-group').style.display = window.isRegisterMode ? 'flex' : 'none';
        el('auth-phone-group').style.display = window.isRegisterMode ? 'block' : 'none';
        el('strong-pass-rules-box').style.display = window.isRegisterMode ? 'flex' : 'none';
        el('forgot-pass-link-box').style.display = window.isRegisterMode ? 'none' : 'block';
        el('cli-auth-submit-btn').innerText = window.isRegisterMode ? 'Criar Minha Conta' : 'Entrar na Conta';
        el('cli-auth-toggle-btn').innerText = window.isRegisterMode ? 'Já tem conta? Faça Login' : 'Ainda não tem conta? Cadastre-se grátis';
    };

    window.saveClientProfileEverywhere = async (uid, prof) => {
        if (!uid) return;
        const clean = {
            uid, email: String(prof.email || window.currentClient?.email || '').trim().toLowerCase(),
            nome: String(prof.nome || window.clientProfileData?.nome || 'Cliente').trim(),
            primeiroNome: prof.primeiroNome || window.clientProfileData?.primeiroNome || '',
            sobrenome: prof.sobrenome || window.clientProfileData?.sobrenome || '',
            telefone: String(prof.telefone ?? window.clientProfileData?.telefone ?? '').trim(),
            enderecos: Array.isArray(prof.enderecos) ? prof.enderecos : (window.clientProfileData?.enderecos || []),
            updatedAtMs: Date.now()
        };
        window.clientProfileData = clean;
        try {
            localStorage.setItem('juaba_cli_profile_' + uid, JSON.stringify(clean));
            localStorage.setItem('juaba_cli_active_session', JSON.stringify({ uid, email: clean.email, displayName: clean.nome, profile: clean }));
        } catch (e) {}
        if (auth.currentUser) await updateProfile(auth.currentUser, { displayName: clean.nome }).catch(() => {});
        await setDoc(doc(db, "usuario", uid), clean, { merge: true }).catch(() => {});
    };

    window.loadClientProfileEverywhere = async (user) => {
        if (!user) return { nome: 'Cliente', email: '', telefone: '', enderecos: [] };
        let local = null, cloud = null;
        try { local = JSON.parse(localStorage.getItem('juaba_cli_profile_' + user.uid) || 'null'); } catch (e) {}
        try { const s = await getDoc(doc(db, "usuario", user.uid)); if (s.exists()) cloud = s.data(); } catch (e) {}
        const merged = {
            uid: user.uid, email: String(user.email || '').toLowerCase(),
            nome: cloud?.nome || local?.nome || user.displayName || 'Cliente',
            primeiroNome: cloud?.primeiroNome || local?.primeiroNome || '',
            sobrenome: cloud?.sobrenome || local?.sobrenome || '',
            telefone: cloud?.telefone || local?.telefone || '',
            enderecos: Array.isArray(cloud?.enderecos) && cloud.enderecos.length ? cloud.enderecos : (local?.enderecos || [])
        };
        window.clientProfileData = merged;
        return merged;
    };

    window.sendClientPinViaGoogleSheets = async (email, nome, pin) => {
        const payload = { acao: 'enviar_pin', tipo: 'verificacao_cliente', email, nome, pin: String(pin), assunto: `Código PIN: ${pin} - JuabaDelivery` };
        try {
            const sep = GOOGLE_SCRIPT_URL.includes('?') ? '&' : '?';
            await fetch(GOOGLE_SCRIPT_URL + sep + new URLSearchParams(payload).toString(), { method: 'POST', mode: 'no-cors', body: JSON.stringify(payload) });
            window.showToast(`📩 PIN enviado para ${email}!`);
        } catch (e) { window.showToast("⚠️ Falha ao enviar o PIN."); }
    };

    window.resendClientPin = () => {
        if (!_pendingClientReg) return;
        const rawPin = String(Math.floor(1000 + Math.random() * 9000));
        _pinHash = hashPin(rawPin);
        window.sendClientPinViaGoogleSheets(_pendingClientReg.email, _pendingClientReg.nome, rawPin);
    };

    window.confirmClientEmailPin = async () => {
        const typed = el('client-pin-code-input').value.trim();
        if (!typed || hashPin(typed) !== _pinHash) { window.showToast("❌ PIN incorreto!"); return; }
        if (!_pendingClientReg) return;
        const { email, pass, nome, primeiroNome, sobrenome, telefone } = _pendingClientReg;
        const btn = el('btn-client-confirm-pin'); btn.disabled = true; btn.innerText = "Criando conta...";
        window.isRegisteringClient = true;
        try {
            let userObj = null;
            try {
                const cred = await createUserWithEmailAndPassword(auth, email, pass);
                userObj = cred.user;
            } catch (authErr) {
                if (authErr.code === 'auth/email-already-in-use') {
                    const signCred = await signInWithEmailAndPassword(auth, email, pass);
                    userObj = signCred.user;
                } else {
                    throw authErr;
                }
            }
            await window.saveClientProfileEverywhere(userObj.uid, { email, nome, primeiroNome, sobrenome, telefone, enderecos: [] });
            window.currentClient = userObj;
            window.isRegisteringClient = false; _pendingClientReg = null; _pinHash = null;
            el('modal-client-verify-pin').style.display = 'none';
            el('tab-pedidos').style.display = 'flex'; el('dnav-pedidos').style.display = 'inline-block';
            el('profile-logged-out').style.display = 'none'; el('profile-logged-in').style.display = 'block';
            window.updateClientHeaderUI(); window.listenToMyOrders(userObj.email);
            window.showToast("🎉 Conta criada com sucesso!");
        } catch (e) {
            window.isRegisteringClient = false;
            const msg = e?.code === 'auth/wrong-password' || e?.code === 'auth/invalid-credential'
                ? "⚠️ Este e-mail já está cadastrado com outra senha! Faça login."
                : "⚠️ Erro ao criar conta: " + (e?.message || "Verifique sua conexão.");
            window.showToast(msg);
        } finally {
            btn.disabled = false; btn.innerText = "✅ Validar PIN e Concluir Cadastro";
        }
    };

    window.submitClientAuth = async () => {
        const email = el('cli-auth-email').value.trim(), pass = el('cli-auth-pass').value.trim();
        if (!email || !pass) { window.showToast("Preencha e-mail e senha!"); return; }
        try {
            if (window.isRegisterMode) {
                const primeiroNome = el('cli-auth-first-name').value.trim(), sobrenome = el('cli-auth-last-name').value.trim(), telefone = el('cli-auth-phone').value.trim();
                if (!primeiroNome || !sobrenome) { window.showToast("⚠️ Informe Nome e Sobrenome!"); return; }
                if (telefone.replace(/\D/g, '').length < 8) { window.showToast("⚠️ Informe seu WhatsApp com DDD!"); return; }
                if (!window.checkStrongPassword(pass).isValid) { window.showToast("🔒 A senha não cumpre os requisitos!"); return; }
                const nome = `${primeiroNome} ${sobrenome}`.trim(), rawPin = String(Math.floor(1000 + Math.random() * 9000));
                _pendingClientReg = { email, pass, nome, primeiroNome, sobrenome, telefone }; _pinHash = hashPin(rawPin);
                el('client-pin-target-email').innerText = email; el('client-pin-code-input').value = '';
                el('modal-client-verify-pin').style.display = 'flex';
                await window.sendClientPinViaGoogleSheets(email, nome, rawPin);
            } else {
                const cred = await signInWithEmailAndPassword(auth, email, pass);
                const lSnap = await getDoc(doc(db, "lojas", cred.user.uid));
                if (lSnap.exists() && !lSnap.data().isSystemConfig) { await signOut(auth); window.showToast("🏪 Conta de Loja! Use o Painel do Lojista."); return; }
                window.showToast("👋 Bem-vindo de volta!");
            }
        } catch (e) { window.showToast("⚠️ E-mail ou senha incorretos."); }
    };

    window.logoutClient = async () => { localStorage.removeItem('juaba_cli_active_session'); await signOut(auth); window.showToast("Você saiu da conta."); window.switchTab('home'); };

    window.openProfileSubView = (sub) => {
        if (!window.currentClient && sub !== 'main') { window.switchTab('perfil'); window.showToast("Faça login primeiro!"); return; }
        document.querySelectorAll('.view-section').forEach(s => s.classList.remove('active'));
        el('sec-perfil').classList.add('active');
        el('profile-main-menu').style.display = sub === 'main' ? 'block' : 'none';
        el('profile-sub-enderecos').style.display = sub === 'enderecos' ? 'block' : 'none';
        el('profile-sub-conta').style.display = sub === 'conta' ? 'block' : 'none';
        if (sub === 'enderecos') window.renderSavedAddresses();
        if (sub === 'conta') {
            const parts = String(window.clientProfileData.nome || '').trim().split(' ');
            el('acc-edit-first-name').value = window.clientProfileData.primeiroNome || parts[0] || '';
            el('acc-edit-last-name').value = window.clientProfileData.sobrenome || parts.slice(1).join(' ') || '';
            el('acc-edit-phone').value = window.clientProfileData.telefone || '';
        }
    };

    window.formatAddressDisplay = (a) => a ? `${a.logradouro || ''}${a.numero ? `, Nº ${a.numero}` : ''}${a.bairro ? ` - ${a.bairro}` : ''}${a.complemento ? ` (${a.complemento})` : ''}`.trim() : '';
    window.renderSavedAddresses = () => {
        const addrs = window.clientProfileData.enderecos || [];
        el('saved-addresses-list').innerHTML = addrs.length ? addrs.map((a, idx) => `
            <div class="addr-card">
                <div style="font-weight:900; font-size:0.92rem;">📍 ${window.escapeHtml(a.logradouro ? `${a.logradouro}, Nº ${a.numero || 'S/N'} — ${a.bairro || ''}` : (a.rua || ''))}</div>
                <div style="display:flex; gap:6px;">
                    <button type="button" onclick="startEditAddress(${idx})" style="background:#f4f4f5; border:none; padding:6px 10px; border-radius:8px; cursor:pointer;">✏️</button>
                    <button type="button" onclick="deleteAddress(${idx})" style="background:#fee2e2; color:#dc2626; border:none; padding:6px 10px; border-radius:8px; cursor:pointer;">🗑️</button>
                </div>
            </div>`).join('') : `<p style="color:#71717a; font-weight:700; text-align:center; padding:16px;">Nenhum endereço salvo.</p>`;
    };

    window.openAddressFormModal = (fromCart = false) => {
        window.reopenDeliveryModalAfterSave = Boolean(fromCart); window.editingAddressIndex = -1;
        ['addr-rua','addr-numero','addr-bairro','addr-comp','addr-ref'].forEach(id => el(id).value = '');
        el('modal-address-form').style.display = 'flex';
    };
    window.closeAddressFormModal = () => { el('modal-address-form').style.display = 'none'; };
    window.startEditAddress = (idx) => {
        const a = window.clientProfileData.enderecos?.[idx]; if (!a) return;
        window.editingAddressIndex = idx;
        el('addr-rua').value = a.logradouro || ''; el('addr-numero').value = a.numero || '';
        el('addr-bairro').value = a.bairro || ''; el('addr-comp').value = a.complemento || ''; el('addr-ref').value = a.referencia || '';
        el('modal-address-form').style.display = 'flex';
    };
    window.deleteAddress = async (idx) => {
        window.clientProfileData.enderecos.splice(idx, 1);
        await window.saveClientProfileEverywhere(window.currentClient.uid, window.clientProfileData);
        window.renderSavedAddresses(); window.syncCartDeliveryDisplay(); window.updateClientHeaderUI();
    };
    window.saveAddressFromProfile = async () => {
        const logradouro = el('addr-rua').value.trim(), numero = el('addr-numero').value.trim(), bairro = el('addr-bairro').value.trim();
        if (!logradouro || !numero || !bairro) { window.showToast("Preencha Rua, Número e Bairro!"); return; }
        const obj = { logradouro, numero, bairro, complemento: el('addr-comp').value.trim(), referencia: el('addr-ref').value.trim() };
        obj.rua = window.formatAddressDisplay(obj);
        if (!Array.isArray(window.clientProfileData.enderecos)) window.clientProfileData.enderecos = [];
        if (window.editingAddressIndex > -1) window.clientProfileData.enderecos[window.editingAddressIndex] = obj;
        else window.clientProfileData.enderecos.push(obj);
        window.closeAddressFormModal();
        await window.saveClientProfileEverywhere(window.currentClient.uid, window.clientProfileData);
        window.renderSavedAddresses(); window.syncCartDeliveryDisplay(); window.updateClientHeaderUI();
        if (window.reopenDeliveryModalAfterSave) { window.reopenDeliveryModalAfterSave = false; window.openCartDeliveryModal(); }
    };

    window.saveAccountDetails = async () => {
        const p = el('acc-edit-first-name').value.trim(), s = el('acc-edit-last-name').value.trim(), t = el('acc-edit-phone').value.trim();
        if (!p || !s || t.replace(/\D/g, '').length < 8) { window.showToast("Preencha Nome, Sobrenome e WhatsApp!"); return; }
        window.clientProfileData.primeiroNome = p; window.clientProfileData.sobrenome = s;
        window.clientProfileData.nome = `${p} ${s}`.trim(); window.clientProfileData.telefone = t;
        await window.saveClientProfileEverywhere(window.currentClient.uid, window.clientProfileData);
        window.updateClientHeaderUI(); window.showToast("✅ Dados atualizados!"); window.openProfileSubView('main');
    };

    window.updateClientHeaderUI = () => {
        if (!window.currentClient) return;
        const name = window.clientProfileData.nome || 'Cliente';
        if (el('desktop-user-btn')) el('desktop-user-btn').innerText = `👤 ${name.split(' ')[0]}`;
        el('prof-header-name').innerText = name;
        el('prof-header-email').innerText = window.currentClient.email || '';
        el('prof-header-phone').innerText = window.clientProfileData.telefone ? `📱 WhatsApp: ${window.clientProfileData.telefone}` : `⚠️ WhatsApp não informado`;
        const a = window.clientProfileData.enderecos?.[0];
        if (el('desktop-addr-label')) el('desktop-addr-label').innerText = a ? `${a.logradouro || a.rua}`.substring(0, 18) : 'Endereço';
    };

    (function hydrateInstantCache() {
        try { window.renderBanners(JSON.parse(localStorage.getItem('juaba_cache_banners') || 'null')); } catch (e) { window.renderBanners(window.defaultBanners); }
        try {
            window.allStores = JSON.parse(localStorage.getItem('juaba_cache_stores') || '[]');
            window.allProducts = JSON.parse(localStorage.getItem('juaba_cache_products') || '[]');
            if (window.allStores.length) window.renderHomeView();
        } catch (e) {}
        window.updateCartFloatingBar(); window.restoreNavigationState();
        const sp = el('ifood-splash-screen');
        if (sp) {
            if (sessionStorage.getItem('juaba_splash_shown') === '1') sp.style.display = 'none';
            else { sessionStorage.setItem('juaba_splash_shown', '1'); setTimeout(() => { sp.classList.add('hide-splash'); setTimeout(() => sp.style.display = 'none', 480); }, 1400); }
        }
    })();

    window.listenToMyOrders = (email) => {
        if (_unsubscribeOrders) { _unsubscribeOrders(); _unsubscribeOrders = null; }
        if (!email) { window.myOrders = []; window.renderClientOrders(); window.updateUnreadChatBadgesUI(); return; }
        const cleanEmail = String(email).trim().toLowerCase();

        _unsubscribeOrders = onSnapshot(collection(db, "pedidos"), (snap) => {
            window.myOrders = [];
            snap.forEach(d => {
                const data = d.data();
                if (!data.isUserProfileDoc && !d.id.startsWith('user_profile_')) {
                    if (String(data.emailCliente || '').trim().toLowerCase() === cleanEmail) {
                        window.myOrders.push({ id: d.id, ...data });
                    }
                }
            });

            window.myOrders.forEach(o => {
                const isOrderActive = !window.isOrderDone(o.status) && o.status !== 'Cancelado';
                const cnt = window.getStoreMessagesCount(o);
                const savedSeenChat = parseInt(localStorage.getItem('juaba_seen_chat_' + o.id) || '0', 10);
                const prev = window.prevStoreChatCounts[o.id] !== undefined ? window.prevStoreChatCounts[o.id] : savedSeenChat;
                const savedStatus = localStorage.getItem('juaba_last_status_' + o.id);
                const prevStatus = window.prevOrderStatusMap[o.id] !== undefined ? window.prevOrderStatusMap[o.id] : savedStatus;
                const lastStoreMsg = Array.isArray(o.chat) ? [...o.chat].reverse().find(m => m.sender === 'loja') : null;

                // 1. Notificação quando chega nova mensagem da loja no chat
                if (window.activeChatOrderId === o.id && el('modal-chat').style.display === 'flex') {
                    if (!isOrderActive) {
                        window.closeClientChat();
                    } else {
                        localStorage.setItem('juaba_seen_chat_' + o.id, String(cnt));
                    }
                } else if (isOrderActive && cnt > prev) {
                    const msgPreview = lastStoreMsg?.text || 'Nova mensagem recebida no seu pedido!';
                    window.showToast(`💬 ${o.nomeLoja || 'Loja'}: ${msgPreview}`);
                    window.triggerNativeSystemNotification(`💬 ${o.nomeLoja || 'Restaurante'}`, msgPreview, o.id);
                }

                // 2. Notificação quando o status do pedido muda (inclusive ao acordar o app em segundo plano)
                if (prevStatus && prevStatus !== o.status) {
                    let statusTitle = `🛵 ${o.nomeLoja || 'JuabaDelivery'} — Pedido #${o.id.substring(0,6).toUpperCase()}`;
                    let statusBody = `O status do seu pedido mudou para: ${o.status}`;
                    if (o.status === 'Preparando') statusBody = `🍳 A loja aceitou seu pedido e já está preparando!`;
                    else if (o.status === 'Entrega') statusBody = `🛵 Seu pedido saiu para entrega! Prepare-se para receber.`;
                    else if (window.isOrderDone(o.status)) statusBody = `✅ Pedido entregue e concluído! Bom apetite!`;
                    else if (o.status === 'Cancelado') statusBody = `❌ Pedido cancelado: ${o.motivoCancelamento || 'Verifique os detalhes no app.'}`;
                    
                    window.showToast(statusBody);
                    window.triggerNativeSystemNotification(statusTitle, statusBody, o.id);
                }

                window.prevStoreChatCounts[o.id] = cnt;
                window.prevOrderStatusMap[o.id] = o.status;
                try { localStorage.setItem('juaba_last_status_' + o.id, String(o.status || 'Novo')); } catch (e) {}
            });

            window.initialOrdersLoadDone = true;
            try { localStorage.setItem('juaba_cache_orders_' + cleanEmail, JSON.stringify(window.myOrders)); } catch (e) {}

            window.updateUnreadChatBadgesUI();
            window.renderClientOrders();
            if (window.activeTrackOrderId && el('modal-track-order').style.display === 'flex') {
                const f = window.myOrders.find(x => x.id === window.activeTrackOrderId);
                if (f) window.openTrackModal(f.id, f);
            }
            if (window.activeChatOrderId) window.renderClientChatMessages();
        }, (err) => {
            console.error("Erro no listener de pedidos:", err);
        });
    };

    // Reconecta e verifica atualizações imediatamente quando o celular acorda ou volta do 2º plano
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible' && window.currentClient?.email) {
            window.initPushNotificationsEngine();
        }
    });

    onAuthStateChanged(auth, async (user) => {
        if (user) {
            try {
                const lojaSnap = await getDoc(doc(db, "lojas", user.uid));
                if (lojaSnap.exists() && !lojaSnap.data().isSystemConfig) {
                    await signOut(auth);
                    window.showToast("🏪 Este e-mail pertence a uma Loja! Acesse pelo Painel do Lojista.");
                    return;
                }
            } catch (e) {}

            window.currentClient = user;
            el('tab-pedidos').style.display = 'flex';
            el('dnav-pedidos').style.display = 'inline-block';
            el('profile-logged-out').style.display = 'none';
            el('profile-logged-in').style.display = 'block';

            if (window.isRegisteringClient && window.clientProfileData?.nome) {
                window.updateClientHeaderUI();
            } else {
                const profile = await window.loadClientProfileEverywhere(user);
                window.clientProfileData = profile;
                try {
                    localStorage.setItem('juaba_cli_active_session', JSON.stringify({
                        uid: user.uid,
                        email: user.email || '',
                        displayName: profile.nome || user.displayName || 'Cliente',
                        profile
                    }));
                } catch (e) {}
                window.updateClientHeaderUI();
                window.renderSavedAddresses();
                window.syncCartDeliveryDisplay();
            }
            window.initPushNotificationsEngine();
            window.listenToMyOrders(user.email);
        } else {
            try { localStorage.removeItem('juaba_cli_active_session'); } catch (e) {}
            window.currentClient = null;
            el('tab-pedidos').style.display = 'none';
            el('dnav-pedidos').style.display = 'none';
            el('profile-logged-out').style.display = 'block';
            el('profile-logged-in').style.display = 'none';
            if (el('desktop-user-btn')) el('desktop-user-btn').innerText = '👤 Entrar';
            window.listenToMyOrders(null);
        }
    });

    onSnapshot(collection(db, "lojas"), (snap) => {
        window.allStores = [];
        let sysBlocked = {}, sysOverrides = {}, sysBanners = null, sysBillingEnabled = true, latestMs = -1;

        snap.forEach(d => {
            const data = d.data();
            if (d.id === '_marketplace_config_' || data.isSystemConfig === true) {
                const ms = data.updatedAtMs || 0;
                if (ms >= latestMs) {
                    latestMs = ms;
                    if (data.billingSystemEnabled !== undefined) sysBillingEnabled = Boolean(data.billingSystemEnabled);
                    if (data.blockedStores) sysBlocked = data.blockedStores;
                    if (data.storeOverrides) sysOverrides = data.storeOverrides;
                    if (Array.isArray(data.banners) && data.banners.length > 0) sysBanners = data.banners;
                }
            }
        });

        window.globalBillingEnabled = sysBillingEnabled;
        window.renderBanners(sysBanners || window.defaultBanners);
        try { if (sysBanners) localStorage.setItem('juaba_cache_banners', JSON.stringify(sysBanners)); } catch (e) {}

        snap.forEach(d => {
            const data = d.data();
            if (d.id !== '_marketplace_config_' && !data.isSystemConfig) {
                const over = sysOverrides[d.id] || {};
                const blocked = (sysBlocked[d.id] !== undefined) ? sysBlocked[d.id] : Boolean(data.bloqueada);
                window.allStores.push({ id: d.id, ...data, ...over, bloqueada: blocked });
            }
        });

        try { localStorage.setItem('juaba_cache_stores', JSON.stringify(window.allStores)); } catch (e) {}
        window.renderHomeView();
        if (window.activeStoreId) window.renderStoreMenu(window.activeStoreId);
    });

    onSnapshot(collection(db, "produtos"), (snap) => {
        window.allProducts = [];
        snap.forEach(d => window.allProducts.push({ id: d.id, ...d.data() }));
        try { localStorage.setItem('juaba_cache_products', JSON.stringify(window.allProducts)); } catch (e) {}
        window.renderHomeView();
        if (window.activeStoreId) window.renderStoreMenu(window.activeStoreId);
        if (window.detailProduct) window.renderProductSuggestions(window.detailProduct);
        if (!window.hasRestoredProductDetailOnce) {
            window.hasRestoredProductDetailOnce = true;
            try {
                const st = JSON.parse(sessionStorage.getItem('juaba_nav_state') || 'null');
                if (st && st.view === 'product-detail' && st.prodId && !window.detailProduct) {
                    window.openProductDetailModal(st.prodId);
                }
            } catch (e) {}
        }
    });

    onSnapshot(collection(db, "cupons"), (snap) => {
        _internalCoupons = [];
        window.storesWithCoupons.clear();
        snap.forEach(d => {
            const data = d.data();
            _internalCoupons.push({ id: d.id, ...data });
            if (data.lojaId) window.storesWithCoupons.add(data.lojaId);
        });
        window.renderHomeView();
    });

    window.openForgotPasswordModal = () => {
        el('forgot-pass-email').value = el('cli-auth-email').value.trim();
        el('modal-forgot-password').style.display = 'flex';
    };
    window.closeForgotPasswordModal = () => { el('modal-forgot-password').style.display = 'none'; };
    window.sendClientPasswordReset = async () => {
        const email = el('forgot-pass-email').value.trim();
        if (!email) { window.showToast("Digite seu e-mail!"); return; }
        try {
            await sendPasswordResetEmail(auth, email);
            window.closeForgotPasswordModal();
            window.showToast("✅ Link enviado para seu e-mail!");
        } catch (e) { window.showToast("⚠️ E-mail não encontrado."); }
    };

    setInterval(() => {
        window.renderHomeView();
        if (window.activeStoreId) window.renderStoreMenu(window.activeStoreId);
    }, 30000);
</script>
</body>
</html>
