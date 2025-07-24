import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basit frontend doğrulaması
    if (formData.password !== formData.confirmPassword) {
      toast.error('Şifreler eşleşmiyor!');
      return;
    }
    if (!formData.termsAccepted) {
      toast.error('Lütfen kullanım koşullarını kabul edin.');
      return;
    }

    // TODO: Backend'e kayıt isteği gönderilecek
    console.log('Kayıt bilgileri:', formData);
    toast.success('Hesabınız başarıyla oluşturuldu!');
    navigate('/login'); // Kayıt sonrası login sayfasına yönlendir
  };

  return (
    <div className="bg-gray-50 flex items-center justify-center min-h-[70vh] py-12 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-2">Yeni Hesap Oluştur</h2>
        <p className="text-center text-sm text-gray-600 mb-8">
          Zaten bir hesabınız var mı? <Link to="/login" className="font-medium text-yellow-600 hover:text-yellow-500">Giriş yapın</Link>
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input name="name" type="text" placeholder="Adınız" required value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            <input name="surname" type="text" placeholder="Soyadınız" required value={formData.surname} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          </div>
          <input name="email" type="email" placeholder="E-posta Adresiniz" required value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          <input name="password" type="password" placeholder="Şifreniz" required value={formData.password} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          <input name="confirmPassword" type="password" placeholder="Şifrenizi Onaylayın" required value={formData.confirmPassword} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input id="terms" name="termsAccepted" type="checkbox" checked={formData.termsAccepted} onChange={handleChange} className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded" />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="terms" className="font-medium text-gray-700">
                <a href="#" className="text-yellow-600 hover:underline">Kullanım Koşulları ve Gizlilik Politikası</a>'nı kabul ediyorum.
              </label>
            </div>
          </div>

          <div>
            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-all duration-300">
              Hesap Oluştur
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;