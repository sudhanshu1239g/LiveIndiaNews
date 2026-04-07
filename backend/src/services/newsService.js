const axios = require('axios');
const { redisClient } = require('../config/redis');

const startNewsWorker = (io) => {
    // Run this function every 15 minutes (900,000 ms)
    setInterval(async () => {
        try {
            console.log('Fetching periodic news updates...');
            const response = await axios.get('https://newsapi.org/v2/top-headlines', {
                params: {
                    category: 'general',
                    apiKey: process.env.NEWS_API_KEY,
                    country: 'us'
                }
            });

            const articles = response.data.articles;

            // 1. Update the Redis cache for the 'general' category
            await redisClient.setEx('news:general', 900, JSON.stringify(articles));

            // 2. Broadcast the 'Breaking News' to ALL connected socket clients
            io.emit('breaking-news', articles); // Send the top headline
            io.emit('news-update', articles);      // Send the full list

            console.log('✅ Real-time broadcast sent to all clients.');
        } catch (error) {
            console.error('Worker Error:', error.message);
        }
    }, 900000); 
};

module.exports = { startNewsWorker };