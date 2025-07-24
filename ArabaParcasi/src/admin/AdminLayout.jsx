import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

// İkon Bileşeni
const Icon = ({ path, className = "h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('isAdminLoggedIn');
    navigate('/admin/login');
  };

  const getNavLinkClass = ({ isActive }) =>
    `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
      isActive
        ? 'bg-blue-600 text-white shadow-md'
        : 'text-gray-600 hover:bg-gray-100'
    }`;

  return (
    <div className="flex h-screen w-full bg-gray-100 font-sans">
      {/* SOL MENÜ (SIDEBAR) */}
      <aside className="w-64 flex-col border-r bg-white hidden md:flex">
        <div className="flex h-20 items-center gap-3 px-6 border-b">
          <div className="rounded-lg bg-blue-600 p-2">
            <Icon path="M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.2464 5.1787 7.64298 5.45912C6.03957 5.73953 4.57354 6.57959 3.50758 7.81223C2.44161 9.04487 1.85199 10.5892 1.85199 12.1878C1.85199 13.7863 2.44161 15.3306 3.50758 16.5632C4.57354 17.7959 6.03957 18.6359 7.64298 18.9163C9.2464 19.1968 10.8321 18.8986 12 18.1227M12 6.25278C13.1679 5.47686 14.7536 5.1787 16.357 5.45912C17.9604 5.73953 19.4265 6.57959 20.4924 7.81223C21.5584 9.04487 22.148 10.5892 22.148 12.1878C22.148 13.7863 21.5584 15.3306 20.4924 16.5632C19.4265 17.7959 17.9604 18.6359 16.357 18.9163C14.7536 19.1968 13.1679 18.8986 12 18.1227" className="h-6 w-6 text-white"/>
          </div>
          <span className="text-xl font-bold text-gray-800">ArabaParçası</span>
        </div>
        
        <nav className="flex-1 space-y-1.5 p-4">
          <NavLink to="/admin" end className={getNavLinkClass}><Icon path="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /><span>Gösterge Paneli</span></NavLink>
          <NavLink to="/admin/AdminUrunler" className={getNavLinkClass}><Icon path="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /><span>Ürünler</span></NavLink>
          <NavLink to="/admin/AdminBlog" className={getNavLinkClass}><Icon path="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /><span>Blog Yazıları</span></NavLink>
          <div className="px-3 pt-4 pb-2 text-xs font-semibold uppercase text-gray-400"><span>Site Yönetimi</span></div>
          <NavLink to="/admin/AdminHakkimizda" className={getNavLinkClass}><Icon path="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><span>Hakkımızda</span></NavLink>
          <NavLink to="/admin/AdminIletisim" className={getNavLinkClass}><Icon path="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /><span>Mesajlar</span></NavLink>
        </nav>
      </aside>

      {/* SAĞ TARAF (ANA İÇERİK) */}
      <div className="flex flex-1 flex-col">
        <header className="flex h-20 items-center justify-end border-b bg-white px-8">
          <div className="flex items-center gap-6">
            <button onClick={handleLogout} className="rounded-full p-2 text-gray-500 transition-colors hover:bg-red-50 hover:text-red-600" title="Çıkış Yap">
              <Icon path="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </button>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
