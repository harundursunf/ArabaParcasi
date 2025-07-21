import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { tumYazilar } from '../data/blogData'; // Veriyi merkezi dosyadan import ediyoruz.

function BlogIcerik() {
    const { blogSlug } = useParams();
    const yazi = tumYazilar.find(y => y.slug === blogSlug);

    if (!yazi) {
        return (
            <div className="text-center py-20">
                <h1 className="text-4xl font-bold">404 - Yazı Bulunamadı</h1>
                <p className="mt-4">Aradığınız blog yazısı mevcut değil.</p>
                <Link to="/blog" className="mt-8 inline-block bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full">Tüm Yazılara Geri Dön</Link>
            </div>
        );
    }

    return (
        <div className="bg-white">
            <header className="relative h-[40vh] min-h-[300px]">
                <img src={yazi.resim} alt={yazi.baslik} className="absolute inset-0 w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative h-full flex flex-col justify-end p-8 md:p-12 text-white">
                    <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full self-start">{yazi.kategori}</span>
                    <h1 className="text-3xl md:text-5xl font-black mt-4">{yazi.baslik}</h1>
                    <p className="mt-2 text-gray-200">{yazi.tarih}</p>
                </div>
            </header>
            <main className="container mx-auto px-6 py-12">
                <article 
                    className="max-w-4xl mx-auto text-gray-700 leading-relaxed [&_p]:mb-6 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-gray-900 [&_h3]:mt-8 [&_h3]:mb-4 [&_ul]:list-disc [&_ul]:list-inside [&_ul]:pl-4 [&_ul]:space-y-2 [&_ul]:my-6 [&_strong]:font-bold [&_strong]:text-gray-800 [&_figure]:my-8 [&_img]:rounded-lg [&_img]:shadow-md [&_figcaption]:text-center [&_figcaption]:text-sm [&_figcaption]:text-gray-500 [&_figcaption]:mt-2"
                    dangerouslySetInnerHTML={{ __html: yazi.icerik }} 
                />
            </main>
        </div>
    );
}

export default BlogIcerik;