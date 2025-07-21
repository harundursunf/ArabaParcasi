import React from 'react';
import { Link } from 'react-router-dom';

// İkonlar için Yardımcı Bileşenler
const QualityIcon = () => <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>;
const ExpertIcon = () => <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>;
const SupportIcon = () => <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>;


function Hakkimizda() {
    const ekipUyeleri = [
        { ad: 'Ahmet Yılmaz', pozisyon: 'Kurucu & CEO', resim: 'https://via.placeholder.com/150' },
        { ad: 'Zeynep Kaya', pozisyon: 'Teknik Uzman & Satış', resim: 'https://via.placeholder.com/150' },
        { ad: 'Mehmet Öztürk', pozisyon: 'Operasyon Sorumlusu', resim: 'https://via.placeholder.com/150' },
    ];
    
  return (
    <div className="bg-white text-gray-800">
      
      {/* 1. BAŞLIK BÖLÜMÜ */}
      <header className="bg-gray-900 text-center py-16">
        <h1 className="text-4xl md:text-5xl font-black uppercase text-white tracking-wider">
          BİZ <span className="text-yellow-400">KİMİZ?</span>
        </h1>
        <p className="text-lg text-gray-300 mt-3">Lazer Teknolojisindeki Güvenilir Partneriniz</p>
      </header>

      {/* 2. HİKAYEMİZ BÖLÜMÜ */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900">Hikayemiz</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 mb-6"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
                LazerParça olarak, endüstriyel lazer sektöründeki uzun yıllara dayanan tecrübemizle, üreticilerin ve servis sağlayıcıların en büyük ihtiyacı olan kaliteli ve güvenilir yedek parça tedariğini sağlamak amacıyla yola çıktık. Teknolojinin hızla ilerlediği bu alanda, makinelerin duraksama lüksü olmadığını biliyoruz. Bu bilinçle, envanterimizi sürekli güncel tutarak ve sadece test edilmiş, yüksek standartlardaki ürünleri sunarak üretiminizin kesintisiz devam etmesini sağlıyoruz.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Misyonumuz, sadece bir parça tedarikçisi olmanın ötesine geçerek, teknik bilgimiz ve tecrübemizle müşterilerimize doğru parçayı seçme konusunda danışmanlık yapmak ve satış sonrası destekle yanlarında olmaktır.
            </p>
        </div>
      </section>

      {/* 3. DEĞERLERİMİZ BÖLÜMÜ */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-10 text-center">
                <div className="bg-white p-8 rounded-xl shadow-md">
                    <div className="flex justify-center mb-4"><QualityIcon /></div>
                    <h3 className="text-xl font-bold">Kalite Odaklıyız</h3>
                    <p className="text-gray-600 mt-2">Sattığımız her ürün, en yüksek kalite standartlarından geçer. Performans ve uzun ömür garantisi veriyoruz.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md">
                    <div className="flex justify-center mb-4"><ExpertIcon /></div>
                    <h3 className="text-xl font-bold">Uzman Kadro</h3>
                    <p className="text-gray-600 mt-2">Ekibimiz, lazer teknolojileri konusunda derin bilgiye sahip uzmanlardan oluşur. Doğru çözüm için buradayız.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md">
                    <div className="flex justify-center mb-4"><SupportIcon /></div>
                    <h3 className="text-xl font-bold">Müşteri Desteği</h3>
                    <p className="text-gray-600 mt-2">Satış öncesi ve sonrası, her sorunuzda ve ihtiyacınızda size bir telefon kadar yakınız.</p>
                </div>
            </div>
        </div>
      </section>

      {/* 4. EKİBİMİZLE TANIŞIN BÖLÜMÜ */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Ekibimizle Tanışın</h2>
        <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 mb-10"></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ekipUyeleri.map(uye => (
                <div key={uye.ad} className="bg-white rounded-xl shadow-lg p-6 group">
                    <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-200 group-hover:border-yellow-400 transition-all duration-300">
                        <img src={uye.resim} alt={uye.ad} className="object-cover w-full h-full" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold">{uye.ad}</h3>
                    <p className="text-yellow-500 font-semibold">{uye.pozisyon}</p>
                </div>
            ))}
        </div>
      </section>

      {/* 5. HAREKETE GEÇİRİCİ MESAJ (CTA) */}
      <section className="bg-yellow-400">
        <div className="container mx-auto px-6 py-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Üretiminize Güç Katmaya Hazır mısınız?</h2>
            <p className="text-gray-800 mt-2 max-w-2xl mx-auto">Geniş ürün yelpazemizi keşfedin veya ihtiyacınız olan özel parça için bizimle iletişime geçin.</p>
            <div className="mt-8 space-x-4">
                <Link to="/urunler" className="inline-block bg-gray-900 text-white font-bold py-3 px-8 rounded-full text-lg uppercase transition-transform transform hover:scale-105">
                    Ürünler
                </Link>
                <Link to="/iletisim" className="inline-block bg-white text-gray-900 font-bold py-3 px-8 rounded-full text-lg uppercase transition-transform transform hover:scale-105">
                    İletişim
                </Link>
            </div>
        </div>
      </section>

    </div>
  );
}

export default Hakkimizda;