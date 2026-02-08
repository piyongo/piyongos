/* js/components.js - V19.0 (Font & Link Polish) */

const isRoot = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');
const pathPrefix = isRoot ? '' : '../';

const APP_CONFIG = {
    containerClass: 'max-w-6xl mx-auto px-6',
    colors: { brand: '#FF4F00' }
};

document.addEventListener('DOMContentLoaded', () => {
    injectGlobalStyles();
    injectGlobalHeader();
    injectFooter();
    initLanguageSystem();
    initFavoritesSystem();
    
    // Coffee butonu dil yüklendikten sonra render edilir
    renderCoffeeButtons();
});

function injectGlobalStyles() {
    const style = document.createElement('style');
    style.textContent = `
        /* Fontların daha hızlı ve pürüzsüz yüklenmesi için */
        @font-face { font-display: swap; }
        
        html { -webkit-tap-highlight-color: transparent; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        .tool-card { transition: all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1); }
        .tool-card:active { transform: scale(0.98); }
        
        @media (min-width: 768px) {
            .tool-card:hover { 
                transform: translateY(-6px); 
                box-shadow: 10px 10px 0px 0px #000000; 
                border-color: #000000;
            }
            .tool-card:hover h3 { color: ${APP_CONFIG.colors.brand}; }
            .tool-card:hover .card-icon-box { 
                background-color: ${APP_CONFIG.colors.brand}; 
                color: white; 
                border-color: ${APP_CONFIG.colors.brand}; 
            }
            .tool-card .arrow-icon { color: #d4d4d4; transition: all 0.2s; } 
            .tool-card:hover .arrow-icon { color: #000000; transform: translateX(2px) translateY(-2px); } 
        }
        
        .filter-btn { transition: all 0.2s; white-space: nowrap; }
        .filter-btn.active { background-color: #000; color: #fff; border-color: #000; }
        .filter-btn:hover:not(.active) { background-color: #e5e5e5; }
        
        .native-select-wrapper { position: relative; display: flex; align-items: center; }
        .native-select { 
            position: absolute; inset: 0; width: 100%; height: 100%; 
            opacity: 0; cursor: pointer; appearance: none; z-index: 10; 
        }
    `;
    document.head.appendChild(style);
}

function renderCoffeeButtons() {
    const coffeePlaceholders = document.querySelectorAll('#coffee-btn-placeholder, .tool-coffee-placeholder');
    const currentLang = localStorage.getItem('userLang') || 'en';
    // translations.js'den metni çek
    const coffeeText = (typeof t === 'function') ? t('common', 'buyMeACoffee', currentLang) : 'Buy Me A Coffee';
    
    coffeePlaceholders.forEach(el => {
        el.innerHTML = `
        <a href="https://ko-fi.com/piyongo" target="_blank" 
           class="flex items-center justify-center gap-3 w-full md:w-auto h-12 md:h-14 bg-[#FF4F00] text-white border-2 border-black rounded-[20px] md:rounded-[24px] px-5 hover:shadow-[4px_4px_0px_0px_#000] active:translate-y-0 active:shadow-none transition-all group">
            <div class="w-5 h-5 md:w-6 md:h-6 shrink-0 group-hover:rotate-12 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="none">
                    <path d="M38 12H90C96 12 100 18 100 24H28C28 18 32 12 38 12Z" stroke="currentColor" stroke-width="6" stroke-linejoin="round"></path>
                    <path d="M26 30H102V38C102 42 98 46 92 46H36C30 46 26 42 26 38V30Z" stroke="currentColor" stroke-width="4" stroke-linejoin="round"></path>
                    <path d="M36 48H92L86 112C86 116 82 118 78 118H50C46 118 42 116 42 112L36 48Z" stroke="currentColor" stroke-width="6" stroke-linejoin="round"></path>
                    <path d="M36 70H92V98H42C38 98 36 96 36 92V70Z" fill="currentColor"></path>
                </svg>
            </div>
            <span class="text-lg md:text-xl pt-1 font-bold" style="font-family: 'Comic Neue', cursive !important;">${coffeeText}</span>
        </a>`;
    });
}

// Global Header, Footer ve InitLanguageSystem fonksiyonları önceki sürümlerle aynı kalsın...
function injectGlobalHeader() {
    const existingHeader = document.querySelector('header');
    if (existingHeader) existingHeader.remove();

    const header = document.createElement('header');
    header.className = `${APP_CONFIG.containerClass} pt-6 md:pt-10 flex justify-between items-center relative z-50 w-full mb-6 md:mb-12`;
    
    const currentLang = localStorage.getItem('userLang') || 'en';
    const langLabels = { 'en': 'English', 'tr': 'Türkçe', 'pt': 'Português' };
    const langFlags = { 'en': '🇺🇸', 'tr': '🇹🇷', 'pt': '🇵🇹' };

    header.innerHTML = `
        <a href="${pathPrefix}index.html" class="font-black text-2xl md:text-3xl tracking-tight hover:text-[#FF4F00] transition-colors shrink-0">
            PIYONGO.
        </a>

        <div class="native-select-wrapper group">
            <div class="flex items-center gap-2 font-bold font-mono text-sm bg-neutral-100 text-neutral-600 rounded-lg px-3 py-2 transition-colors group-hover:text-[#FF4F00] group-hover:bg-neutral-50">
                <span class="text-lg leading-none">${langFlags[currentLang] || '🇺🇸'}</span>
                <span class="inline-block pt-0.5">${langLabels[currentLang] || 'English'}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="opacity-60 group-hover:text-[#FF4F00]">
                    <path d="M6 9l6 6 6-6"></path>
                </svg>
            </div>

            <select id="nativeLangSelect" class="native-select">
                <option value="en" ${currentLang === 'en' ? 'selected' : ''}>🇺🇸 English</option>
                <option value="tr" ${currentLang === 'tr' ? 'selected' : ''}>🇹🇷 Türkçe</option>
                <option value="pt" ${currentLang === 'pt' ? 'selected' : ''}>🇵🇹 Português</option>
            </select>
        </div>
    `;

    document.body.prepend(header);
}

function initLanguageSystem() {
    const select = document.getElementById('nativeLangSelect');
    if(select) {
        select.addEventListener('change', (e) => {
            localStorage.setItem('userLang', e.target.value);
            location.reload();
        });
    }

    const currentLang = localStorage.getItem('userLang') || 'en';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (typeof t === 'function') {
            const [sec, k] = key.split('.');
            el.textContent = t(sec, k, currentLang);
        }
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (typeof t === 'function') {
            const [sec, k] = key.split('.');
            el.placeholder = t(sec, k, currentLang);
        }
    });
}

function injectFooter() {
    const existingFooter = document.querySelector('footer');
    if (existingFooter) existingFooter.remove();

    const footer = document.createElement('footer');
    footer.className = `mt-12 md:mt-24 pb-8 md:pb-12 border-t-2 border-black bg-white`;
    
    footer.innerHTML = `
        <div class="${APP_CONFIG.containerClass} py-12">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <div class="col-span-1 md:col-span-2">
                    <h3 class="text-2xl font-black mb-4 tracking-tighter">PIYONGO<span class="text-[#FF4F00]">.</span></h3>
                    <p class="text-neutral-600 max-w-sm font-mono text-sm leading-relaxed" data-i18n="common.footer_desc">
                        Detailed guides, calculators, smart tools. All in one place. Completely free.
                    </p>
                </div>
                <div>
                    <h4 class="font-bold uppercase tracking-widest text-xs mb-4 text-neutral-400">ECOSYSTEM</h4>
                    <ul class="space-y-2 text-sm font-mono text-neutral-600">
                        <li><a href="${pathPrefix}about.html" class="hover:text-[#FF4F00] transition-colors" data-i18n="common.about">About</a></li>
                        <li><a href="${pathPrefix}contact.html" class="hover:text-[#FF4F00] transition-colors" data-i18n="common.contact">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-bold uppercase tracking-widest text-xs mb-4 text-neutral-400">CONNECT</h4>
                    <ul class="space-y-2 text-sm font-mono text-neutral-600">
                        <li><a href="https://twitter.com/piyongo" target="_blank" class="hover:text-[#FF4F00] transition-colors">Tiktok</a></li>
                        <li><a href="https://instagram.com/piyongo" class="hover:text-[#FF4F00] transition-colors">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div class="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-200">
                <p class="text-xs text-neutral-400 font-mono">© 2025 Piyongo.</p>
                <div class="flex items-center gap-2">
                    <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span class="text-[10px] font-mono font-bold text-neutral-400">OPERATIONAL</span>
                </div>
            </div>
        </div>
    `;
    
    const main = document.querySelector('main');
    if(main) main.parentNode.insertBefore(footer, main.nextSibling);
    else document.body.appendChild(footer);
}

function initFavoritesSystem() {
    const btn = document.getElementById('favBtn');
    if (!btn || !window.PAGE_CONFIG || !window.PAGE_CONFIG.id) return;
    const toolId = window.PAGE_CONFIG.id;
    const storageKey = 'piyongo_favs';
    const path = btn.querySelector('svg path');

    const updateIconVisual = (isActive) => {
        if (isActive) {
            btn.classList.add('text-[#FF4F00]');
            if(path) { path.setAttribute('fill', 'currentColor'); path.setAttribute('stroke', 'currentColor'); }
        } else {
            btn.classList.remove('text-[#FF4F00]');
            if(path) { path.setAttribute('fill', 'none'); path.setAttribute('stroke', 'currentColor'); }
        }
    };

    let favs = [];
    try { favs = JSON.parse(localStorage.getItem(storageKey) || '[]'); } catch (e) {}
    updateIconVisual(favs.includes(toolId));

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        try { favs = JSON.parse(localStorage.getItem(storageKey) || '[]'); } catch (e) { favs = []; }
        if (favs.includes(toolId)) { favs = favs.filter(id => id !== toolId); updateIconVisual(false); } 
        else { favs.push(toolId); updateIconVisual(true); }
        localStorage.setItem(storageKey, JSON.stringify(favs));
        btn.style.transform = "scale(0.8)";
        setTimeout(() => btn.style.transform = "scale(1)", 150);
    });
}