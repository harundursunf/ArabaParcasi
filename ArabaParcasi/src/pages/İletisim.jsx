import React from 'react';

// İkonlar
const LocationIcon = () => <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>;
const PhoneIcon = () => <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>;
const MailIcon = () => <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>;

function Iletisim() {
  const faqs = [
    { q: 'Siparişimi nasıl takip edebilirim?', a: 'Siparişiniz kargoya verildikten sonra size e-posta yoluyla bir takip numarası gönderilecektir. Bu numara ile kargo firmasının web sitesinden takip yapabilirsiniz.' },
    { q: 'Teknik destek veriyor musunuz?', a: 'Evet, sattığımız tüm ürünler için kurulum ve kullanım sırasında teknik destek hizmeti sunuyoruz. Bizimle telefon veya e-posta yoluyla iletişime geçebilirsiniz.' },
    { q: 'Ürün iade koşulları nelerdir?', a: 'Kullanılmamış ve ambalajı bozulmamış ürünleri, fatura tarihinden itibaren 14 gün içinde koşulsuz olarak iade edebilirsiniz. Detaylı bilgi için iade politikamızı inceleyebilirsiniz.' },
    { q: 'Aradığım parçayı sitenizde bulamadım, ne yapmalıyım?', a: 'Stoklarımız sürekli güncellenmektedir. Aradığınız özel bir parça varsa, lütfen bizimle iletişime geçin. Sizin için tedarik etmeye çalışabiliriz.' }
  ];

  return (
    <div className="bg-gray-50">
      {/* BAŞLIK BÖLÜMÜ */}
      <header className="bg-gray-900 text-center py-16">
        <h1 className="text-4xl md:text-5xl font-black uppercase text-white tracking-wider">
          BİZE <span className="text-yellow-400">ULAŞIN</span>
        </h1>
        <p className="text-lg text-gray-300 mt-3">Sorularınız, talepleriniz veya teklif istekleriniz için buradayız.</p>
      </header>

      {/* ANA İÇERİK: BİLGİLER + FORM */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* SOL TARAF: İLETİŞİM BİLGİLERİ VE HARİTA */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">İletişim Bilgileri</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-3 rounded-full"><LocationIcon /></div>
                <div>
                  <h3 className="text-lg font-semibold">Adres</h3>
                  <p className="text-gray-600">Örnek Mah. Teknoloji Cad. No:123, 34750 Ataşehir/İstanbul</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-3 rounded-full"><PhoneIcon /></div>
                <div>
                  <h3 className="text-lg font-semibold">Telefon</h3>
                  <p className="text-gray-600">+90 (216) 123 45 67</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-3 rounded-full"><MailIcon /></div>
                <div>
                  <h3 className="text-lg font-semibold">E-Posta</h3>
                  <p className="text-gray-600">info@lazerparca.com.tr</p>
                </div>
              </div>
            </div>
            {/* HARİTA */}
            <div className="mt-10 rounded-xl overflow-hidden shadow-lg">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.052822703893!2d29.123456!3d40.999876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2zNDDCsDU5JzU5LjYiTiAyOcKwMDcnMjQuNCJF!5e0!3m2!1str!2str!4v1626857890123!5m2!1str!2str" 
                    width="100%" 
                    height="300" 
                    style={{ border:0 }} 
                    allowFullScreen="" 
                    loading="lazy"
                    title="Konumumuz">
                </iframe>
            </div>
          </div>

          {/* SAĞ TARAF: İLETİŞİM FORMU */}
          <div className="lg:col-span-3 bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Mesaj Gönderin</h2>
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="font-semibold text-gray-700">Adınız Soyadınız</label>
                <input type="text" id="name" name="name" className="mt-2 w-full px-4 py-3 bg-gray-100 rounded-lg border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
              </div>
              <div>
                <label htmlFor="email" className="font-semibold text-gray-700">E-posta Adresiniz</label>
                <input type="email" id="email" name="email" className="mt-2 w-full px-4 py-3 bg-gray-100 rounded-lg border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
              </div>
              <div>
                <label htmlFor="subject" className="font-semibold text-gray-700">Konu</label>
                <input type="text" id="subject" name="subject" className="mt-2 w-full px-4 py-3 bg-gray-100 rounded-lg border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
              </div>
              <div>
                <label htmlFor="message" className="font-semibold text-gray-700">Mesajınız</label>
                <textarea id="message" name="message" rows="5" className="mt-2 w-full px-4 py-3 bg-gray-100 rounded-lg border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400" required></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-lg text-lg uppercase transition-transform transform hover:scale-105 hover:shadow-lg">
                  Gönder
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* SIKÇA SORULAN SORULAR (SSS) */}
      <section className="bg-white py-16">
          <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl font-bold text-gray-900">Sıkça Sorulan Sorular</h2>
                  <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 mb-10"></div>
              </div>
              <div className="max-w-4xl mx-auto space-y-4">
                  {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-4">
                          <h3 className="text-lg font-semibold text-gray-800">{faq.q}</h3>
                          <p className="mt-1 text-gray-600">{faq.a}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>
    </div>
  );
}

export default Iletisim;