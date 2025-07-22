// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Burayı ekliyoruz
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from './components/ScrollToTop';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>  {/* Uygulamayı bununla sarmalıyoruz */}
       <ScrollToTop /> {/* YENİ BİLEŞENİ BURAYA EKLE */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);