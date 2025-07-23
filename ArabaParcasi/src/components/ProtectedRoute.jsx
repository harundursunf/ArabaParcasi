import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute() {
  const { user } = useAuth();

  // Eğer giriş yapmış bir kullanıcı yoksa, login sayfasına yönlendir.
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Eğer giriş yapmış bir kullanıcı varsa, istenen sayfayı (Profile, Sepetim vb.) göster.
  return <Outlet />;
}

export default ProtectedRoute;