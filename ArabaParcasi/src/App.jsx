import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Context'ler
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

// Ana Bileşenler
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

// Site Sayfaları
import Anasayfa from './pages/Anasayfa';
import Urunler from './pages/Urunler';
import Sepetim from './pages/Sepetim';
import Hakkimizda from './pages/Hakkimizda';
import İletisim from './pages/İletisim';
import Blog from './pages/Blog';
import BlogIcerik from './pages/BlogIcerik';
import Profile from './pages/Profile';
import Login from './pages/login/Login';
import Register from './pages/login/Register';
import UrunDetay from './pages/Detail';

// Admin Sayfaları
import AdminLayout from './admin/AdminLayout';
import General from './admin/general';
import AdminUrunler from './admin/AdminUrunler';
import AdminBlog from './admin/AdminBlog';
import AdminLogin from './admin/AdminLogin';
import ProtectedAdminRoute from './admin/ProtectedAdminRoute';

// Bu bileşen, Header ve Footer'ı tüm site sayfaları için ortak bir düzende tutar.
const SiteLayout = () => (
  <div className="bg-white min-h-screen flex flex-col font-sans">
    <Header />
    <main className="flex-grow"><Outlet /></main>
    <Footer />
  </div>
);

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Toaster position="top-center" />
        <Routes>
          {/* --- ADMIN PANELİ ROTALARI --- */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route element={<ProtectedAdminRoute />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<General />} />
              <Route path="AdminUrunler" element={<AdminUrunler />} />
              <Route path="AdminBlog" element={<AdminBlog />} />
            </Route>
          </Route>

          {/* --- GENEL SİTE ROTALARI --- */}
          {/* Tüm site sayfaları SiteLayout'un içinde render edilecek */}
          <Route path="/" element={<SiteLayout />}>
            <Route index element={<Anasayfa />} />
            <Route path="urunler" element={<Urunler />} />

            {/* HATA BURADAYDI ve DÜZELTİLDİ */}
            {/* Ürün detay rotası, ürünler listeleme rotasıyla aynı seviyede olmalı. */}
            <Route path="urunler/:id" element={<UrunDetay />} />

            <Route path="blog" element={<Blog />} />
            <Route path="blog/:blogSlug" element={<BlogIcerik />} />
            <Route path="hakkimizda" element={<Hakkimizda />} />
            <Route path="iletisim" element={<İletisim />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route element={<ProtectedRoute />}>
              <Route path="profile" element={<Profile />} />
              <Route path="sepetim" element={<Sepetim />} />
            </Route>
          </Route>
        </Routes>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
