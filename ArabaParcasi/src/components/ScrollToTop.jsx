// src/components/ScrollToTop.jsx

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  // useLocation hook'u ile o anki URL bilgisini alıyoruz
  const { pathname } = useLocation();

  // useEffect hook'u ile pathname her değiştiğinde bir işlem yapmasını sağlıyoruz
  useEffect(() => {
    // Sayfayı anında en tepeye (koordinat 0, 0) kaydır
    window.scrollTo(0, 0);
  }, [pathname]); // Bu effect, sadece pathname (URL yolu) değiştiğinde çalışır

  // Bu bileşenin ekranda bir şey göstermesine gerek yok, o yüzden null dönüyoruz
  return null;
}

export default ScrollToTop;