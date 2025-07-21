// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Bileşenleri ve Sayfaları import ediyoruz
import Header from './components/Header';
import Footer from './components/Footer';
import Anasayfa from './pages/Anasayfa';
import Urunler from './pages/Urunler';
import Sepetim from './pages/Sepetim';
import Hakkimizda from './pages/Hakkimizda';
import İletisim from './pages/İletisim';
import Blog from './pages/Blog';
import BlogIcerik from './pages/BlogIcerik';

// Sepet Context'ini import ediyoruz
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      {/* Bildirimlerin gösterileceği alan */}
      <Toaster
        position="top-center" 
        toastOptions={{
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#10B981', // Yeşil tik rengi
              secondary: '#FFFFFF',
            },
          },
        }}
      />

      <div className="bg-white min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Anasayfa />} />
            <Route path="/urunler" element={<Urunler />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:blogSlug" element={<BlogIcerik />} />
            <Route path="/hakkimizda" element={<Hakkimizda />} />
            <Route path="/sepetim" element={<Sepetim />} />
            <Route path="/iletisim" element={<İletisim />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;