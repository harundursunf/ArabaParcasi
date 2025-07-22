// src/data/homePageData.js
export const sliderData = [
    {
        title: 'GÜÇ. PERFORMANS. KESİNLİK.',
        subtitle: 'Endüstriyel lazer makineniz için en kaliteli parçalarla üretiminizi bir üst seviyeye taşıyın.',
        buttonText: 'Şimdi Keşfet',
        buttonLink: '/urunler',
        image: '/silder1.png' // <-- DEĞİŞTİRİLDİ
    },
    {
        title: 'TÜM YEDEK PARÇALAR TEK ADRESTE',
        subtitle: 'Geniş stok ağımız ile aradığınız tüm nozzle, lens ve seramik çeşitleri anında kargoda.',
        buttonText: 'Ürünleri İncele',
        buttonLink: '/urunler',
        image: '/slider6.png' // <-- DEĞİŞTİRİLDİ
    },
    {
        title: '7/24 TEKNİK DESTEK',
        subtitle: 'Sadece parça satmıyoruz, aynı zamanda tecrübemizle her an yanınızdayız.',
        buttonText: 'Bize Ulaşın',
        buttonLink: '/iletisim',
        image: '/slider3.png' // <-- DEĞİŞTİRİLDİ
    }
];


// Hızlı Erişim Menüsü için veriler (Trendyol'daki gibi yuvarlak ikonlar)
export const hizliErisim = [
    { ad: 'Sana Özel', icon: '⭐', link: '#' },
    { ad: 'Flaş Ürünler', icon: '⚡', link: '#' },
    { ad: 'Yeni Gelenler', icon: '📦', link: '#' },
    { ad: 'Markalar', icon: '🏷️', link: '#' },
    { ad: 'Çok Satanlar', icon: '🔥', link: '#' },
    { ad: 'Teklif Al', icon: '💬', link: '/iletisim' },
];

// src/data/homePageData.js

// ... other data arrays ...

// PROMOSYON BANNERLARI İÇİN YENİ VERİ YAPISI
export const promoBannerlar = [
    { 
        resim: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070', 
        link: '#',
        kategori: 'Tüm Nozzle Çeşitleri',
        baslik: '%30\'a Varan Sezon İndirimleri',
        buttonText: 'Fırsatları Keşfet'
    },
    { 
        resim: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070', 
        link: '#',
        kategori: 'Kesim Kafaları',
        baslik: 'Yeni Nesil Raytools® Serisi Stoklarda',
        buttonText: 'Hemen İncele'
    },
];

// ... other data arrays ...


// Farklı karuseller için ürün listeleri (rating ve reviews kaldırıldı, resim güncellendi)
export const enCokSatanlar = [
    { id: 2, ad: 'Raytools® Lazer Kesim Kafası', fiyat: '150.000 TL', resim: '/x1.png' },
    { id: 7, ad: 'Precitec® Koruyucu Seramik', fiyat: '1.200 TL', resim: '/x1.png' },
    { id: 4, ad: 'CypCut Kontrol Kartı', fiyat: '35.000 TL', resim: '/x1.png' },
    { id: 5, ad: 'ZnSe Odak Lensi (20mm)', fiyat: '3.500 TL', resim: '/x1.png' },
    { id: 9, ad: 'Çift Katmanlı Nozzle 3.0mm', fiyat: '550 TL', resim: '/x1.png' },
];

export const flasIndirimler = [
    { id: 11, ad: 'Koruyucu Cam (Quartz)', fiyat: '900 TL', eskiFiyat: '1.150 TL', resim: '/x1.png' },
    { id: 3, ad: 'Tek Katmanlı Nozzle 1.2mm', fiyat: '450 TL', eskiFiyat: '600 TL', resim: '/x1.png' },
    { id: 1, ad: 'Endüstriyel Su Soğutucu', fiyat: '85.000 TL', eskiFiyat: '92.500 TL', resim: '/x1.png' },
    { id: 6, ad: 'Maxphotonics® 2kW Rezonatör', fiyat: '350.000 TL', eskiFiyat: '375.000 TL', resim: '/x1.png' },
];

// Blog ve Markalar verisi
export const blogYazilari = [
    { slug: 'lazer-nozzle-seciminin-puf-noktalari', baslik: 'Lazer Nozzle Seçiminin Püf Noktaları', ozet: 'Kesim kalitenizi doğrudan etkileyen nozzle seçimi hakkında bilmeniz gereken her şey...', resim: '/x3.png' },
    { slug: 'rezonator-bakimi-nasil-yapilir', baslik: 'Rezonatör Bakımı Nasıl Yapılır?', ozet: 'Lazer makinenizin kalbi olan rezonatörlerin ömrünü uzatacak bakım ipuçları bu yazıda.', resim: '/x3.png' },
    { slug: 'chiller-arizalari-ve-cozumleri', baslik: 'Chiller Arızaları ve Çözümleri', ozet: 'Üretiminizin durmasına neden olabilecek chiller arızalarını nasıl önleyebilirsiniz?', resim: '/x3.png' }
];
export const markalar = ["Raytools", "CypCut", "Maxphotonics", "IPG", "Precitec", "WSX"];