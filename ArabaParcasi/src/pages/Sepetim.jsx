// src/pages/Sepetim.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // useCart hook'unu import et

function Sepetim() {
    const { cartItems, removeFromCart, updateQuantity } = useCart();

    const toplamFiyat = cartItems.reduce((total, item) => {
        // Fiyat string'ini sayıya çevir
        const fiyatSayisi = parseFloat(item.fiyat.replace('.', '').replace(' TL', ''));
        return total + fiyatSayisi * item.quantity;
    }, 0);

    return (
        <div className="bg-gray-100 min-h-[80vh]">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Alışveriş Sepetim</h1>

                {cartItems.length === 0 ? (
                    // Sepet boşsa
                    <div className="bg-white p-8 text-center rounded-lg shadow-lg">
                        <span className="text-6xl mb-4 inline-block">🛒</span>
                        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Sepetinizde henüz ürün bulunmuyor.</h2>
                        <Link to="/urunler" className="mt-6 bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105 inline-block">Ürünleri Keşfet</Link>
                    </div>
                ) : (
                    // Sepet doluysa
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Ürün Listesi */}
                        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg space-y-4">
                            {cartItems.map(item => (
                                <div key={item.id} className="flex items-center border-b pb-4">
                                    <img src={item.resim} alt={item.ad} className="w-24 h-24 object-cover rounded-md" />
                                    <div className="ml-4 flex-grow">
                                        <h3 className="font-bold text-lg">{item.ad}</h3>
                                        <p className="text-gray-600">{item.fiyat}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <input 
                                            type="number" 
                                            value={item.quantity}
                                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                            className="w-16 text-center border rounded-md"
                                        />
                                    </div>
                                    <button onClick={() => removeFromCart(item.id)} className="ml-6 text-red-500 hover:text-red-700">
                                        Sil
                                    </button>
                                </div>
                            ))}
                        </div>
                        {/* Sipariş Özeti */}
                        <div className="lg:col-span-1">
                            <div className="bg-white p-6 rounded-xl shadow-lg sticky top-24">
                                <h2 className="text-xl font-bold border-b pb-2">Sipariş Özeti</h2>
                                <div className="flex justify-between mt-4">
                                    <span>Ara Toplam</span>
                                    <span>{toplamFiyat.toLocaleString('tr-TR')} TL</span>
                                </div>
                                <div className="flex justify-between mt-2 text-gray-500">
                                    <span>Kargo</span>
                                    <span>Hesaplanacak</span>
                                </div>
                                <div className="flex justify-between font-bold text-xl mt-4 border-t pt-2">
                                    <span>Toplam</span>
                                    <span>{toplamFiyat.toLocaleString('tr-TR')} TL</span>
                                </div>
                                <button className="w-full mt-6 bg-gray-800 text-white font-bold py-3 rounded-lg hover:bg-yellow-400 hover:text-gray-900">
                                    Ödemeye Geç
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Sepetim;