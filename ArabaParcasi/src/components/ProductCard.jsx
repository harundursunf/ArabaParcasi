import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

// İkonlar
const CartIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>;
const EyeIcon = () => <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>;

// Animasyon varyantları
const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
};

function ProductCard({ product, openModal, viewMode = 'grid' }) {
    const { addToCart } = useCart();

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if(product.stok) {
            addToCart(product);
        }
    };

    const handleQuickView = (e) => {
        e.preventDefault();
        e.stopPropagation();
        openModal(product);
    };

    if (viewMode === 'list') {
        return ( // LİSTE GÖRÜNÜMÜ
            <motion.div variants={itemVariants} className="group w-full">
                <Link to={`/urunler/${product.id}`} className="flex bg-white rounded-xl shadow-md border border-transparent overflow-hidden text-left transition-all duration-300 hover:shadow-xl hover:border-yellow-400 hover:-translate-y-1">
                    <div className="w-1/3 flex-shrink-0">
                        <img src={product.resim} alt={product.ad} className="h-full w-full object-cover"/>
                    </div>
                    <div className="w-2/3 p-5 flex flex-col">
                        <p className="text-sm font-semibold text-gray-500">{product.kategori}</p>
                        <h3 className="mt-1 text-lg font-bold text-gray-900">{product.ad}</h3>
                        <p className="text-sm text-gray-600 mt-2 flex-grow">{product.ozet}</p>
                        <div className="flex justify-between items-center mt-4">
                            <p className="text-2xl font-black text-gray-800">{product.fiyat}</p>
                            <button onClick={handleAddToCart} disabled={!product.stok} className="bg-gray-800 text-white font-bold py-2 px-4 rounded-lg text-sm flex items-center justify-center disabled:opacity-50 hover:bg-yellow-400 hover:text-gray-900">
                                <CartIcon /> <span className="ml-2">Sepete Ekle</span>
                            </button>
                        </div>
                    </div>
                </Link>
            </motion.div>
        );
    }

    return ( // GRID GÖRÜNÜMÜ (Varsayılan)
        <motion.div variants={itemVariants} className="group h-full">
            <Link to={`/urunler/${product.id}`} className="block bg-white rounded-xl shadow-md border border-transparent overflow-hidden text-left transition-all duration-300 hover:shadow-2xl hover:border-yellow-400 hover:-translate-y-1 h-full flex flex-col">
                <div className="relative">
                    <img src={product.resim} alt={product.ad} className="w-full h-52 object-cover"/>
                    <div className="hidden md:flex absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 items-center justify-center space-x-2 opacity-0 group-hover:opacity-100">
                        <button onClick={handleQuickView} className="p-3 bg-white rounded-full text-gray-700 hover:bg-yellow-400 hover:text-gray-900 transform scale-75 group-hover:scale-100 transition-transform duration-300 delay-100 cursor-pointer"><EyeIcon/></button>
                        <button onClick={handleAddToCart} disabled={!product.stok} className="p-3 bg-white rounded-full text-gray-700 hover:bg-yellow-400 hover:text-gray-900 transform scale-75 group-hover:scale-100 transition-transform duration-300 delay-200 disabled:opacity-50 cursor-pointer"><CartIcon/></button>
                    </div>
                    {product.badge && <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">{product.badge}</span>}
                </div>
                <div className="p-5 flex flex-col flex-grow">
                    <p className="text-sm font-semibold text-gray-500">{product.kategori}</p>
                    <h3 className="mt-1 text-lg font-bold text-gray-900 flex-grow h-16">{product.ad}</h3>
                    <p className="mt-2 text-2xl font-black text-gray-800">{product.fiyat}</p>
                    <div className="mt-4 md:hidden">
                        <button onClick={handleAddToCart} disabled={!product.stok} className="w-full bg-gray-800 text-white font-bold py-3 rounded-lg text-sm flex items-center justify-center disabled:opacity-50">
                            <CartIcon /> <span className="ml-2">Sepete Ekle</span>
                        </button>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

export default ProductCard;