// config.js - CENTRAL CONFIGURATION v2.0 (Piyongo)

const CORE_CONFIG = {
    // Analytics & Tracking
    analytics: {
        googleId: 'G-EML270XP8E',
        clarityId: 'v6i879hm37'
    },

        brand: {
        name: 'Piyongo',
        author: 'Yusuf Kaya',
        piyongo: 'Piyongo',
        macenda: 'Macenda',
        benyusk: 'Benyusk'
    },

    // External Links
    links: {
        kofi: 'https://www.ko-fi.com/portavisa',
        calendly: 'https://www.calendly.com/portavisa/30min',
        portfolio: 'https://piyongo.com',
        github: 'https://github.com/macenda',
        twitter: '#'
    },

    // Navigation
    navigation: {
        homeUrl: 'index.html',
        indexUrl: 'index.html'
    },

    // Brand
    brand: {
        name: 'PIYONGO',
        tagline: 'Professional Micro-Tools',
        author: 'YUSUF KAYA',
        domain: 'piyongo.com'
    },

    // Localization
    i18n: {
        defaultLang: 'en',
        supportedLangs: ['en', 'tr'],
        fallbackLang: 'en'
    },

    // Feature Flags
    features: {
        analytics: true,
        cookieBanner: true,
        onboarding: true,
        usageTracking: true,
        languageSwitcher: true,
        consultingAvailable: true // Set to false when fully booked
    },

    // Cross-Promotion (Subtle)
    crossPromo: {
        enabled: true,
        text: {
            en: 'Explore other projects',
            tr: 'Diğer projelere göz at'
        },
        url: '#' // Update with your projects page URL
    }
};

// Export for module use or global
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CORE_CONFIG;
} else {
    window.CORE_CONFIG = CORE_CONFIG;
}