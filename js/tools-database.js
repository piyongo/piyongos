// tools-database.js - CENTRALIZED TOOL REGISTRY v1.1

const TOOLS_DATABASE = [
    {
        id: 'portavisa',
        name: 'PORTAVISA.CORE',
        category: 'expat',
        status: 'ready',
        url: 'portavisa.html',
        description: {
            en: 'Essential guides and information for people moving to Portugal',
            tr: 'Portekiz\'e taşınanlar için temel rehberler ve bilgiler'
        },
        tags: ['portugal', 'visa', 'expat', 'guide'],
        featured: true,
        version: '2.0.0'
    },
    {
        id: 'character-counter',
        name: 'CHARACTER COUNTER',
        category: 'utilities',
        status: 'ready',
        url: 'tools/character-counter.html',
        description: {
            en: 'Minimalist character counter: Calculates the length of your text.',
            tr: 'Minimalist karakter sayici: Metninizin karakter uzunlugunu gosterir.'
        },
        tags: ['text', 'counter', 'minimalist', 'utilities' ],
        featured: true,
        version: '1.0.0'
    },
    {
        id: 'case-converter',
        name: 'CASE CONVERTER',
        category: 'utilities',
        status: 'ready',
        url: 'tools/case-converter.html',
        description: {
            en: 'Changes Cases',
            tr: 'Harfleri buyuk, kucuk yapar'
        },
        tags: ['case', 'converter', 'uppercase', 'text'],
        featured: true,
        version: '1.0.0'
    },
    {
        id: 'line-fixer',
        name: 'LINE FIXER',
        category: 'utilities',
        status: 'ready',
        url: 'tools/line-fixer.html',
        description: {
            en: 'Calculate your hourly rate based on experience and project scope',
            tr: 'Deneyim ve proje kapsamına göre saatlik ücretinizi hesaplayın'
        },
        tags: ['line', 'text', 'list'],
        featured: true,
        version: '1.0.0'
    },
    {
        id: 'character-refiner',
        name: 'CHARACTER REFINER',
        category: 'utilities',
        status: 'ready',
        url: 'tools/character-refiner.html',
        description: {
            en: 'Minimal pomodoro timer with work/break cycles',
            tr: 'Çalışma/mola döngülü minimal pomodoro zamanlayıcı'
        },
        tags: ['pomodoro', 'timer', 'focus', 'productivity'],
        featured: false,
        version: '1.0.0'
    },
    {
        id: 'lorem-ipsum-generator',
        name: 'LOREM IPSUM GENERATOR',
        category: 'utilities',
        status: 'ready',
        url: 'tools/lorem-ipsum-generator.html',
        description: {
            en: 'Calculate responsive grid layouts with gutters and columns',
            tr: 'Oluklar ve sütunlarla duyarlı grid düzenleri hesaplayın'
        },
        tags: ['lorem', 'generator', 'text'],
        featured: false,
        version: '1.0.0'
    },
    {
        id: 'style-remover',
        name: 'STYLE REMOVER',
        category: 'utilities',
        status: 'ready',
        url: 'tools/style-remover.html',
        description: {
            en: 'Convert text case and count characters for social media',
            tr: 'Metin durumunu dönüştür ve sosyal medya için karakter say'
        },
        tags: ['text', 'case', 'counter', 'social'],
        featured: false,
        version: '1.0.0'
    }
];

// Helper functions
const ToolsDB = {
    getAll: () => TOOLS_DATABASE,
    
    getById: (id) => TOOLS_DATABASE.find(tool => tool.id === id),
    
    getByCategory: (category) => {
        if (category === 'all') return TOOLS_DATABASE;
        return TOOLS_DATABASE.filter(tool => tool.category === category);
    },
    
    getReady: () => TOOLS_DATABASE.filter(tool => tool.status === 'ready'),
    
    getFeatured: () => TOOLS_DATABASE.filter(tool => tool.featured === true),
    
    getCategories: () => {
        const cats = [...new Set(TOOLS_DATABASE.map(tool => tool.category))];
        return ['all', ...cats];
    },
    
    search: (query) => {
        const q = query.toLowerCase();
        return TOOLS_DATABASE.filter(tool => 
            tool.name.toLowerCase().includes(q) ||
            tool.description.en.toLowerCase().includes(q) ||
            tool.description.tr.toLowerCase().includes(q) ||
            tool.tags.some(tag => tag.includes(q))
        );
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { TOOLS_DATABASE, ToolsDB };
} else {
    window.TOOLS_DATABASE = TOOLS_DATABASE;
    window.ToolsDB = ToolsDB;
}