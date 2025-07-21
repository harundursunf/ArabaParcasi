import React from 'react';
import { Link } from 'react-router-dom';

// İkonlar
const FacebookIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>;
const InstagramIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85C2.28 3.856 3.784 2.31 6.05 2.163 7.316 2.11 7.696 2.1 12 2.1zm0 1.626c-3.272 0-3.648.015-4.91.07-2.94.135-4.11 1.28-4.244 4.244-.055 1.255-.068 1.625-.068 4.91s.013 3.655.068 4.91c.135 2.963 1.304 4.11 4.244 4.244 1.262.055 1.638.068 4.91.068s3.648-.013 4.91-.068c2.94-.135 4.11-1.28 4.244-4.244.055-1.255.068-1.625.068-4.91s-.013-3.655-.068-4.91c-.135-2.963-1.304-4.11-4.244-4.244-1.262-.055-1.638-.068-4.91-.068zm0 2.997A5.21 5.21 0 1012 17.21a5.21 5.21 0 000-10.422zm0 8.797A3.583 3.583 0 1112 8.247a3.583 3.583 0 010 7.163zm6.406-9.282c-.767 0-1.388.62-1.388 1.387s.621 1.388 1.388 1.388 1.388-.62 1.388-1.388c0-.766-.62-1.387-1.388-1.387z"></path></svg>;
const TwitterIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.354 4.474A13.94 13.94 0 011.67 3.15a4.92 4.92 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z"></path></svg>;

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Sütun 1: Marka ve Sosyal Medya */}
          <div className="md:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-black uppercase text-white">
              <Link to="/">Lazer<span className="text-yellow-400">Parça</span></Link>
            </h2>
            <p className="mt-4 text-sm">
              Endüstriyel lazer kesim makineleriniz için en kaliteli ve güvenilir yedek parça çözümleri.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="hover:text-yellow-400 transition-colors"><FacebookIcon /></a>
              <a href="#" className="hover:text-yellow-400 transition-colors"><InstagramIcon /></a>
              <a href="#" className="hover:text-yellow-400 transition-colors"><TwitterIcon /></a>
            </div>
          </div>

          {/* Sütun 2: Kurumsal Linkler */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider">Kurumsal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/hakkimizda" className="hover:text-yellow-400 transition-colors">Hakkımızda</Link></li>
              <li><Link to="/blog" className="hover:text-yellow-400 transition-colors">Blog</Link></li>
              <li><Link to="/iletisim" className="hover:text-yellow-400 transition-colors">İletişim</Link></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Kariyer</a></li>
            </ul>
          </div>

          {/* Sütun 3: Yardım Linkleri */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider">Yardım</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Sıkça Sorulan Sorular</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Sipariş Takibi</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">İade Politikası</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Gizlilik Politikası</a></li>
            </ul>
          </div>

          {/* Sütun 4: Bülten Kaydı */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider">Bültenimize Abone Ol</h3>
            <p className="mt-4 text-sm">Yeni ürünler ve özel fırsatlardan ilk sen haberdar ol.</p>
            <form className="mt-4 flex">
              <input type="email" placeholder="E-posta adresiniz" className="w-full bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-400"/>
              <button type="submit" className="bg-yellow-400 text-gray-900 font-bold px-4 rounded-r-md hover:bg-yellow-500 transition-colors">Gönder</button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Alt Footer: Copyright ve Ödeme Yöntemleri */}
      <div className="bg-gray-950 py-4">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} LazerParça. Tüm Hakları Saklıdır.</p>
            <div className="mt-4 md:mt-0">
                {/* Ödeme ikonları buraya eklenebilir. Örnek: */}
                <p className="text-gray-500">Güvenli Ödeme</p>
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;