import React from 'react';

function AccountSettings() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Hesap Ayarları</h3>
      <div className="max-w-md space-y-6">
          <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-3">Şifre Değiştir</h4>
              <div className="space-y-4">
                  <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Mevcut Şifre</label>
                      <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                  </div>
                  <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Yeni Şifre</label>
                      <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                  </div>
                  <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Yeni Şifre (Tekrar)</label>
                      <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                  </div>
              </div>
          </div>
          <div className="pt-2">
              <button className="bg-gray-800 text-white font-bold py-2 px-5 rounded-lg hover:bg-yellow-500 hover:text-black transition-colors">
                  Şifreyi Güncelle
              </button>
          </div>
      </div>
    </div>
  );
}

export default AccountSettings;