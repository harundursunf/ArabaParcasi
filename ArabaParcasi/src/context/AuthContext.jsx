import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    // UYGULAMA İLK AÇILDIĞINDA KULLANICI GİRİŞ YAPMAMIŞTIR.
    // Bu yüzden başlangıç değeri "null" olmalıdır.
    const [user, setUser] = useState(null);

    // Login.jsx'ten çağrılan fonksiyon.
    // Başarılı giriş sonrası kullanıcı bilgilerini doldurur.
    const login = (userData) => {
        setUser(userData);
    };

    // Profile sayfasındaki "Çıkış Yap" butonu bu fonksiyonu çağırır.
    // Kullanıcı bilgilerini temizler.
    const logout = () => {
        // TODO: Backend ile çıkış işlemi de yapılacak
        setUser(null);
    };

    const value = {
        user,
        login,
        logout
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};