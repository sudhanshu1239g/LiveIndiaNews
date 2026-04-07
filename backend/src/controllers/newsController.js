const axios = require('axios');
const { redisClient } = require('../config/redis');

// @desc    Get news by category
// @route   GET /api/news/:category
const getNewsByCategory = async (req, res) => {
  const { category } = req.params;
  const cacheKey = `news:${category}`;

  try {
    // 1. Check Redis for a "Cache Hit"
    const cachedData = await redisClient.get(cacheKey);
    if (cachedData) {
      console.log(`Cache Hit for: ${category}`);
      return res.status(200).json(JSON.parse(cachedData));
    }

    // 2. "Cache Miss" - Fetch from External API (e.g., NewsAPI.org)
    console.log(`Cache Miss for: ${category}. Fetching from API...`);
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        category: category,
        apiKey: process.env.NEWS_API_KEY,
        country: 'us', // Or 'in' for India
        pageSize: 20
      }
    });

    const articles = response.data.articles;

    // 3. Store in Redis for 15 minutes (900 seconds)
    // This prevents hitting the API rate limit if 100 users ask for the same news.
    await redisClient.setEx(cacheKey, 900, JSON.stringify(articles));

    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving news", error: error.message });
  }
};

module.exports = { getNewsByCategory };