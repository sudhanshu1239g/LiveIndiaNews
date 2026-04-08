import { useState, useEffect } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const socket = io(API_URL, {
    withCredentials: true,
    // Add this to help Socket.io deal with serverless environments if you stay on Vercel
    transports: ['polling', 'websocket'] 
});

export const useNews = (category) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        // Calling your backend dynamic route: /api/news/:category
        const response = await axios.get(`${API_URL}/api/news/${category}`);
        setArticles(response.data);
      } catch (err) {
        console.error("Error fetching news:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();

    // LISTEN for Real-Time "Breaking News" updates from Socket.io
    socket.on('breaking-news', (newArticle) => {
        // Add new article to the top of the list instantly!
        setArticles((prev) => [newArticle, ...prev]);
    });

    return () => socket.off('breaking-news');
  }, [category]);

  return { articles, loading };
};