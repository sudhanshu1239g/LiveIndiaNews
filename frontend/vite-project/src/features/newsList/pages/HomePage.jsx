import React from 'react';
import { useNews } from '../../../hooks/useNews';

const HomePage = () => {
  const { articles, loading } = useNews('general');

  if (loading) return (
    <div className="flex justify-center items-center h-screen bg-slate-50 text-slate-500 font-medium">
      Fetching the pulse of India...
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-12 border-l-8 border-red-600 pl-6">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Top Headlines</h1>
        <p className="text-slate-500 mt-2 font-medium italic">Verified real-time updates across the nation.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {articles.map((article, index) => (
          <div key={index} className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col">
            <div className="relative overflow-hidden">
              <img 
                src={article.urlToImage || 'https://via.placeholder.com/400x250'} 
                alt={article.title} 
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">
                New
              </span>
            </div>
            
            <div className="p-6 flex flex-col grow">
              <h3 className="text-xl font-bold text-slate-800 leading-snug group-hover:text-red-600 transition-colors line-clamp-2">
                {article.title}
              </h3>
              <p className="text-slate-600 text-sm mt-3 line-clamp-3 leading-relaxed">
                {article.description}
              </p>
              <div className="mt-auto pt-6 border-t border-slate-50 flex justify-between items-center">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">
                   {article.source.name}
                </span>
                <a 
                  href={article.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-red-600 font-bold text-sm hover:underline underline-offset-4"
                >
                  Full Story →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;