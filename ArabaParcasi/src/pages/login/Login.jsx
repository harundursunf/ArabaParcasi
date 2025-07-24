import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Auth context'i kullanacağız
import { toast } from 'react-hot-toast';

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth(); // Context'ten login fonksiyonunu al

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Lütfen tüm alanları doldurun.');
      return;
    }

    // --- GİRİŞ KONTROL MANTIĞI (Sadece Test Amaçlı) ---
    // Kullanıcı adı ve şifreyi burada kontrol ediyoruz.
    if (email === 'harun@gmail.com' && password === 'dursun') {
      // Bilgiler doğruysa...

      // Sahte bir kullanıcı verisi oluşturup Context'e gönderiyoruz.
      const fakeUserData = {
        id: 1,
        name: 'Harun Dursun', // İsim ve soyadı da belirleyelim
        email: email,
        role: 'Customer'
      };
      login(fakeUserData);

      // Başarı bildirimi göster ve profile yönlendir.
      toast.success('Başarıyla giriş yapıldı!');
      navigate('/profile');

    } else {
      // Bilgiler yanlışsa...
      toast.error('E-posta veya şifre hatalı.');
    }
  };

  return (
    <div className="bg-gray-50 flex items-center justify-center min-h-[70vh] py-12 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-2">Hesabınıza Giriş Yapın</h2>
        <p className="text-center text-sm text-gray-600 mb-8">
          veya <Link to="/register" className="font-medium text-yellow-600 hover:text-yellow-500">yeni bir hesap oluşturun</Link>
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-posta Adresi</label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="harun@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Şifre</label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="dursun"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Beni Hatırla</label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-yellow-600 hover:text-yellow-500">Şifrenizi mi unuttunuz?</a>
            </div>
          </div>

          <div>
            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-all duration-300">
              Giriş Yap
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;