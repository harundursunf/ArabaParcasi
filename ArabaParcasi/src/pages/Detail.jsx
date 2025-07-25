// src/pages/Detail.jsx

import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { tumUrunler } from '../data/urunData';
import { motion, AnimatePresence } from 'framer-motion';

// --- İkonlar ---
const CartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const ChevronRightIcon = () => <svg className="w-4 h-4 text-gray-400 mx-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>;

// --- Alt Bileşenler ---

// Miktar Seçici Bileşeni
const QuantitySelector = ({ quantity, setQuantity }) => (
    <div className="flex items-center">
        <label htmlFor="quantity" className="mr-4 font-semibold text-gray-700">Miktar:</label>
        <div className="flex items-center border border-gray-300 rounded-lg">
            <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-l-md transition">-</button>
            <input type="text" id="quantity" value={quantity} readOnly className="w-12 text-center border-l border-r font-semibold text-gray-800 focus:outline-none" />
            <button onClick={() => setQuantity(q => q + 1)} className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-r-md transition">+</button>
        </div>
    </div>
);

// İlgili Ürünler Kartı
const IlgiliUrunCard = ({ urun }) => (
    <Link to={`/urunler/${urun.id}`} className="block group bg-white rounded-xl border hover:shadow-lg transition-shadow duration-300">
        <div className="w-full h-48 bg-gray-100 rounded-t-xl overflow-hidden">
            <img src={urun.resim} alt={urun.ad} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="p-4">
            <h3 className="font-bold text-gray-800 truncate">{urun.ad}</h3>
            <p className="text-lg font-semibold text-yellow-500 mt-1">{urun.fiyat} TL</p>
        </div>
    </Link>
);


// --- Ana Detay Sayfası Bileşeni ---
function Detail() {
    const { id } = useParams();
    const { addToCart } = useCart();
    
    // NOT: Gerçek bir uygulamada bu veriler API'den çekilmelidir.
    // urunData'daki objelerinize aşağıdaki gibi alanlar eklemeniz gerekir:
    // ozellikler: [{etiket: "Malzeme", deger: "Pamuk"}, {etiket: "Renk", deger: "Siyah"}],
    const urun = useMemo(() => {
        const bulananUrun = tumUrunler.find(p => p.id === parseInt(id));
        if (!bulananUrun) return null;
        
        // Mock data for demonstration if not present
        return {
            ...bulananUrun,
            ozellikler: bulananUrun.ozellikler || [{etiket: "Marka", deger: bulananUrun.marka}, {etiket: "Kategori", deger: bulananUrun.kategori}, {etiket: "Stok", deger: bulananUrun.stok ? 'Mevcut' : 'Tükendi'}],
        };
    }, [id]);

    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('aciklama');

    const ilgiliUrunler = useMemo(() => {
        if (!urun) return [];
        return tumUrunler.filter(p => p.kategori === urun.kategori && p.id !== urun.id).slice(0, 4);
    }, [urun]);

    // Ürün değiştiğinde miktarı sıfırla
    React.useEffect(() => {
        if (urun) {
            setQuantity(1);
        }
    }, [urun]);

    if (!urun) {
        return (
            <div className="container mx-auto text-center py-20">
                <h1 className="text-3xl font-bold">Ürün Bulunamadı</h1>
                <p className="text-gray-600 mt-4">Aradığınız ürün mevcut değil veya kaldırılmış olabilir.</p>
                <Link to="/urunler" className="mt-6 inline-block bg-yellow-400 text-gray-900 font-bold py-2 px-6 rounded-lg hover:bg-yellow-500">Tüm Ürünlere Göz At</Link>
            </div>
        );
    }

    const handleAddToCart = () => {
        // Not: addToCart fonksiyonunuzu birden fazla ürün alacak şekilde güncellemeniz gerekebilir.
        // Örneğin: addToCart(urun, quantity)
        addToCart(urun);
    };

    return (
        <div className="bg-gray-50">
            <main className="container mx-auto p-4 md:p-8">
                <nav className="flex items-center text-sm text-gray-500 mb-8">
                    <Link to="/" className="hover:text-gray-700">Anasayfa</Link><ChevronRightIcon />
                    <Link to="/urunler" className="hover:text-gray-700">Ürünler</Link><ChevronRightIcon />
                    <Link to={`/urunler?kategori=${urun.kategori}`} className="hover:text-gray-700">{urun.kategori}</Link><ChevronRightIcon />
                    <span className="font-semibold text-gray-800 truncate">{urun.ad}</span>
                </nav>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
                    {/* Ürün Fotoğrafı */}
                    <div>
                        <div className="bg-white rounded-xl shadow-lg p-4 flex items-center justify-center h-96">
                            <motion.img 
                                src={urun.resim} 
                                alt={urun.ad} 
                                className="max-h-full max-w-full object-contain"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.2 }}
                            />
                        </div>
                    </div>

                    {/* Ürün Bilgileri */}
                    <div className="flex flex-col">
                        <p className="font-semibold text-yellow-500 uppercase tracking-wider">{urun.marka}</p>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 my-2">{urun.ad}</h1>
                        
                        <p className="text-3xl font-black text-gray-800 my-4">{urun.fiyat} TL</p>
                        
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Bu alana ürünle ilgili kısa ve çekici bir açıklama gelecek. Ürünün en önemli faydalarını ve özelliklerini burada vurgulayabilirsiniz.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 items-center my-4">
                            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
                            <span className={`px-3 py-1 text-sm font-semibold rounded-full ${urun.stok ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {urun.stok ? 'Stokta Mevcut' : 'Tükendi'}
                            </span>
                        </div>

                        <div className="mt-6">
                            <button onClick={handleAddToCart} disabled={!urun.stok} className="w-full flex items-center justify-center bg-gray-800 text-white font-bold py-4 rounded-lg transition-all duration-300 hover:bg-yellow-500 hover:text-gray-900 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-lg">
                                <CartIcon />
                                <span className="ml-2">Sepete Ekle</span>
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Detay Sekmeleri */}
                <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                    <div className="border-b border-gray-200 mb-6">
                        <nav className="flex space-x-6">
                            <button onClick={() => setActiveTab('aciklama')} className={`py-3 px-1 font-semibold transition ${activeTab === 'aciklama' ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-gray-500 hover:text-gray-800'}`}>Ürün Açıklaması</button>
                            <button onClick={() => setActiveTab('ozellikler')} className={`py-3 px-1 font-semibold transition ${activeTab === 'ozellikler' ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-gray-500 hover:text-gray-800'}`}>Teknik Özellikler</button>
                        </nav>
                    </div>
                    <div>
                        {activeTab === 'aciklama' && <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="prose max-w-none">Bu alana ürünle ilgili <strong>detaylı</strong> bir açıklama gelecek. Yüksek kaliteli materyaller ve üstün mühendislik ile üretilmiştir. Müşteri memnuniyeti odaklı tasarım, kullanım kolaylığı ve dayanıklılık ön planda tutulmuştur. Ürünün kullanım alanları ve avantajları hakkında bilgiler burada yer alabilir.</motion.div>}
                        {activeTab === 'ozellikler' && <motion.div initial={{opacity: 0}} animate={{opacity: 1}}><ul className="space-y-3">{urun.ozellikler.map(oz => <li key={oz.etiket} className="flex justify-between border-b pb-2"><span className="font-semibold text-gray-600">{oz.etiket}</span><span className="text-gray-800">{oz.deger}</span></li>)}</ul></motion.div>}
                    </div>
                </div>

                {/* İlgili Ürünler */}
                {ilgiliUrunler.length > 0 && (
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Bunları da Beğenebilirsiniz</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {ilgiliUrunler.map(p => <IlgiliUrunCard key={p.id} urun={p} />)}
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}

export default Detail;
