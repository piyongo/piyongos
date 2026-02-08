/* js/translations.js - V17.0 (Full & Complete) */

const TRANSLATIONS = {
    // ============================================
    // 1. GENEL METİNLER (Header, Footer, Meta)
    // ============================================
    common: {
        en: {
            index: 'INDEX',
            tools: 'TOOLS',
            guides: 'GUIDES',
            about: 'About',
            contact: 'Contact',
            buyMeACoffee: 'Buy Me A Coffee',
            footer_desc: 'Detailed guides, calculators, smart tools. All in one place. Completely free, an open resource for everyone.',
            
            // UX DECISION: Shortened for Mobile Fit
            search_placeholder: 'Search', 
            
            no_results: 'NO DATA FOUND',
            lang_en: 'English', lang_tr: 'Türkçe', lang_pt: 'Português',
            footer_about: 'About', 
            footer_contact: 'Contact'
        },
        tr: {
            index: 'ANASAYFA',
            tools: 'ARAÇLAR',
            guides: 'REHBERLER',
            about: 'Hakkımda',
            contact: 'İletişim',
            buyMeACoffee: 'Kahve Ismarla',
            footer_desc: 'Kapsamlı rehberler, hesaplayıcılar ve akıllı araçlar. Hepsi bir arada. Tamamen ücretsiz, herkese açık bir kaynak.',
            
            // UX DECISION: Shortened for Mobile Fit
            search_placeholder: 'Ara',
            
            no_results: 'SONUÇ BULUNAMADI',
            lang_en: 'English', lang_tr: 'Türkçe', lang_pt: 'Português',
            footer_about: 'Hakkımda', 
            footer_contact: 'İletişim'
        },
        pt: {
            index: 'INÍCIO',
            tools: 'FERRAMENTA',
            guides: 'GUIAS',
            about: 'Sobre',
            contact: 'Contato',
            buyMeACoffee: 'Pague Um Bica',
            footer_desc: 'Guias detalhados e ferramentas inteligentes. Tudo num só lugar. Totalmente gratuito, um recurso aberto para todos.',
            
            // UX DECISION: Shortened for Mobile Fit
            search_placeholder: 'Pesquisar',
            
            no_results: 'NENHUM DADO ENCONTRADO',
            lang_en: 'English', lang_tr: 'Türkçe', lang_pt: 'Português',
            footer_about: 'SOBRE', 
            footer_contact: 'CONTATO'
        }
    },

    // ============================================
    // 2. UI ARAYÜZÜ (Filtreler, Butonlar, Uyarılar)
    // ============================================
    ui: {
        en: {
            // FİLTRELER
            tag_ALL: 'ALL', 
            tag_FAVS: 'MY FAVS', 
            tag_TEXT: 'TEXT', 
            tag_FORMAT: 'FORMAT', 
            tag_GENERATE: 'GENERATE', 
            tag_PRODUCT: 'PRODUCT',

            // GENEL UI
            input_label: 'WORKSPACE',
            input_placeholder: 'Type or paste content here...',
            result_label: 'RESULTS',
            btn_clear: 'CLEAR',
            btn_copy: 'COPY RESULT',
            msg_copied: 'COPIED!',
            req_link: 'Need a specific tool?',
            
            // Tool Etiketleri
            lbl_chars: 'CHARACTERS', 
            lbl_words: 'WORDS', 
            lbl_sentences: 'SENTENCES', 
            lbl_paragraphs: 'PARAGRAPHS',
            
            // İşlem Butonları (Tüm Araçlar İçin)
            btn_process: 'PROCESS',
            btn_upper: 'UPPERCASE', 
            btn_lower: 'LOWERCASE', 
            btn_sentence: 'SENTENCE CASE',
            btn_capital: 'CAPITALIZED CASE',
            btn_alternating: 'ALTERNATING CASE',
            btn_title: 'TITLE CASE',
            btn_inverse: 'INVERSE CASE',
            btn_download: 'DOWNLOAD',
            
            btn_to_commas: 'LINES → COMMAS', 
            btn_to_lines: 'COMMAS → LINES',
            btn_fix_spaces: 'FIX SPACES', 
            btn_rem_lines: 'REMOVE EMPTY LINES',
            btn_add_para: 'ADD PARAGRAPH', 
            btn_add_sent: 'ADD SENTENCE',
            btn_strip: 'CLEAR HTML/STYLE',
            
            // Lorem Ipsum
            lbl_count: 'Count',
            opt_paras: 'Paragraphs',
            opt_words: 'Words',
            opt_bytes: 'Bytes',
            opt_lists: 'Lists',
            btn_generate: 'GENERATE',
            
            // PortaVisa
            pv_calc_title: 'Schengen Calculator',
            pv_calc_desc: 'Calculate your remaining days.'
        },
        tr: {
            // FİLTRELER
            tag_ALL: 'TÜMÜ', 
            tag_FAVS: 'FAVORİLERİM', 
            tag_TEXT: 'METİN', 
            tag_FORMAT: 'FORMAT', 
            tag_GENERATE: 'ÜRET', 
            tag_PRODUCT: 'ÜRÜN',

            // GENEL UI
            input_label: 'ÇALIŞMA ALANI',
            input_placeholder: 'İçeriği buraya yazın veya yapıştırın...',
            result_label: 'SONUÇLAR',
            btn_clear: 'TEMİZLE',
            btn_copy: 'KOPYALA',
            msg_copied: 'KOPYALANDI!',
            req_link: 'Özel bir araca mı ihtiyacın var?',
            
            // Tool Etiketleri
            lbl_chars: 'KARAKTER', 
            lbl_words: 'KELİME', 
            lbl_sentences: 'CÜMLE', 
            lbl_paragraphs: 'PARAGRAF',
            
            // İşlem Butonları
            btn_process: 'İŞLE',
            btn_upper: 'BÜYÜK HARF', 
            btn_lower: 'KÜÇÜK HARF', 
            btn_sentence: 'CÜMLE DÜZENİ',
            btn_capital: 'BAŞ HARFLER BÜYÜK',
            btn_alternating: 'deĞiŞkEn hArF',
            btn_title: 'BAŞLIK DÜZENİ',
            btn_inverse: 'tERSİNE çEVİR',
            btn_download: 'İNDİR',
            
            btn_to_commas: 'SATIRLAR → VİRGÜLLER', 
            btn_to_lines: 'VİRGÜLLER → SATIRLAR',
            btn_fix_spaces: 'BOŞLUKLARI DÜZELT', 
            btn_rem_lines: 'BOŞ SATIRLARI KALDIR',
            btn_add_para: 'PARAGRAF EKLE', 
            btn_add_sent: 'CÜMLE EKLE',
            btn_strip: 'HTML/STIL TEMİZLE',
            
            // Lorem Ipsum
            lbl_count: 'Miktar',
            opt_paras: 'Paragraf',
            opt_words: 'Kelime',
            opt_bytes: 'Bayt',
            opt_lists: 'Liste',
            btn_generate: 'OLUŞTUR',
            
            // PortaVisa
            pv_calc_title: 'Schengen Hesaplayıcı',
            pv_calc_desc: 'Kalan günlerinizi hesaplayın.'
        },
        pt: {
            // FİLTRELER
            tag_ALL: 'TODOS', 
            tag_FAVS: 'MEUS FAVORITOS', 
            tag_TEXT: 'TEXTO', 
            tag_FORMAT: 'FORMATO', 
            tag_GENERATE: 'GERAR', 
            tag_PRODUCT: 'PRODUTO',

            // GENEL UI
            input_label: 'ÁREA DE TRABALHO',
            input_placeholder: 'Digite ou cole o conteúdo aqui...',
            result_label: 'RESULTADOS',
            btn_clear: 'LIMPAR',
            btn_copy: 'COPIAR',
            msg_copied: 'COPIADO!',
            req_link: 'Precisa de uma ferramenta específica?',
            
            // Tool Etiketleri
            lbl_chars: 'CARACTERES', 
            lbl_words: 'PALAVRAS', 
            lbl_sentences: 'FRASES', 
            lbl_paragraphs: 'PARÁGRAFOS',
            
            // İşlem Butonları
            btn_process: 'PROCESSAR',
            btn_upper: 'MAIÚSCULAS', 
            btn_lower: 'MINÚSCULAS', 
            btn_sentence: 'FRASE',
            btn_capital: 'CAPITALIZADA',
            btn_alternating: 'ALTERNADO',
            btn_title: 'TÍTULO',
            btn_inverse: 'INVERSO',
            btn_download: 'BAIXAR',
            
            btn_to_commas: 'LINHAS → VÍRGULAS', 
            btn_to_lines: 'VÍRGULAS → LINHAS',
            btn_fix_spaces: 'CORRIGIR ESPAÇOS', 
            btn_rem_lines: 'REMOVER LINHAS VAZIAS',
            btn_add_para: 'ADICIONAR PARÁGRAFO', 
            btn_add_sent: 'ADICIONAR FRASE',
            btn_strip: 'REMOVER HTML/FORMATAÇÃO',
            
            // Lorem Ipsum
            lbl_count: 'Quantidade',
            opt_paras: 'Parágrafos',
            opt_words: 'Palavras',
            opt_bytes: 'Bytes',
            opt_lists: 'Listas',
            btn_generate: 'GERAR',
            
            // PortaVisa
            pv_calc_title: 'Calculadora Schengen',
            pv_calc_desc: 'Calcule seus dias restantes.'
        }
    },

    // ============================================
    // 3. ARAÇ İSİMLERİ & AÇIKLAMALARI (TÜM ARAÇLAR)
    // ============================================
    tools: {
        en: {
            char_title: 'Character Counter', char_desc: 'Calculates characters, words, lines and density.',
            case_title: 'Case Converter', case_desc: 'Changes text to uppercase or lowercase instantly.',
            line_title: 'List Fixer', line_desc: 'Converts lines to commas, and commas to lines.',
            clean_title: 'Text Cleaner', clean_desc: 'Removes empty lines and extra spaces from text.',
            lorem_title: 'Lorem Ipsum', lorem_desc: 'Generates dummy text for designs and projects.',
            style_title: 'Style Remover', style_desc: 'Clears bold, italic and other styles from text.',
            portavisa_title: 'Porta Visa', portavisa_desc: 'Complete migration and visa guide for Portugal.'
        },
        tr: {
            char_title: 'Karakter Sayıcı', char_desc: 'Metindeki harf, kelime ve satırları anında sayar.',
            case_title: 'Büyük/Küçük Harf', case_desc: 'Metni büyük veya küçük harfe hızlıca çevirir.',
            line_title: 'Liste Düzenleyici', line_desc: 'Satırları virgüle, virgülleri satıra dönüştürür.',
            clean_title: 'Metin Temizleyici', clean_desc: 'Gereksiz boş satırları ve fazla boşlukları siler.',
            lorem_title: 'Lorem Ipsum', lorem_desc: 'Tasarımlarınız için anlamsız dolgu metni üretir.',
            style_title: 'Stil Temizleyici', style_desc: 'Yazıdaki kalın, italik gibi biçimlendirmeleri kaldırır.',
            portavisa_title: 'Porta Visa', portavisa_desc: 'Portekiz için kapsamlı vize ve göçmenlik rehberi.'
        },
        pt: {
            char_title: 'Contador de Caracteres', char_desc: 'Conta letras, palavras e linhas instantaneamente.',
            case_title: 'Conversor de Caso', case_desc: 'Altera o texto para maiúsculas ou minúsculas.',
            line_title: 'Corretor de Lista', line_desc: 'Converte linhas em vírgulas e vírgulas em linhas.',
            clean_title: 'Limpador de Texto', clean_desc: 'Remove linhas vazias e espaços extras do texto.',
            lorem_title: 'Lorem Ipsum', lorem_desc: 'Gera texto fictício para designs e projetos.',
            style_title: 'Removedor de Estilo', style_desc: 'Limpa negrito, itálico e outros estilos do texto.',
            portavisa_title: 'Porta Visa', portavisa_desc: 'Guia completo de migração e vistos para Portugal.'
        }
    }
};

function t(section, key, lang) {
    if (!lang) {
        const urlParams = new URLSearchParams(window.location.search);
        lang = urlParams.get('lang') || localStorage.getItem('userLang') || 'en';
    }
    try {
        if (TRANSLATIONS[section] && TRANSLATIONS[section][lang] && TRANSLATIONS[section][lang][key]) return TRANSLATIONS[section][lang][key];
        if (TRANSLATIONS[section] && TRANSLATIONS[section]['en'] && TRANSLATIONS[section]['en'][key]) return TRANSLATIONS[section]['en'][key];
        return key; 
    } catch (e) { return key; }
}