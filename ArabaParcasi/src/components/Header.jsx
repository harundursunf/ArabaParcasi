import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { kategoriler } from '../data/urunData';
import { markalar } from '../data/homePageData';

// İkonlar
const CartIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>;
const SearchIcon = () => <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>;
const ChevronDownIcon = () => <svg className="w-4 h-4 ml-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>;
const MenuIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path></svg>;
const CloseIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path></svg>;

function Header() {
    const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [aramaMetni, setAramaMetni] = useState('');

    const navigate = useNavigate();
    const { cartItems } = useCart();
    const location = useLocation();

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsProductsMenuOpen(false); // Sayfa değiştiğinde mega menüyü de kapat
    }, [location]);

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const navLinkStyle = ({ isActive }) =>
        `relative transition-colors duration-300 ${isActive ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'} after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-yellow-400 after:transition-transform after:duration-300 ${isActive ? 'after:scale-x-100' : 'after:scale-x-0 group-hover:after:scale-x-100'}`;

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (aramaMetni.trim()) {
            navigate(`/urunler?q=${aramaMetni}`);
            setAramaMetni('');
        }
    };

    return (
        <div className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    <div className="text-2xl font-black uppercase"><Link to="/">LO<span className="text-yellow-400">GO</span></Link></div>
                    <div className="hidden lg:block w-full max-w-xl">
                        <form onSubmit={handleSearchSubmit} className="relative">
                            <input type="text" placeholder="Ürün, marka veya kategori ara..." className="w-full bg-gray-100 border border-gray-200 rounded-full py-2.5 pl-5 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400" value={aramaMetni} onChange={(e) => setAramaMetni(e.target.value)} />
                            <button type="submit" className="absolute inset-y-0 right-0 flex items-center pr-4"><SearchIcon /></button>
                        </form>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link to="/sepetim" className="relative flex items-center p-2 text-gray-600 hover:text-yellow-500 transition-colors">
                            <CartIcon />
                            <AnimatePresence>
                                {totalItems > 0 && (
                                    <motion.span key={totalItems} initial={{ scale: 0.5, y: -10, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }} transition={{ type: 'spring', stiffness: 500, damping: 20 }} className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-600 rounded-full">
                                        {totalItems}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </Link>
                        <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden p-2 -mr-2"><MenuIcon /></button>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block border-t border-gray-200">
                <nav className="container mx-auto px-6 flex items-center justify-center space-x-10 text-sm font-bold h-12">
                    <NavLink to="/" className={navLinkStyle}><div className="group h-full flex items-center">Anasayfa</div></NavLink>

                    {/* ##### DEĞİŞİKLİK BURADA ##### */}
                    <div className="relative h-full flex items-center" onMouseEnter={() => setIsProductsMenuOpen(true)} onMouseLeave={() => setIsProductsMenuOpen(false)}>
                        {/* 'button' etiketini 'NavLink' ile değiştirdik */}
                        <NavLink to="/urunler" className={({ isActive }) => `flex items-center transition-colors duration-300 ${isActive || isProductsMenuOpen ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}>
                            Ürünler <ChevronDownIcon className={`transition-transform duration-300 ${isProductsMenuOpen ? 'rotate-180' : ''}`} />
                        </NavLink>
                        <AnimatePresence>
                            {isProductsMenuOpen && (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2 }} className="absolute top-full left-1/2 -translate-x-1/2 w-screen max-w-4xl bg-white shadow-lg rounded-b-lg border-t border-gray-100">
                                    <div className="grid grid-cols-4 gap-8 py-8 px-6">
                                        <div className="col-span-3 grid grid-cols-3 gap-8">
                                            <div><h3 className="font-bold text-gray-500 uppercase text-xs tracking-wider mb-4">Kategoriler</h3><div className="space-y-3">{kategoriler.slice(1).map(kategori => (<Link key={kategori} to="/urunler" onClick={() => setIsProductsMenuOpen(false)} className="block text-gray-600 hover:text-yellow-500 whitespace-nowrap">{kategori}</Link>))}</div></div>
                                            <div><h3 className="font-bold text-gray-500 uppercase text-xs tracking-wider mb-4">Markalar</h3><div className="space-y-3">{markalar.slice(0, 5).map(marka => (<Link key={marka} to="/urunler" onClick={() => setIsProductsMenuOpen(false)} className="block text-gray-600 hover:text-yellow-500">{marka}</Link>))}</div></div>
                                        </div>
                                        <div className="col-span-1"><div className="bg-gray-100 rounded-lg h-full w-full overflow-hidden"><img src="/x1.avif" alt="promosyon" className="w-full h-full object-cover" /></div></div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <NavLink to="/blog" className={navLinkStyle}><div className="group h-full flex items-center">Blog</div></NavLink>
                    <NavLink to="/hakkimizda" className={navLinkStyle}><div className="group h-full flex items-center">Hakkımızda</div></NavLink>
                    <NavLink to="/iletisim" className={navLinkStyle}><div className="group h-full flex items-center">İletişim</div></NavLink>
                </nav>
            </div>
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="lg:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-sm">
                        <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-2xl">
                            <div className="p-6 flex flex-col h-full">
                                <div className="flex justify-between items-center mb-8"><h3 className="font-bold text-lg">Menü</h3><button onClick={() => setIsMobileMenuOpen(false)} className="p-2 -mr-2"><CloseIcon /></button></div>
                                <nav className="flex flex-col space-y-5 text-lg font-semibold text-gray-700">
                                    <NavLink to="/">Anasayfa</NavLink>
                                    <NavLink to="/urunler">Ürünler</NavLink>
                                    <NavLink to="/blog">Blog</NavLink>
                                    <NavLink to="/hakkimizda">Hakkımızda</NavLink>
                                    <NavLink to="/iletisim">İletişim</NavLink>
                                </nav>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Header;