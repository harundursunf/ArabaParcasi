import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { kategoriler, tumUrunler } from '../data/urunData';
import { markalar } from '../data/homePageData';
import ProductCard from '../components/ProductCard';

// --- İkon Bileşenleri ---
const ChevronRightIcon = () => <svg className="w-4 h-4 text-gray-400 mx-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>;
const SearchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
const ChevronDownIcon = ({ ...props }) => <svg {...props} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>;
const CloseIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path></svg>;
const FilterIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L12 14.414V19a1 1 0 01-1.447.894l-4-2A1 1 0 016 17v-2.586L3.293 6.707A1 1 0 013 6V4z"></path></svg>;
const CartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const ArrowUpIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>;
const RefreshIcon = () => <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h5M20 20v-5h-5M4 4l1.5 1.5A9 9 0 0120.5 15"></path></svg>

// --- Yardımcı Bileşenler ---
const ProductModal = ({ product, onClose }) => { const { addToCart } = useCart(); return (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black bg-opacity-60 z-[70] flex items-center justify-center p-4" onClick={onClose}><motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} transition={{ duration: 0.3 }} className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-6 relative" onClick={(e) => e.stopPropagation()}><button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 z-10"><CloseIcon /></button><div className="md:col-span-1"><img src={product.resim} alt={product.ad} className="w-full h-full object-cover md:rounded-l-xl" /></div><div className="md:col-span-1 p-8 flex flex-col"><p className="text-sm font-semibold text-yellow-500">{product.kategori}</p><h2 className="text-3xl font-bold text-gray-900 mt-2">{product.ad}</h2><p className="mt-4 text-gray-600">Bu alana ürünle ilgili detaylı bir açıklama gelecek. Yüksek kaliteli materyaller ve üstün mühendislik ile üretilmiştir...</p><div className="mt-auto pt-6"><p className="text-3xl font-black text-gray-800">{product.fiyat} TL</p><button disabled={!product.stok} onClick={() => addToCart(product)} className="w-full mt-4 flex items-center justify-center bg-gray-800 text-white font-bold py-3 rounded-lg transition-colors duration-300 hover:bg-yellow-400 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"><CartIcon /> <span className="ml-2">Sepete Ekle</span></button></div></div></motion.div></motion.div>); };
const Breadcrumb = ({ kategori }) => (<nav className="flex items-center text-sm text-gray-500"><Link to="/" className="hover:text-gray-700">Anasayfa</Link><ChevronRightIcon /><span className="font-semibold text-gray-700">{kategori}</span></nav>);
const AccordionFilter = ({ title, children }) => { const [isOpen, setIsOpen] = useState(true); return (<div className="border-b"><button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center py-4 text-left"><span className="font-bold text-gray-800">{title}</span><ChevronDownIcon className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} /></button><AnimatePresence>{isOpen && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><div className="pb-4">{children}</div></motion.div>)}</AnimatePresence></div>); };
const SkeletonCard = () => (<div className="bg-white rounded-xl shadow-md p-4 animate-pulse"><div className="bg-gray-200 h-48 rounded-md"></div><div className="mt-4 h-4 bg-gray-200 rounded w-1/3"></div><div className="mt-2 h-6 bg-gray-200 rounded w-3/4"></div><div className="mt-4 h-8 bg-gray-200 rounded w-1/2"></div></div>);
const Pagination = ({ currentPage, totalPages, onPageChange }) => { if (totalPages <= 1) return null; const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1); return (<div className="flex items-center justify-center space-x-1 mt-12"><button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="px-3 py-2 text-gray-500 bg-white rounded-md hover:bg-yellow-400 hover:text-gray-900 disabled:opacity-50">Önceki</button>{pageNumbers.map(number => (<button key={number} onClick={() => onPageChange(number)} className={`px-4 py-2 rounded-md font-bold ${currentPage === number ? 'bg-yellow-400 text-gray-900' : 'text-gray-600 bg-white hover:bg-yellow-100'}`}>{number}</button>))}<button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className="px-3 py-2 text-gray-500 bg-white rounded-md hover:bg-yellow-400 hover:text-gray-900 disabled:opacity-50">Sonraki</button></div>);};
const FiltrePaneli = ({ filters, onFilterChange, onReset, onKategoriChange }) => (<div className="bg-white divide-y rounded-lg border"><AccordionFilter title="Kategoriler"><ul className="space-y-1 p-2">{kategoriler.map(kategori => (<li key={kategori}><button onClick={() => onKategoriChange(kategori)} className={`w-full text-left p-2 rounded-md text-sm ${filters.seciliKategori === kategori ? 'bg-yellow-100 text-yellow-800 font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}>{kategori}</button></li>))}</ul></AccordionFilter><AccordionFilter title="Marka"><div className="space-y-2 p-4">{markalar.map(marka => (<div key={marka} className="flex items-center"><input id={`marka-${marka}`} type="checkbox" checked={filters.seciliMarkalar.includes(marka)} onChange={() => onFilterChange('marka', marka)} className="h-4 w-4 rounded border-gray-300 text-yellow-500 focus:ring-yellow-400" /><label htmlFor={`marka-${marka}`} className="ml-3 text-sm text-gray-600">{marka}</label></div>))}</div></AccordionFilter><div className="p-4"><button onClick={onReset} className="w-full flex items-center justify-center text-sm font-semibold text-gray-600 hover:text-red-500"><RefreshIcon /> Filtreleri Temizle</button></div></div>);

// Kenar çubuğu için basitleştirilmiş, özel ürün kartı
const FirsatUrunuCard = ({ urun }) => (
    <Link to={`/urunler/${urun.id}`} className="block group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <img src={urun.resim} alt={urun.ad} className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-3">
            <h4 className="font-bold text-white truncate">{urun.ad}</h4>
            <p className="text-sm text-yellow-300">{urun.fiyat} TL</p>
        </div>
        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
            FIRSAT
        </div>
    </Link>
);

// Kenar çubuğundaki Fırsat Ürünleri panelini yöneten bileşen
const FirsatUrunleriPaneli = ({ urunler }) => {
    const firsatUrunleri = useMemo(() =>
        urunler.filter(p => p.id % 4 === 0).slice(0, 3)
    , [urunler]);

    if (firsatUrunleri.length === 0) return null;

    return (
        <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 px-1">Fırsat Ürünleri ✨</h3>
            <div className="space-y-4">
                {firsatUrunleri.map(urun => (
                    <FirsatUrunuCard key={`firsat-${urun.id}`} urun={urun} />
                ))}
            </div>
        </div>
    );
};

// Ana Sayfa Bileşeni
function Urunler() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    
    const initialFilters = useMemo(() => ({
        aramaTerimi: searchParams.get('q') || '',
        seciliKategori: searchParams.get('kategori') || 'Tüm Kategoriler',
        seciliMarkalar: [],
    }), [searchParams]);

    const [filters, setFilters] = useState(initialFilters);
    const [tempFilters, setTempFilters] = useState(filters);
    const [isLoading, setIsLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 12;

    useEffect(() => {
        setFilters(initialFilters);
        setCurrentPage(1);
    }, [initialFilters]);

    useEffect(() => {
        const checkScrollTop = () => setShowScrollTop(window.pageYOffset > 400);
        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, []);

    const filtrelenmisUrunler = useMemo(() => {
        return tumUrunler
            .filter(urun => filters.seciliKategori === 'Tüm Kategoriler' || urun.kategori === filters.seciliKategori)
            .filter(urun => urun.ad.toLowerCase().includes(filters.aramaTerimi.toLowerCase()))
            .filter(urun => filters.seciliMarkalar.length === 0 || filters.seciliMarkalar.includes(urun.marka));
    }, [filters]);

    const totalPages = Math.ceil(filtrelenmisUrunler.length / ITEMS_PER_PAGE);
    const currentUrunler = filtrelenmisUrunler.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 500);
        return () => clearTimeout(timer);
    }, [filters, currentPage]);
    
    const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    const handlePageChange = (page) => {
        setCurrentPage(page);
        scrollTop();
    }

    const resetAllFilters = () => {
        setTempFilters(initialFilters);
        navigate('/urunler');
        setIsFilterOpen(false);
    };

    const handleKategoriChange = (kategori) => {
        navigate(kategori === 'Tüm Kategoriler' ? '/urunler' : `/urunler?kategori=${encodeURIComponent(kategori)}`);
        setIsFilterOpen(false);
    };

    const handleFilterChange = (type, value) => {
        setTempFilters(prev => ({
            ...prev,
            seciliMarkalar: prev.seciliMarkalar.includes(value)
                ? prev.seciliMarkalar.filter(m => m !== value)
                : [...prev.seciliMarkalar, value],
        }));
    };
    
    const applyTempFilters = () => {
        setFilters(tempFilters);
        setIsFilterOpen(false);
    };
    
    const handleSearchChange = (e) => {
        setFilters(prev => ({ ...prev, aramaTerimi: e.target.value }));
    }
    
    const openModal = (product) => { setSelectedProduct(product); setModalOpen(true); };
    const closeModal = () => setModalOpen(false);

    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.05 } } };
    
    return (
        <div className="bg-gray-50 min-h-screen">
            <main className="container mx-auto p-4 md:p-8">
                <div className="mb-6"><Breadcrumb kategori={filters.seciliKategori} /></div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                    
                    <aside className="hidden lg:block lg:col-span-1">
                        <div className="sticky top-28">
                           <FirsatUrunleriPaneli urunler={tumUrunler} />
                        </div>
                    </aside>

                    <section className="col-span-1 lg:col-span-3">
                        <div className="mb-6 space-y-4">
                            <div>
                                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">{filters.seciliKategori}</h1>
                                <p className="text-sm text-gray-600 mt-1">
                                    <span className="font-bold text-gray-800">{filtrelenmisUrunler.length}</span> ürün bulundu
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-2">
                                <div className="relative flex-grow">
                                    <input type="text" placeholder="Ürünlerde ara..." value={filters.aramaTerimi} onChange={handleSearchChange} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-yellow-400 focus:border-yellow-400" />
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><SearchIcon /></div>
                                </div>
                                <button onClick={() => { setTempFilters(filters); setIsFilterOpen(true); }} className="flex items-center gap-2 text-sm font-bold bg-white p-2.5 rounded-lg border border-gray-300 hover:border-yellow-400 hover:text-yellow-500 transition-colors">
                                    <FilterIcon /> <span className="hidden xs:inline">Filtrele</span>
                                </button>
                            </div>
                        </div>

                        {isLoading ? (
                            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                                {[...Array(ITEMS_PER_PAGE)].map((_, i) => <SkeletonCard key={i} />)}
                            </div>
                        ) : (
                            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                                {currentUrunler.length > 0 ? (
                                    currentUrunler.map(urun => (
                                        <ProductCard key={urun.id} product={urun} openModal={openModal} />
                                    ))
                                ) : (
                                    <div className="text-center py-20 bg-white rounded-xl col-span-full shadow-sm">
                                        <h3 className="text-2xl font-bold text-gray-800">Aradığınız kriterlere uygun ürün bulunamadı.</h3>
                                        <p className="mt-2 text-gray-500">Lütfen filtrelerinizi değiştirin veya sıfırlayın.</p>
                                        <button onClick={resetAllFilters} className="mt-4 bg-yellow-400 text-gray-900 font-bold py-2 px-5 rounded-lg hover:bg-yellow-500 transition-colors">
                                            Filtreleri Temizle
                                        </button>
                                    </div>
                                )}
                            </motion.div>
                        )}

                        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                    </section>
                </div>
            </main>

            <AnimatePresence>{modalOpen && selectedProduct && (<ProductModal product={selectedProduct} onClose={closeModal} />)}</AnimatePresence>
            <AnimatePresence>
                {isFilterOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm" onClick={() => setIsFilterOpen(false)}>
                        <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} className="fixed bottom-0 left-0 h-[85vh] w-full bg-gray-100 shadow-2xl rounded-t-2xl flex flex-col" onClick={(e) => e.stopPropagation()}>
                            <div className="p-4 border-b flex justify-between items-center"><h2 className="text-xl font-bold">Filtrele</h2><button onClick={() => setIsFilterOpen(false)}><CloseIcon /></button></div>
                            <div className="overflow-y-auto flex-grow p-4"><FiltrePaneli filters={tempFilters} onFilterChange={handleFilterChange} onKategoriChange={handleKategoriChange} onReset={resetAllFilters} /></div>
                            <div className="p-4 bg-white border-t"><button onClick={applyTempFilters} className="w-full bg-yellow-400 text-gray-900 font-bold py-3 rounded-lg hover:bg-yellow-500 transition-colors">Filtreleri Uygula</button></div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} onClick={scrollTop} className="fixed bottom-6 right-6 bg-gray-800 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center z-40 hover:bg-gray-900"><ArrowUpIcon /></motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Urunler;