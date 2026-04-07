import React from 'react';
import { useNews } from '../../../hooks/useNews';
import NewsCard from './NewsCard';

const NewsFeed = ({ category, title }) => {
  const { articles, loading } = useNews(category);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-4">
        <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-slate-500 font-medium animate-pulse text-sm uppercase tracking-widest">
          Syncing with {category} feed...
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-10 border-l-4 border-red-600 pl-4">
        <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tight">{title}</h1>
        <p className="text-slate-500 text-sm italic">Latest updates from the LiveIndia Network.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <NewsCard key={article.url || index} article={article} />
          ))
        ) : (
          <p className="text-slate-400">No news found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default NewsFeed;