// src/data/blogData.js

// Tüm blog yazılarını buradan yöneteceğiz.
// export anahtar kelimesi, bu veriyi başka dosyalarda kullanabilmemizi sağlar.
export const tumYazilar = [
    { 
      id: 1,
      slug: 'lazer-nozzle-seciminin-puf-noktalari',
      baslik: 'Lazer Nozzle Seçiminin Püf Noktaları', 
      ozet: 'Kesim kalitenizi doğrudan etkileyen nozzle seçimi hakkında bilmeniz gereken her şey...', 
      resim: '/x1.avif', // Resim güncellendi
      kategori: 'Teknik Bilgi',
      tarih: '21 Temmuz 2025',
      icerik: `<p class="mb-4">Lazer kesim teknolojisinde nozzle, lazer ışınının iş parçasına odaklandığı son noktadır ve kesim kalitesi üzerinde devasa bir etkiye sahiptir. Doğru nozzle seçimi, sadece kesim kalitesini artırmakla kalmaz, aynı zamanda sarfiyatı azaltır ve makine ömrünü uzatır.</p><h3>Nozzle Çapının Önemi</h3><p>Nozzle çapı, kesilen malzemenin kalınlığına ve türüne göre değişiklik gösterir...</p>`
    },
    { 
      id: 2,
      slug: 'rezonator-bakimi-nasil-yapilir',
      baslik: 'Rezonatör Bakımı Nasıl Yapılır?', 
      ozet: 'Lazer makinenizin kalbi olan rezonatörlerin ömrünü uzatacak bakım ipuçları bu yazıda.', 
      resim: '/x1.avif', // Resim güncellendi
      kategori: 'Bakım',
      tarih: '20 Temmuz 2025',
      icerik: `<p>Rezonatörünüzün bakımı hakkında detaylı bilgiler... Periyodik bakım, beklenmedik arızaların önüne geçer ve üretim sürekliliğini sağlar.</p>`
    },
    { 
      id: 3,
      slug: 'chiller-arizalari-ve-cozumleri',
      baslik: 'Chiller Arızaları ve Çözümleri', 
      ozet: 'Üretiminizin durmasına neden olabilecek chiller arızalarını nasıl önleyebilirsiniz?', 
      resim: '/x1.avif', // Resim güncellendi
      kategori: 'Arıza Çözümleri',
      tarih: '19 Temmuz 2025',
      icerik: `<p>Chiller (soğutucu) ünitelerinde sıkça karşılaşılan su basıncı hataları, soğutma yetersizliği gibi sorunlar ve pratik çözüm önerileri bu yazıda.</p>`
    },
    { 
      id: 4,
      slug: 'fiber-lazer-teknolojisindeki-son-gelismeler',
      baslik: 'Fiber Lazer Teknolojisindeki Son Gelişmeler', 
      ozet: '2025 yılına damgasını vuran yeni nesil fiber lazer teknolojilerini ve getirdiği avantajları inceliyoruz.', 
      resim: '/x1.avif', // Resim güncellendi
      kategori: 'Sektörel Haberler',
      tarih: '18 Temmuz 2025',
      icerik: `<p>Artan güç verimliliği, daha hassas kesim kabiliyetleri ve akıllı otomasyon sistemleri ile fiber lazer teknolojisinin geleceğine bir bakış.</p>`
    },
    { 
      id: 5,
      slug: 'dogru-odak-lensi-nasil-secilir',
      baslik: 'Doğru Odak Lensi Nasıl Seçilir?', 
      ozet: 'Malzeme tipine ve kalınlığına göre en uygun odak lensini seçerek kesim verimliliğinizi artırın.', 
      resim: '/x1.avif', // Resim güncellendi
      kategori: 'Teknik Bilgi',
      tarih: '17 Temmuz 2025',
      icerik: `<p>Odak uzaklığı (fokal uzunluk), kesim kalitesini belirleyen en kritik parametrelerden biridir. Bu yazıda doğru seçimin nasıl yapılacağını anlatıyoruz.</p>`
    },
    { 
      id: 6,
      slug: 'operatorler-icin-is-guvenligi-onlemleri',
      baslik: 'Operatörler İçin İş Güvenliği Önlemleri', 
      ozet: 'Lazer kesim operatörlerinin bilmesi gereken temel iş güvenliği kuralları ve ekipmanları.', 
      resim: '/x1.avif', // Resim güncellendi
      kategori: 'Güvenlik',
      tarih: '16 Temmuz 2025',
      icerik: `<p>Lazer ışınına maruz kalma riskleri, doğru koruyucu gözlük kullanımı ve makine çevresinde alınması gereken önlemler hakkında kapsamlı bir rehber.</p>`
    }
];