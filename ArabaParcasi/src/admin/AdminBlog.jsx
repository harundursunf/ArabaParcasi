import React, { useState } from 'react';

// Başlangıç için örnek blog yazıları
const initialPosts = [
  { id: 1, title: 'Doğru Araba Parçası Nasıl Seçilir?', content: 'Aracınız için doğru yedek parçayı seçmek, hem performans hem de güvenlik açısından kritik öneme sahiptir. Bu rehberde, şasi numarasından doğru parçayı bulmaktan...', category: 'Rehber', imageUrl: 'https://placehold.co/150x150/16a34a/ffffff?text=Rehber', date: '24 Temmuz 2025', status: 'Yayınlandı' },
  { id: 2, title: '2025 Model Araçlar İçin En İyi 5 Aksesuar', content: 'Yeni aracınızı daha konforlu ve teknolojik hale getirmek için en iyi 5 aksesuarı sizler için derledik. Listemizde multimedya sistemlerinden...', category: 'İnceleme', imageUrl: 'https://placehold.co/150x150/0284c7/ffffff?text=Aksesuar', date: '22 Temmuz 2025', status: 'Yayınlandı' },
  { id: 3, title: 'Fren Balatası Değişimi: Ne Zaman ve Nasıl?', content: 'Frenler, bir aracın en önemli güvenlik bileşenidir. Fren balatalarının ne zaman değiştirilmesi gerektiğini ve bu işlemin adımlarını detaylıca anlattık.', category: 'Teknik', imageUrl: 'https://placehold.co/150x150/dc2626/ffffff?text=Fren', date: '20 Temmuz 2025', status: 'Taslak' },
];

// İkonlar
const Icon = ({ path, className = "h-5 w-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d={path} /></svg>
);

// Yazı Ekleme/Düzenleme Modalı
const PostModal = ({ isOpen, onClose, onSave, post }) => {
  const [formData, setFormData] = useState(post || { title: '', content: '', category: '', imageUrl: '' });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDate = new Date().toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
    onSave({ ...formData, id: post ? post.id : Date.now(), date: newDate });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-3xl rounded-lg bg-white p-8 shadow-2xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{post ? 'Yazıyı Düzenle' : 'Yeni Yazı Ekle'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="title" value={formData.title} onChange={handleChange} placeholder="Yazı Başlığı" className="w-full rounded-md border-gray-300 text-lg font-semibold" required />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="category" value={formData.category} onChange={handleChange} placeholder="Kategori (Örn: Rehber, Teknik)" className="w-full rounded-md border-gray-300" required />
            <input name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="Kapak Fotoğrafı URL" className="w-full rounded-md border-gray-300" />
          </div>
          <textarea name="content" value={formData.content} onChange={handleChange} placeholder="Blog Yazısı İçeriği" className="w-full rounded-md border-gray-300" rows="8" required />
          <div className="flex justify-end gap-4 pt-4">
            <button type="button" onClick={onClose} className="rounded-lg bg-gray-200 px-6 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-300">İptal</button>
            <button type="submit" className="rounded-lg bg-gray-800 px-6 py-2.5 text-sm font-medium text-white hover:bg-gray-900">Kaydet</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const AdminBlog = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState(null);

  const handleSavePost = (postData) => {
    setPosts(prev => {
      const exists = prev.some(p => p.id === postData.id);
      if (exists) {
        return prev.map(p => p.id === postData.id ? { ...p, ...postData, status: p.status || 'Taslak' } : p);
      }
      return [{ ...postData, status: 'Taslak' }, ...prev];
    });
  };

  const handleDeletePost = (postId) => {
    if (window.confirm("Bu yazıyı kalıcı olarak silmek istediğinizden emin misiniz?")) {
        setPosts(prev => prev.filter(p => p.id !== postId));
    }
  };
  
  const handleEditPost = (post) => {
    setEditingPost(post);
    setIsModalOpen(true);
  };

  const openNewPostModal = () => {
    setEditingPost(null);
    setIsModalOpen(true);
  };

  return (
    <>
      <PostModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSave={handleSavePost}
        post={editingPost}
      />
      <div className="space-y-6">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Blog Yönetimi</h1>
            <p className="mt-1 text-gray-600">Mevcut yazıları düzenleyin veya yeni bir yazı oluşturun.</p>
          </div>
          <button onClick={openNewPostModal} className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-emerald-600">
            <Icon path="M12 6v6m0 0v6m0-6h6m-6 0H6" className="mr-2 h-4 w-4" />
            Yeni Yazı Ekle
          </button>
        </header>

        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="p-4 font-medium">Yazı</th>
                <th className="p-4 font-medium">Kategori</th>
                <th className="p-4 font-medium">Tarih</th>
                <th className="p-4 font-medium text-center">Durum</th>
                <th className="p-4 font-medium text-center">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {posts.map(post => (
                <tr key={post.id} className="hover:bg-gray-50">
                  <td className="p-4">
                    <div className="flex items-center gap-4">
                      <img src={post.imageUrl} alt={post.title} className="h-12 w-12 flex-shrink-0 rounded-lg object-cover" onError={(e) => { e.target.src='https://placehold.co/150x150/fecaca/991b1b?text=HATA' }}/>
                      <div>
                        <p className="font-semibold text-gray-800">{post.title}</p>
                        <p className="text-xs text-gray-500 max-w-md truncate">{post.content}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-gray-600">{post.category}</td>
                  <td className="p-4 text-gray-600">{post.date}</td>
                  <td className="p-4 text-center">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${post.status === 'Yayınlandı' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-center gap-2">
                      <button onClick={() => handleEditPost(post)} className="p-2 text-gray-400 hover:text-blue-600" title="Düzenle"><Icon path="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></button>
                      <button onClick={() => handleDeletePost(post.id)} className="p-2 text-gray-400 hover:text-red-600" title="Sil"><Icon path="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></button>
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

export default AdminBlog;
