import React from 'react';

const NewsCard = ({ article }) => {
  // Use a fallback image if the API doesn't provide one
  const imageUrl = article.urlToImage || "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800";

  return (
    <div className="group flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-tighter">
          {article.source.name}
        </div>
      </div>

      <div className="p-5 flex flex-col grow">
        <h3 className="text-lg font-bold text-slate-900 line-clamp-2 leading-tight group-hover:text-red-600 transition-colors">
          {article.title}
        </h3>
        <p className="text-slate-600 text-sm mt-3 line-clamp-3 mb-4">
          {article.description}
        </p>
        
        <div className="mt-auto pt-4 border-t border-slate-50 flex justify-between items-center">
          <span className="text-xs text-slate-400">
            {new Date(article.publishedAt).toLocaleDateString('en-IN')}
          </span>
          <a 
            href={article.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-bold text-red-600 hover:underline"
          >
            Read Full Story →
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;