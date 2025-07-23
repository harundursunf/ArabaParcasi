import React from 'react';

// TODO: Bu veriler backend'den API ile çekilecek
const fakeOrders = [
  { id: 'TR-12345', date: '15.07.2025', total: 1850.50, status: 'Teslim Edildi' },
  { id: 'TR-12344', date: '02.07.2025', total: 450.00, status: 'Teslim Edildi' },
  { id: 'TR-12342', date: '21.06.2025', total: 35000.00, status: 'İptal Edildi' },
];

const statusStyles = {
    'Teslim Edildi': 'bg-green-100 text-green-800',
    'Kargolandı': 'bg-blue-100 text-blue-800',
    'İptal Edildi': 'bg-red-100 text-red-800',
    'Hazırlanıyor': 'bg-yellow-100 text-yellow-800',
};

function OrderHistory() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Sipariş Geçmişim</h3>
      <div className="space-y-4">
        {fakeOrders.length > 0 ? (
          fakeOrders.map(order => (
            <div key={order.id} className="grid grid-cols-4 gap-4 items-center p-4 rounded-lg border hover:bg-gray-50">
              <div className="font-semibold text-gray-800">{order.id}</div>
              <div className="text-gray-600">{order.date}</div>
              <div className="font-bold text-gray-900">{order.total.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}</div>
              <div>
                <span className={`px-3 py-1 text-xs font-bold rounded-full ${statusStyles[order.status] || 'bg-gray-100 text-gray-800'}`}>
                  {order.status}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Henüz hiç sipariş vermediniz.</p>
        )}
      </div>
    </div>
  );
}

export default OrderHistory;