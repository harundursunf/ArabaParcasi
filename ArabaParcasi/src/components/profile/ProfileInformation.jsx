import React from 'react';

function ProfileInformation({ user }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Kullanıcı Bilgilerim</h3>
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-500">Tam Adı</label>
          <p className="text-lg text-gray-900">{user.name}</p>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-500">E-posta Adresi</label>
          <p className="text-lg text-gray-900">{user.email}</p>
        </div>
        <div className="pt-4">
          <button className="bg-gray-800 text-white font-bold py-2 px-5 rounded-lg hover:bg-yellow-500 hover:text-black transition-colors">
            Bilgileri Düzenle
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileInformation;