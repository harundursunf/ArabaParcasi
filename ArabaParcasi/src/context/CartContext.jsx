// src/context/CartContext.jsx

import React, { createContext, useState, useContext } from 'react';
import toast from 'react-hot-toast';

// 1. Context'i oluştur
const CartContext = createContext();

// 2. Diğer bileşenlerin bu context'i kolayca kullanması için bir custom hook oluştur
export const useCart = () => useContext(CartContext);

// 3. Context'in Provider'ını oluştur. Tüm mantık burada olacak.
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // SEPETE EKLEME FONKSİYONU
    const addToCart = (product) => {
        setCartItems(prevItems => {
            const itemExists = prevItems.find(item => item.id === product.id);
            if (itemExists) {
                // Ürün zaten sepette varsa, miktarını 1 artır
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                // Ürün sepette yoksa, yeni ürün olarak ekle (miktar 1)
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
        
        // BAŞARI MESAJINI GÖSTER
        toast.success('Ürün başarılı bir şekilde sepete eklendi!');
    };

    // SEPETTEN SİLME FONKSİYONU
    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    };
    
    // MİKTAR GÜNCELLEME FONKSİYONU
    const updateQuantity = (productId, quantity) => {
        const newQuantity = Math.max(1, quantity); // Miktar 1'den az olamaz
        setCartItems(prevItems => 
            prevItems.map(item => 
                item.id === productId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    // Bu değerleri tüm alt bileşenlere sağlayacağız
    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};