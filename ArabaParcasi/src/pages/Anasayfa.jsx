import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { sliderData, hizliErisim, promoBannerlar, enCokSatanlar, flasIndirimler, blogYazilari, markalar } from '../data/homePageData';
import { useCart } from '../context/CartContext';

// --- YARDIMCI BİLEŞENLER ---
const CartIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>;

const AnimatedSection = ({ children, className }) => {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
    const animation = useAnimation();
    React.useEffect(() => { if(inView) { animation.start('visible'); } }, [inView, animation]);
    return ( <motion.div ref={ref} initial="hidden" animate={animation} variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 20 }}} transition={{ duration: 0.6 }} className={className}>{children}</motion.div> );
};

const SectionHeader = ({ title, linkText, linkTo }) => (
    <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">{title}</h2>
        {linkText && <Link to={linkTo} className="text-sm font-semibold text-amber-600 hover:text-amber-700"> {linkText} → </Link>}
    </div>
);

const ProductCarousel = ({ title, linkText, linkTo, products }) => {
    const { addToCart } = useCart();
    const settings = { 
        dots: true, 
        infinite: false, 
        speed: 500, 
        slidesToShow: 4, 
        slidesToScroll: 2, 
        arrows: false,
        responsive: [ 
            { breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 2 } }, 
            { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1.5, slidesToScroll: 1 } }
        ] 
    };
    
    return (
        <AnimatedSection className="container mx-auto px-4 py-8 md:py-12">
            <SectionHeader title={title} linkText={linkText} linkTo={linkTo} />
            <Slider {...settings} className="-mx-2">
                {products.map(product => (
                    <div key={product.id} className="px-2">
                        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden group relative">
                            <Link to="#">
                                <img src={product.resim} alt={product.ad} className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity duration-300" />
                            </Link>
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
                                <button onClick={() => addToCart(product)} className="bg-white text-gray-900 font-bold py-2 px-4 rounded-full text-sm flex items-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 cursor-pointer"> 
                                    <CartIcon /> <span className="ml-2">Sepete Ekle</span> 
                                </button>
                            </div>
                            <div className="p-4">
                                <h3 className="text-sm font-semibold text-gray-800 truncate h-10">{product.ad}</h3>
                                <div className="mt-2">
                                    <span className="text-lg font-bold text-amber-600">{product.fiyat}</span>
                                    {product.eskiFiyat && <span className="text-sm text-gray-500 line-through ml-2">{product.eskiFiyat}</span>}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </AnimatedSection>
    );
};

// --- ANA SAYFA BİLEŞENİ ---
function Anasayfa() {
    const mainSliderSettings = { dots: true, infinite: true, speed: 800, slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 6000, fade: true, cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', arrows: false, appendDots: dots => ( <div style={{ bottom: '30px' }}><ul style={{ margin: "0px" }}>{dots}</ul></div> ) };

    return (
        <div className="bg-gray-50">
            {/* 1. HERO SLIDER */}
            <section className="relative h-[50vh] md:h-[65vh] min-h-[400px] w-full overflow-hidden">
                <Slider {...mainSliderSettings}>
                    {sliderData.map(slide => (
                         <div key={slide.title} className="relative h-[50vh] md:h-[65vh] min-h-[400px]">
                            <div className="absolute inset-0 bg-cover bg-center ken-burns-bg" style={{ backgroundImage: `url('${slide.image}')` }}></div>
                            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                            <div className="relative h-full flex flex-col justify-center items-center text-center text-white p-4 z-10">
                                <motion.h1 initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.8, delay:0.2}} className="text-3xl md:text-6xl font-black uppercase tracking-wider">{slide.title}</motion.h1>
                                <motion.p initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.8, delay:0.4}} className="mt-4 max-w-2xl text-base md:text-lg text-gray-200">{slide.subtitle}</motion.p>
                                <motion.div initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.8, delay:0.6}}>
                                    <Link to={slide.buttonLink} className="mt-8 inline-block bg-yellow-400 text-gray-900 font-bold py-3 px-10 rounded-full text-lg uppercase transition-transform transform hover:scale-105 hover:shadow-lg">{slide.buttonText}</Link>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>
            
            {/* 2. HIZLI ERİŞİM MENÜSÜ */}
            <AnimatedSection>
                <section className="container mx-auto px-4 py-8">
                    <div className="flex space-x-4 md:space-x-0 md:justify-around overflow-x-auto pb-4 -mx-4 px-4">
                        {hizliErisim.map(item => (
                            <Link to={item.link} key={item.ad} className="flex-shrink-0 flex flex-col items-center text-center w-20 group">
                                <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-3xl shadow-md transition-all duration-300 group-hover:scale-110 group-hover:border-amber-400 group-hover:shadow-lg">
                                    {item.icon}
                                </div>
                                <span className="mt-3 text-xs font-semibold text-gray-700 group-hover:text-amber-600 transition-colors">
                                    {item.ad}
                                </span>
                            </Link>
                        ))}
                    </div>
                </section>
            </AnimatedSection>
            
            {/* 3. PROMOSYON BANNERLARI */}
            <AnimatedSection>
                <section className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {promoBannerlar.map((banner, index) => (
                        <Link to={banner.link} key={index} className="block overflow-hidden rounded-lg shadow-md">
                            <img src={banner.resim} alt={`Promo ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110" />
                        </Link>
                    ))}
                </section>
            </AnimatedSection>

            {/* 4. YATAY ÜRÜN KARUSELLERİ */}
            <ProductCarousel title="En Çok Satanlar 🔥" linkText="Tümünü Gör" linkTo="/urunler" products={enCokSatanlar} />
            
            {/* 5. ÖNE ÇIKAN ÜRÜN */}
            <AnimatedSection>
                <section className="bg-gray-800 text-white">
                    <div className="container mx-auto px-6 py-12 md:py-16 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="flex justify-center items-center lg:order-last">
                            <motion.img whileHover={{ scale: 1.05 }} src="/x2.avif" alt="Öne Çıkan Ürün" className="w-full max-w-xs md:max-w-md rounded-lg" />
                        </div>
                        <div className="text-center lg:text-left">
                            <span className="text-yellow-400 text-sm font-bold uppercase">Yeni Nesil Teknoloji</span>
                            <h2 className="text-3xl md:text-4xl font-bold mt-2">Otomatik Odaklı Kesim Kafası</h2>
                            <p className="text-gray-300 mt-4 text-base md:text-lg">Hassasiyet ve hızı bir araya getiren WSX® NC30 ile üretim verimliliğinizi zirveye taşıyın.</p>
                            <Link to="#" className="mt-8 inline-block bg-white text-gray-900 font-bold py-3 px-8 rounded-full text-base uppercase transition-transform transform hover:scale-105">Ürünü İncele</Link>
                        </div>
                    </div>
                </section>
            </AnimatedSection>

            <ProductCarousel title="Flaş İndirimler ⚡" linkText="Tüm Fırsatlar" linkTo="/urunler" products={flasIndirimler} />

  

            {/* 7. BLOG'DAN SON YAZILAR */}
            <AnimatedSection>
                <section className="bg-gray-50 py-12 md:py-16">
                    <div className="container mx-auto px-4">
                        <SectionHeader title="Blog'dan Son Gelişmeler" linkText="Tüm Yazılar" linkTo="/blog" />
                        <div className="grid lg:grid-cols-3 gap-8">
                            {blogYazilari.map(yazi => (
                                <Link to={`/blog/${yazi.slug}`} key={yazi.slug} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                                    <img src={yazi.resim} alt={yazi.baslik} className="h-56 w-full object-cover" />
                                    <div className="p-6 text-left">
                                        <h3 className="text-xl font-bold text-gray-900 ">{yazi.baslik}</h3>
                                        <p className="mt-4 font-bold text-amber-600 group-hover:text-amber-700 self-start">Devamını Oku →</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </AnimatedSection>
            
            {/* 8. MARKALAR */}
            <AnimatedSection className="py-12">
                <section className="container mx-auto px-4">
                    <h3 className="text-center text-gray-500 text-sm font-bold uppercase tracking-widest mb-8">Çalıştığımız Markalar</h3>
                    <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
                        {markalar.map(marka => (
                            <span key={marka} className="text-2xl font-bold text-gray-400 transition-colors duration-300 hover:text-gray-700">{marka}</span>
                        ))}
                    </div>
                </section>
            </AnimatedSection>
        </div>
    );
}

export default Anasayfa;