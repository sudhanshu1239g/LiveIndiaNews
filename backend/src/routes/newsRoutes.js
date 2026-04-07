const express = require('express');
const router = express.Router();
const { getNewsByCategory } = require('../controllers/newsController');

// This one route handles /api/news/technology, /api/news/sports, etc.
router.get('/:category', getNewsByCategory);

module.exports = router;