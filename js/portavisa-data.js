// portavisa-data.js - PORTAVISA CONTENT DATABASE v1.0

const PORTAVISA_CONTENT = [
    {
        id: 1,
        category: { en: 'Legal', tr: 'Hukuki' },
        tags: { en: ['nif', 'tax', 'documents'], tr: ['nif', 'vergi', 'belgeler'] },
        title_en: 'Getting a NIF Number',
        title_tr: 'NIF Numarası Almak', 
        content_en: `
            <p class="mb-4">A NIF (Número de Identificação Fiscal) is your Portuguese tax identification number. You need it for almost everything.</p>
            <p class="mb-4"><strong>Where to get it:</strong><br>Visit any Finanças office or Loja do Cidadão with your passport.</p>
            <p class="mb-4"><strong>Documents needed:</strong></p>
            <ul class="list-disc pl-6 mb-4 space-y-1">
                <li>Valid passport</li>
                <li>Proof of address (rental contract or utility bill)</li>
            </ul>
            <p><strong>Cost:</strong> Free<br><strong>Processing time:</strong> Same day</p>
        `,
        content_tr: `
            <p class="mb-4">NIF (Número de Identificação Fiscal), Portekiz vergi kimlik numaranızdır. Neredeyse her şey için gereklidir.</p>
            <p class="mb-4"><strong>Nereden alınır:</strong><br>Pasaportunuzla herhangi bir Finanças ofisi veya Loja do Cidadão'ya gidin.</p>
            <p class="mb-4"><strong>Gerekli belgeler:</strong></p>
            <ul class="list-disc pl-6 mb-4 space-y-1">
                <li>Geçerli pasaport</li>
                <li>Adres kanıtı (kira sözleşmesi veya fatura)</li>
            </ul>
            <p><strong>Maliyet:</strong> Ücretsiz<br><strong>İşlem süresi:</strong> Aynı gün</p>
        `
    },
    {
        id: 2,
        category: { en: 'Banking', tr: 'Bankacılık' },
        tags: { en: ['bank', 'account', 'iban'], tr: ['banka', 'hesap', 'iban'] },
        title_en: 'Opening a Bank Account',
        title_tr: 'Banka Hesabı Açmak',
        content_en: `
            <p class="mb-4">You'll need a Portuguese bank account for rent, bills, and receiving payments.</p>
            <p class="mb-4"><strong>Recommended banks:</strong></p>
            <ul class="list-disc pl-6 mb-4 space-y-1">
                <li>Millennium BCP</li>
                <li>Caixa Geral de Depósitos</li>
                <li>Activobank (online)</li>
            </ul>
            <p class="mb-4"><strong>Required documents:</strong></p>
            <ul class="list-disc pl-6 mb-4 space-y-1">
                <li>Valid passport</li>
                <li>NIF number</li>
                <li>Proof of address</li>
                <li>Employment contract or proof of income</li>
            </ul>
            <p><strong>Tip:</strong> Some banks require a minimum deposit (€50-€100).</p>
        `,
        content_tr: `
            <p class="mb-4">Kira, faturalar ve ödeme almak için Portekiz banka hesabına ihtiyacınız olacak.</p>
            <p class="mb-4"><strong>Önerilen bankalar:</strong></p>
            <ul class="list-disc pl-6 mb-4 space-y-1">
                <li>Millennium BCP</li>
                <li>Caixa Geral de Depósitos</li>
                <li>Activobank (online)</li>
            </ul>
            <p class="mb-4"><strong>Gerekli belgeler:</strong></p>
            <ul class="list-disc pl-6 mb-4 space-y-1">
                <li>Geçerli pasaport</li>
                <li>NIF numarası</li>
                <li>Adres kanıtı</li>
                <li>İş sözleşmesi veya gelir belgesi</li>
            </ul>
            <p><strong>İpucu:</strong> Bazı bankalar minimum depozito gerektirir (€50-€100).</p>
        `
    },
    {
        id: 3,
        category: { en: 'Housing', tr: 'Konut' },
        tags: { en: ['rent', 'apartment', 'contract'], tr: ['kira', 'daire', 'sözleşme'] },
        title_en: 'Finding an Apartment',
        title_tr: 'Daire Bulmak',
        content_en: `
            <p class="mb-4">The rental market in Lisbon and Porto is competitive. Start your search early.</p>
            <p class="mb-4"><strong>Popular platforms:</strong></p>
            <ul class="list-disc pl-6 mb-4 space-y-1">
                <li>Idealista.pt</li>
                <li>Imovirtual.com</li>
                <li>OLX.pt</li>
            </ul>
            <p class="mb-4"><strong>Average costs (Lisbon):</strong></p>
            <ul class="list-disc pl-6 mb-4 space-y-1">
                <li>Studio: €800-€1,200</li>
                <li>1-bedroom: €1,000-€1,500</li>
                <li>2-bedroom: €1,500-€2,500</li>
            </ul>
            <p><strong>Warning:</strong> Beware of scams. Never transfer money before seeing the property.</p>
        `,
        content_tr: `
            <p class="mb-4">Lizbon ve Porto'daki kiralık piyasası rekabetçidir. Aramanıza erken başlayın.</p>
            <p class="mb-4"><strong>Popüler platformlar:</strong></p>
            <ul class="list-disc pl-6 mb-4 space-y-1">
                <li>Idealista.pt</li>
                <li>Imovirtual.com</li>
                <li>OLX.pt</li>
            </ul>
            <p class="mb-4"><strong>Ortalama maliyetler (Lizbon):</strong></p>
            <ul class="list-disc pl-6 mb-4 space-y-1">
                <li>Stüdyo: €800-€1,200</li>
                <li>1 oda: €1,000-€1,500</li>
                <li>2 oda: €1,500-€2,500</li>
            </ul>
            <p><strong>Uyarı:</strong> Dolandırıcılıklara dikkat edin. Evi görmeden asla para göndermeyin.</p>
        `
    }

,{
    id: 1,
    category: { en: 'Business', tr: 'İş Dünyası' },
    tags: { en: ['business', 'accountant', 'tax', 'social security'], tr: ['iş', 'muhasebeci', 'vergi', 'sosyal güvenlik'] },
    title_en: 'Do you need an accountant?',
    title_tr: 'Muhasebeciye ihtiyacınız var mı?',
    content_en: `
                    <p class="mb-4">You do not need an accountant if you are self-employed. But limited companies must hire one by law. This service costs around 150 euros per month. You must pay social security in both cases.</p>
                `,
    content_tr: `
                    <p class="mb-4">Serbest meslek sahibiyseniz muhasebeciye ihtiyacınız yoktur. Ancak limited şirketler kanunen bir muhasebeci tutmalıdır. Bu hizmet aylık yaklaşık 150 Euro tutar. Her iki durumda da sosyal güvenlik primi ödemelisiniz.</p>
                `
},

    // ============================================
    // YENİ İÇERİKLER BURAYA EKLENİR
    // Content generator'dan kopyala-yapıştır
    // ============================================
];

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PORTAVISA_CONTENT;
} else {
    window.PORTAVISA_CONTENT = PORTAVISA_CONTENT;
}