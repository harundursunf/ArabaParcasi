import React from 'react';
import { Link } from 'react-router-dom';

// --- SVG İkonları ---
const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.125-1.273-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.125-1.273.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);
const ProductsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
);
const OrdersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
);
const RevenueIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 14v1m0-6v.01M12 12a2 2 0 00-2 2c0 .51.198 1.01.545 1.414M12 12a2 2 0 012 2c0 .51-.198 1.01-.545 1.414m0 0A2 2 0 0112 16" />
    </svg>
);

const IconWrapper = ({ icon, bgColorClass, iconColorClass }) => (
  <div className={`rounded-full p-3 ${bgColorClass}`}>
    <span className={iconColorClass}>{icon}</span>
  </div>
);

const StatCard = ({ title, value, icon, change, changeType }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 flex items-center gap-6 transform hover:-translate-y-1 transition-transform duration-300">
    {icon}
    <div>
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
      {change && (
        <p className={`text-xs mt-1 font-semibold ${changeType === 'increase' ? 'text-green-500' : 'text-red-500'}`}>
          {change}
        </p>
      )}
    </div>
  </div>
);

const General = () => {
  const recentOrders = [
    { id: '#1234', user: 'Ahmet Yılmaz', date: '24.07.2025', total: '150 TL', status: 'Tamamlandı' },
    { id: '#1235', user: 'Ayşe Kaya', date: '24.07.2025', total: '275 TL', status: 'Beklemede' },
    { id: '#1236', user: 'Mehmet Öztürk', date: '23.07.2025', total: '80 TL', status: 'İptal Edildi' },
    { id: '#1237', user: 'Fatma Demir', date: '23.07.2025', total: '450 TL', status: 'Tamamlandı' },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case 'Tamamlandı': return 'bg-green-100 text-green-800';
      case 'Beklemede': return 'bg-yellow-100 text-yellow-800';
      case 'İptal Edildi': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Gösterge Paneli</h1>
        <p className="text-slate-500 mt-1">Sitenin genel durumuna hoş geldiniz.</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        <StatCard title="Toplam Gelir" value="₺14,850" icon={<IconWrapper icon={<RevenueIcon />} bgColorClass="bg-green-100" iconColorClass="text-green-600" />} change="+%5.2 vs geçen ay" changeType="increase" />
        <StatCard title="Toplam Sipariş" value="215" icon={<IconWrapper icon={<OrdersIcon />} bgColorClass="bg-blue-100" iconColorClass="text-blue-600" />} change="+12 sipariş bugün" changeType="increase" />
        <StatCard title="Toplam Kullanıcı" value="1,250" icon={<IconWrapper icon={<UsersIcon />} bgColorClass="bg-indigo-100" iconColorClass="text-indigo-600" />} change="+2 yeni üye" changeType="increase" />
        <StatCard title="Toplam Ürün" value="340" icon={<IconWrapper icon={<ProductsIcon />} bgColorClass="bg-pink-100" iconColorClass="text-pink-600" />} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
          <h3 className="font-semibold text-gray-800 text-lg mb-4">Son Siparişler</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-xs text-gray-500 uppercase border-b"><th className="py-3 px-4">Sipariş ID</th><th className="py-3 px-4">Müşteri</th><th className="py-3 px-4">Tarih</th><th className="py-3 px-4">Tutar</th><th className="py-3 px-4 text-center">Durum</th></tr>
              </thead>
              <tbody>
                {recentOrders.map(order => (
                  <tr key={order.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-700">{order.id}</td><td className="py-3 px-4 text-gray-600">{order.user}</td><td className="py-3 px-4 text-gray-600">{order.date}</td><td className="py-3 px-4 text-gray-600">{order.total}</td><td className="py-3 px-4 text-center"><span className={`text-xs font-semibold px-2 py-1 rounded-full ${getStatusClass(order.status)}`}>{order.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="font-semibold text-gray-800 text-lg mb-4">Hızlı İşlemler</h3>
          <div className="flex flex-col gap-4">
            <Link to="/admin/AdminUrunler" className="w-full text-left p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" /></svg>
              Ürün Yönetimi
            </Link>
            <button className="w-full text-left p-4 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" /></svg>
              Yorumları Yönet
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default General;
