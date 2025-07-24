import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedAdminRoute = () => {
  // Tarayıcı oturumunda 'isAdminLoggedIn' anahtarı var mı diye kontrol et
  const isAdmin = sessionStorage.getItem('isAdminLoggedIn');

  // Eğer anahtar varsa (giriş yapılmışsa), istenen sayfayı göster
  // Yoksa (giriş yapılmamışsa), admin giriş sayfasına yönlendir
  return isAdmin ? <Outlet /> : <Navigate to="/admin/login" replace />;
};

export default ProtectedAdminRoute;
