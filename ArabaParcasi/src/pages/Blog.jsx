import React from 'react';
import { Link } from 'react-router-dom';
import { tumYazilar } from '../data/blogData'; // Veriyi merkezi dosyadan import ediyoruz.

function Blog() {
  return (
    <div className="bg-gray-100">
        <header className="bg-gray-900 text-center py-16">
            <h1 className="text-4xl md:text-5xl font-black uppercase text-white tracking-wider">
                BLOG & <span className="text-yellow-400">MAKALELER</span>
            </h1>
            <p className="text-lg text-gray-300 mt-3">Sektördeki yenilikler, uzman ipuçları ve teknik bilgiler</p>
        </header>
        <main className="container mx-auto px-6 py-16">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
                {tumYazilar.map(yazi => (
                    <div key={yazi.id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                        <div className="relative">
                            <img src={yazi.resim} alt={yazi.baslik} className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                            <span className="absolute top-3 right-3 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">{yazi.kategori}</span>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-gray-900 h-20">{yazi.baslik}</h3>
                            <p className="mt-2 text-gray-600 flex-grow">{yazi.ozet}</p>
                            <Link to={`/blog/${yazi.slug}`} className="mt-4 font-bold text-yellow-500 hover:text-yellow-600 self-start">
                                Devamını Oku →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    </div>
  );
}

export default Blog;