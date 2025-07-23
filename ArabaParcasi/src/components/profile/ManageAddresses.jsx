import React from 'react';

// TODO: Bu veriler backend'den API ile çekilecek
const fakeAddresses = [
    { id: 1, title: 'Ev Adresim', address: 'Örnek Mah. Test Cad. No:12 D:5, Ataşehir, İstanbul' },
    { id: 2, title: 'İş Adresim', address: 'Teknopark Bulvarı, No:1/A, Pendik, İstanbul' }
];

function ManageAddresses() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg">
        <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800">Adreslerim</h3>
            <button className="bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded-lg hover:bg-yellow-500 transition-colors text-sm">
                + Yeni Adres Ekle
            </button>
        </div>
        <div className="space-y-4">
            {fakeAddresses.map(addr => (
                <div key={addr.id} className="p-4 border rounded-lg">
                    <h4 className="font-bold text-gray-800">{addr.title}</h4>
                    <p className="text-gray-600 mt-1">{addr.address}</p>
                    <div className="flex gap-4 mt-3 text-xs font-semibold">
                        <button className="text-blue-600 hover:underline">Düzenle</button>
                        <button className="text-red-600 hover:underline">Sil</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}

export default ManageAddresses;