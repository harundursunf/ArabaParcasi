import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Bileşenleri import edeceğiz
import ProfileInformation from '../components/profile/ProfileInformation';
import OrderHistory from '../components/profile/OrderHistory';
import ManageAddresses from '../components/profile/ManageAddresses';
import AccountSettings from '../components/profile/AccountSettings';

// İkonlar
const UserCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const ArchiveBoxIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>;
const MapPinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const CogIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const LogoutIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>;


function Profile() {
    // Aktif sekmeyi tutmak için state
    const [activeTab, setActiveTab] = useState('bilgilerim');
    const navigate = useNavigate();

    // TODO: Gerçek kullanıcı bilgisi AuthContext'ten alınacak
    const user = { name: 'Harun Dursun', email: 'harunornek@gmail.com' };

    const handleLogout = () => {
        // TODO: Gerçek çıkış işlemi burada yapılacak
        console.log('Çıkış yapıldı');
        navigate('/');
    };
    
    // Menü elemanları
    const menuItems = [
        { id: 'bilgilerim', label: 'Kullanıcı Bilgilerim', icon: <UserCircleIcon /> },
        { id: 'siparislerim', label: 'Siparişlerim', icon: <ArchiveBoxIcon /> },
        { id: 'adreslerim', label: 'Adreslerim', icon: <MapPinIcon /> },
        { id: 'ayarlar', label: 'Hesap Ayarları', icon: <CogIcon /> },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'bilgilerim': return <ProfileInformation user={user} />;
            case 'siparislerim': return <OrderHistory />;
            case 'adreslerim': return <ManageAddresses />;
            case 'ayarlar': return <AccountSettings />;
            default: return <ProfileInformation user={user} />;
        }
    };
    
    return (
        <div className="bg-gray-100 min-h-[80vh]">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-12 md:gap-12">
                    {/* Sol Menü */}
                    <aside className="md:col-span-3">
                        <div className="bg-white p-6 rounded-2xl shadow-lg">
                            <div className="text-center mb-6">
                                <div className="w-24 h-24 rounded-full bg-yellow-400 mx-auto flex items-center justify-center text-4xl font-bold text-white mb-3">
                                    {user.name.charAt(0)}
                                </div>
                                <h2 className="font-bold text-xl text-gray-800">{user.name}</h2>
                                <p className="text-sm text-gray-500">{user.email}</p>
                            </div>
                            <nav className="space-y-2">
                                {menuItems.map(item => (
                                    <button 
                                        key={item.id}
                                        onClick={() => setActiveTab(item.id)}
                                        className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-lg transition-colors duration-200 ${
                                            activeTab === item.id 
                                            ? 'bg-yellow-400 text-gray-900' 
                                            : 'text-gray-600 hover:bg-gray-100'
                                        }`}
                                    >
                                        {item.icon}
                                        <span>{item.label}</span>
                                    </button>
                                ))}
                                <button
                                    onClick={handleLogout}
                                    className="w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                                >
                                    <LogoutIcon />
                                    <span>Çıkış Yap</span>
                                </button>
                            </nav>
                        </div>
                    </aside>

                    {/* Sağ İçerik Alanı */}
                    <main className="md:col-span-9 mt-8 md:mt-0">
                        {renderContent()}
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Profile; 