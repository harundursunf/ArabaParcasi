import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// --- Context'ler ---
// Bu context'ler, uygulama genelinde veri yönetimi sağlar.
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

// --- Bileşenler ve Sayfalar ---
// Ana layout bileşenleri
import Header from './components/Header';
import Footer from './components/Footer';
// Rota koruma bileşeni
import ProtectedRoute from './components/ProtectedRoute';

// Sayfalar
import Anasayfa from './pages/Anasayfa';
import Urunler from './pages/Urunler';
import Sepetim from './pages/Sepetim';
import Hakkimizda from './pages/Hakkimizda';
import İletisim from './pages/İletisim';
import Blog from './pages/Blog';
import BlogIcerik from './pages/BlogIcerik';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    // AuthProvider, kullanıcı oturum bilgilerini tüm uygulamaya sağlar.
    <AuthProvider>
      {/* CartProvider, sepet bilgilerini tüm uygulamaya sağlar. */}
      <CartProvider>
        {/* Bildirimlerin (toast) gösterileceği alan */}
        <Toaster
          position="top-center" 
          toastOptions={{
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#10B981',
                secondary: '#FFFFFF',
              },
            },
            error: {
              duration: 4000,
            }
          }}
        />

        <div className="bg-white min-h-screen flex flex-col font-sans">
          <Header />

          <main className="flex-grow">
            <Routes>
              {/* --- Herkesin Erişebileceği Rotalar --- */}
              <Route path="/" element={<Anasayfa />} />
              <Route path="/urunler" element={<Urunler />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:blogSlug" element={<BlogIcerik />} />
              <Route path="/hakkimizda" element={<Hakkimizda />} />
              <Route path="/iletisim" element={<İletisim />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              
              {/* --- Sadece Giriş Yapmış Kullanıcıların Erişebileceği Korumalı Rotalar --- */}
              {/* ProtectedRoute, içindeki rotalara erişimden önce kullanıcı girişi kontrolü yapar. */}
              <Route element={<ProtectedRoute />}>
                <Route path="/profile" element={<Profile />} />
                <Route path="/sepetim" element={<Sepetim />} />
              </Route>
              
              {/* TODO: 404 Not Found sayfası için bir rota eklenebilir */}
              {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Routes>
          </main>

          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;