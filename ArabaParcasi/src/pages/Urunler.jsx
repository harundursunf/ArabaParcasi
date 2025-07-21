import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { kategoriler, tumUrunler } from '../data/urunData';
import ProductCard from '../components/ProductCard';

// İkonlar
const SearchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
const ChevronDownIcon = () => <svg className="w-5 h-5 ml-2 -mr-1 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>;
const CloseIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path></svg>;
const CartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;

const ProductModal = ({ product, onClose }) => {
    const { addToCart } = useCart();
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} transition={{ duration: 0.3 }} className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-6 relative" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 z-10"><CloseIcon/></button>
                <div className="md:col-span-1"><img src={product.resim} alt={product.ad} className="w-full h-full object-cover rounded-l-xl"/></div>
                <div className="md:col-span-1 p-8 flex flex-col">
                    <p className="text-sm font-semibold text-yellow-500">{product.kategori}</p>
                    <h2 className="text-3xl font-bold text-gray-900 mt-2">{product.ad}</h2>
                    <p className="mt-4 text-gray-600">Bu alana ürünle ilgili detaylı bir açıklama gelecek. Yüksek kaliteli materyaller ve üstün mühendislik ile üretilmiştir...</p>
                    <div className="mt-auto pt-6">
                        <p className="text-3xl font-black text-gray-800">{product.fiyat}</p>
                        <button disabled={!product.stok} onClick={() => addToCart(product)} className="w-full mt-4 flex items-center justify-center bg-gray-800 text-white font-bold py-3 rounded-lg transition-colors duration-300 hover:bg-yellow-400 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"><CartIcon /> <span className="ml-2">Sepete Ekle</span></button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const Pagination = () => ( <div className="flex items-center justify-center space-x-2 mt-12"><button className="px-4 py-2 text-gray-500 bg-white rounded-md hover:bg-yellow-400 hover:text-gray-900">Önceki</button><button className="px-4 py-2 text-gray-900 bg-yellow-400 rounded-md font-bold">1</button><button className="px-4 py-2 text-gray-500 bg-white rounded-md hover:bg-yellow-400 hover:text-gray-900">2</button><button className="px-4 py-2 text-gray-500 bg-white rounded-md hover:bg-yellow-400 hover:text-gray-900">3</button><button className="px-4 py-2 text-gray-500 bg-white rounded-md hover:bg-yellow-400 hover:text-gray-900">Sonraki</button></div>);

function Urunler() {
    const [searchParams] = useSearchParams();
    const urlQuery = searchParams.get('q') || '';

    const [seciliKategori, setSeciliKategori] = useState('Tüm Kategoriler');
    const [aramaTerimi, setAramaTerimi] = useState(urlQuery);
    const [stoktakiler, setStoktakiler] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        setAramaTerimi(urlQuery);
    }, [urlQuery]);

    const filtrelenmisUrunler = useMemo(() => {
        return tumUrunler
            .filter(urun => (seciliKategori === 'Tüm Kategoriler' || urun.kategori === seciliKategori))
            .filter(urun => urun.ad.toLowerCase().includes(aramaTerimi.toLowerCase()))
            .filter(urun => stoktakiler ? urun.stok === true : true);
    }, [seciliKategori, aramaTerimi, stoktakiler]);

    const openModal = (product) => { setSelectedProduct(product); setModalOpen(true); };
    const closeModal = () => { setModalOpen(false); };

    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.05 } } };

    return (
        <div className="bg-gray-100">
            <header className="bg-gray-900">
                <div className="container mx-auto px-6 py-10 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wider"><span className="text-yellow-400">ÜRÜN</span> KATALOĞU</h1>
                    <p className="mt-3 text-lg text-gray-300">Aradığınız tüm endüstriyel lazer parçaları burada</p>
                    <div className="mt-8 max-w-2xl mx-auto">
                        <div className="relative flex items-center bg-white rounded-full shadow-xl">
                            <input type="text" placeholder="Ürün veya parça kodu ara..." className="w-full py-4 pl-6 pr-12 text-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400" value={aramaTerimi} onChange={(e) => setAramaTerimi(e.target.value)} />
                            <div className="absolute right-0 pr-4"> <SearchIcon /> </div>
                        </div>
                    </div>
                </div>
            </header>
            <main className="container mx-auto p-6 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <aside className="lg:col-span-1"><div className="bg-white p-6 rounded-xl shadow-md sticky top-24"><h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Kategoriler</h3><ul className="space-y-1">{kategoriler.map(kategori => ( <li key={kategori}> <button onClick={() => setSeciliKategori(kategori)} className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${seciliKategori === kategori ? 'bg-yellow-400 text-gray-900 shadow-sm' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'}`}> {kategori} </button> </li> ))}</ul><h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2 mt-6">Filtreler</h3><div className="flex items-center"><input type="checkbox" id="stok" className="h-4 w-4 rounded border-gray-300 text-yellow-500 focus:ring-yellow-400" checked={stoktakiler} onChange={(e) => setStoktakiler(e.target.checked)} /><label htmlFor="stok" className="ml-3 text-sm font-medium text-gray-700">Sadece Stoktakiler</label></div></div></aside>
                    <section className="lg:col-span-3">
                        <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-xl shadow-sm"><p className="text-sm text-gray-600 font-medium"><span className="font-bold text-gray-800">{filtrelenmisUrunler.length}</span> ürün bulundu</p><button className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">Sırala <ChevronDownIcon/></button></div>
                        {filtrelenmisUrunler.length > 0 ? (
                            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {filtrelenmisUrunler.map(urun => (
                                    <ProductCard key={urun.id} product={urun} openModal={openModal} />
                                ))}
                            </motion.div>
                        ) : ( <div className="text-center py-20 bg-white rounded-xl shadow-md col-span-full"><h3 className="text-2xl font-bold text-gray-800">Üzgünüz, aradığınız kriterlere uygun ürün bulunamadı.</h3><p className="mt-2 text-gray-500">Lütfen filtrelerinizi veya arama teriminizi değiştirin.</p></div> )}
                        <Pagination />
                    </section>
                </div>
            </main>
            <AnimatePresence>
                {modalOpen && selectedProduct && (<ProductModal product={selectedProduct} onClose={closeModal} />)}
            </AnimatePresence>
        </div>
    );
}

export default Urunler;