// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Burayı ekliyoruz
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>  {/* Uygulamayı bununla sarmalıyoruz */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);