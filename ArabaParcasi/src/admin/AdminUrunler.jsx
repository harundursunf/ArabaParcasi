import React, { useState } from 'react';

// Başlangıç için örnek ürün verileri
const initialProducts = [
  { id: 1, name: 'Performans Hava Filtresi', description: 'Motorun hava akışını %20 artırır, beygir gücü kazandırır.', category: 'Performans', price: '850', stock: 25, imageUrl: 'https://placehold.co/150x150/16a34a/ffffff?text=Filtre', status: 'Aktif' },
  { id: 2, name: 'LED Far Kiti (H4)', description: 'Standart halojen farlara göre 3 kat daha fazla aydınlatma sağlar.', category: 'Aydınlatma', price: '1,200', stock: 18, imageUrl: 'https://placehold.co/150x150/0284c7/ffffff?text=Far', status: 'Aktif' },
  { id: 3, name: 'Seramik Fren Balatası', description: 'Yüksek sıcaklıklara dayanıklı, sessiz ve tozumaz frenleme performansı.', category: 'Fren Sistemi', price: '975', stock: 0, imageUrl: 'https://placehold.co/150x150/dc2626/ffffff?text=Balata', status: 'Pasif' },
  { id: 4, name: '17" Çelik Jant Takımı', description: 'Sportif görünüm ve dayanıklı yapı. 4x100 bijon aralığı.', category: 'Jant & Lastik', price: '8,500', stock: 8, imageUrl: 'https://placehold.co/150x150/4f46e5/ffffff?text=Jant', status: 'Aktif' },
];

// İkonlar
const Icon = ({ path, className = "h-5 w-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d={path} /></svg>
);

// Yeni Ürün Ekleme/Düzenleme Modalı
const ProductModal = ({ isOpen, onClose, onSave, product }) => {
  const [formData, setFormData] = useState(product || { name: '', description: '', category: '', price: '', stock: '', imageUrl: '' });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...formData, id: product ? product.id : Date.now() });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-2xl rounded-lg bg-white p-8 shadow-2xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{product ? 'Ürünü Düzenle' : 'Yeni Ürün Ekle'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Ürün Adı" className="w-full rounded-md border-gray-300" required />
            <input name="category" value={formData.category} onChange={handleChange} placeholder="Kategori" className="w-full rounded-md border-gray-300" required />
          </div>
          <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Açıklama" className="w-full rounded-md border-gray-300" rows="3" required />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input name="price" type="number" value={formData.price} onChange={handleChange} placeholder="Fiyat (TL)" className="w-full rounded-md border-gray-300" required />
            <input name="stock" type="number" value={formData.stock} onChange={handleChange} placeholder="Stok Adedi" className="w-full rounded-md border-gray-300" required />
            <input name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="Resim URL" className="w-full rounded-md border-gray-300" />
          </div>
          <div className="flex justify-end gap-4 pt-4">
            <button type="button" onClick={onClose} className="rounded-lg bg-gray-200 px-6 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-300">İptal</button>
            <button type="submit" className="rounded-lg bg-gray-800 px-6 py-2.5 text-sm font-medium text-white hover:bg-gray-900">Kaydet</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const AdminUrunler = () => {
  const [products, setProducts] = useState(initialProducts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Düzenleme için seçili ürünü tutacak state eklenecek

  const handleSaveProduct = (productData) => {
    setProducts(prev => {
      // Eğer ürün zaten varsa güncelle, yoksa ekle
      const exists = prev.some(p => p.id === productData.id);
      if (exists) {
        return prev.map(p => p.id === productData.id ? { ...p, ...productData, status: p.status || 'Aktif' } : p);
      }
      return [...prev, { ...productData, status: 'Aktif' }];
    });
  };

  const handleDeleteProduct = (productId) => {
    if (window.confirm("Bu ürünü silmek istediğinizden emin misiniz?")) {
        setProducts(prev => prev.filter(p => p.id !== productId));
    }
  };

  return (
    <>
      <ProductModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSave={handleSaveProduct} 
      />
      <div className="space-y-6">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Ürün Yönetimi</h1>
            <p className="mt-1 text-gray-600">Mevcut ürünleri görüntüleyin, düzenleyin veya yeni ürün ekleyin.</p>
          </div>
          <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-emerald-600">
            <Icon path="M12 6v6m0 0v6m0-6h6m-6 0H6" className="mr-2 h-4 w-4" />
            Yeni Ürün Ekle
          </button>
        </header>

        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="p-4 font-medium">Ürün</th>
                <th className="p-4 font-medium">Kategori</th>
                <th className="p-4 font-medium text-center">Stok</th>
                <th className="p-4 font-medium">Fiyat</th>
                <th className="p-4 font-medium text-center">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {products.map(product => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="p-4">
                    <div className="flex items-center gap-4">
                      <img src={product.imageUrl} alt={product.name} className="h-12 w-12 rounded-lg object-cover" onError={(e) => { e.target.src='https://placehold.co/150x150/fecaca/991b1b?text=HATA' }}/>
                      <div>
                        <p className="font-semibold text-gray-800">{product.name}</p>
                        <p className="text-xs text-gray-500 max-w-xs truncate">{product.description}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-gray-600">{product.category}</td>
                  <td className="p-4 text-center font-medium text-gray-700">{product.stock}</td>
                  <td className="p-4 font-semibold text-gray-800">{product.price} TL</td>
                  <td className="p-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 text-gray-400 hover:text-blue-600" title="Düzenle"><Icon path="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></button>
                      <button onClick={() => handleDeleteProduct(product.id)} className="p-2 text-gray-400 hover:text-red-600" title="Sil"><Icon path="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminUrunler;
