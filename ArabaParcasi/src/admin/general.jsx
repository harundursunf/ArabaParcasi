import React from 'react';

// --- İkonlar ---
const Icon = ({ path, className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
);

// --- Bileşenler ---

// Özet Kartı
const StatCard = ({ title, value, change, icon, color }) => (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <div className={`rounded-full p-1.5 ${color.bg} ${color.text}`}>{icon}</div>
        </div>
        <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>
        {change && <p className="text-xs text-gray-500 mt-1">{change}</p>}
    </div>
);

// Sipariş Durumları
const OrderStatus = () => {
    const statuses = [
        { name: 'Bekleyen', count: 12, color: 'bg-yellow-400' },
        { name: 'Kargoda', count: 8, color: 'bg-blue-400' },
        { name: 'Tamamlanan', count: 64, color: 'bg-emerald-400' },
        { name: 'İptal', count: 3, color: 'bg-red-400' },
    ];
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800">Sipariş Durumları</h3>
            <div className="mt-4 space-y-4">
                {statuses.map(status => (
                    <div key={status.name}>
                        <div className="flex justify-between text-sm font-medium text-gray-600">
                            <span>{status.name}</span>
                            <span>{status.count}</span>
                        </div>
                        <div className="mt-1 h-2 w-full rounded-full bg-gray-200">
                            <div className={`h-2 rounded-full ${status.color}`} style={{ width: `${status.count}%` }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Çok Satan Ürünler
const TopProducts = () => {
    const products = [
        { name: 'Performans Hava Filtresi', sales: 124, img: 'https://placehold.co/40x40/16a34a/ffffff?text=F' },
        { name: 'LED Far Kiti (H4)', sales: 98, img: 'https://placehold.co/40x40/0284c7/ffffff?text=L' },
        { name: 'Seramik Fren Balatası', sales: 72, img: 'https://placehold.co/40x40/dc2626/ffffff?text=B' },
    ];
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800">Çok Satan Ürünler</h3>
            <div className="mt-4 space-y-4">
                {products.map(product => (
                    <div key={product.name} className="flex items-center gap-4">
                        <img src={product.img} alt={product.name} className="h-10 w-10 rounded-lg object-cover"/>
                        <div className="flex-1">
                            <p className="font-medium text-gray-800">{product.name}</p>
                            <p className="text-xs text-gray-500">{product.sales} adet satıldı</p>
                        </div>
                        <Icon path="M13 7l5 5m0 0l-5 5m5-5H6" className="h-5 w-5 text-gray-400"/>
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- Ana Gösterge Paneli ---
const General = () => {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Gösterge Paneli</h1>
                <p className="mt-1 text-gray-600">İşletmenizin genel durumuna hoş geldiniz.</p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <StatCard title="Toplam Ciro" value="₺983,410" change="+5.8% vs geçen ay" icon={<Icon path="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>} color={{bg: 'bg-emerald-100', text: 'text-emerald-600'}} />
                <StatCard title="Toplam Sipariş" value="58,375" change="+2.8% vs geçen ay" icon={<Icon path="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>} color={{bg: 'bg-sky-100', text: 'text-sky-600'}} />
                <StatCard title="Toplam Müşteri" value="1,250" change="+1.2% vs geçen ay" icon={<Icon path="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.125-1.273-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.125-1.273.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>} color={{bg: 'bg-indigo-100', text: 'text-indigo-600'}} />
                <StatCard title="Stoktaki Ürün" value="3,450" change="5 ürün kritik stokta" icon={<Icon path="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>} color={{bg: 'bg-amber-100', text: 'text-amber-600'}} />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <OrderStatus />
                </div>
                <div>
                    <TopProducts />
                </div>
            </div>
        </div>
    );
};

export default General;
