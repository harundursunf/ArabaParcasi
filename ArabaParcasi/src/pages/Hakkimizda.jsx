import React, { useState, useEffect } from 'react'; // useState buraya eklendi
import { Link } from 'react-router-dom';
import { motion, useAnimation, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// İkonlar
const QualityIcon = () => <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>;
const ExpertIcon = () => <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>;
const SupportIcon = () => <svg className="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>;

// Yardımcı Bileşenler
const AnimatedSection = ({ children }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
    useEffect(() => {
        if (inView) { controls.start('visible'); }
    }, [controls, inView]);
    return (
        <motion.div ref={ref} animate={controls} initial="hidden" variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 50 }}} transition={{ duration: 0.8 }}>
            {children}
        </motion.div>
    );
};

// Sayıları canlandıran bileşen
const AnimatedCounter = ({ to, suffix }) => {
    const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (inView) {
            const animation = animate(0, to, {
                duration: 2,
                onUpdate: (latest) => {
                    setDisplayValue(Math.round(latest));
                }
            });
            return () => animation.stop();
        }
    }, [inView, to]);

    return (
        <div ref={ref} className="text-center">
            <span className="text-4xl md:text-5xl font-extrabold text-yellow-400">{displayValue}{suffix}</span>
        </div>
    );
};


function Hakkimizda() {
  return (
    <div className="bg-white text-gray-800">

      <header className="bg-gray-900 text-center py-20">
        <h1 className="text-4xl md:text-5xl font-black uppercase text-white tracking-wider">
          BİZ <span className="text-yellow-400">KİMİZ?</span>
        </h1>
        <p className="text-lg text-gray-300 mt-3">Lazer Teknolojisindeki Güvenilir Partneriniz</p>
      </header>

      <AnimatedSection>
        <section className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="prose prose-lg max-w-none text-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 !mb-4">Hikayemiz</h2>
              <p>
                LazerParça olarak, endüstriyel lazer sektöründeki uzun yıllara dayanan tecrübemizle, üreticilerin ve servis sağlayıcıların en büyük ihtiyacı olan kaliteli ve güvenilir yedek parça tedariğini sağlamak amacıyla yola çıktık. Teknolojinin hızla ilerlediği bu alanda, makinelerin duraksama lüksü olmadığını biliyoruz. 
              </p>
              <p>
                Bu bilinçle, envanterimizi sürekli güncel tutarak ve sadece test edilmiş, yüksek standartlardaki ürünleri sunarak üretiminizin kesintisiz devam etmesini sağlıyoruz. Misyonumuz, sadece bir parça tedarikçisi olmanın ötesine geçerek, teknik bilgimiz ve tecrübemizle müşterilerimize doğru parçayı seçme konusunda danışmanlık yapmak ve satış sonrası destekle yanlarında olmaktır.
              </p>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932" alt="Ekip Çalışması" className="rounded-xl shadow-2xl"/>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="bg-gray-900 py-16">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
                <div>
                    <AnimatedCounter to={15} suffix="+" />
                    <p className="mt-2 text-lg font-semibold text-gray-300">Yıllık Tecrübe</p>
                </div>
                <div>
                    <AnimatedCounter to={500} suffix="+" />
                    <p className="mt-2 text-lg font-semibold text-gray-300">Mutlu Müşteri</p>
                </div>
                <div>
                    <AnimatedCounter to={2000} suffix="+" />
                    <p className="mt-2 text-lg font-semibold text-gray-300">Stoktaki Ürün Çeşidi</p>
                </div>
            </div>
        </section>
      </AnimatedSection>
      
      <AnimatedSection>
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Değerlerimiz</h2>
                <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-10 text-center">
              <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="flex justify-center mb-4"><QualityIcon /></div>
                <h3 className="text-xl font-bold">Kalite Odaklıyız</h3>
                <p className="text-gray-600 mt-2">Sattığımız her ürün, en yüksek kalite standartlarından geçer. Performans ve uzun ömür garantisi veriyoruz.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="flex justify-center mb-4"><ExpertIcon /></div>
                <h3 className="text-xl font-bold">Uzman Kadro</h3>
                <p className="text-gray-600 mt-2">Ekibimiz, lazer teknolojileri konusunda derin bilgiye sahip uzmanlardan oluşur. Doğru çözüm için buradayız.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="flex justify-center mb-4"><SupportIcon /></div>
                <h3 className="text-xl font-bold">Müşteri Desteği</h3>
                <p className="text-gray-600 mt-2">Satış öncesi ve sonrası, her sorunuzda ve ihtiyacınızda size bir telefon kadar yakınız.</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}

export default Hakkimizda;