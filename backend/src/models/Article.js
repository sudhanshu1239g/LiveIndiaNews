const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  source: { name: String },
  author: String,
  title: { type: String, required: true },
  description: String,
  url: { type: String, unique: true }, // Ensure we don't save duplicates
  urlToImage: String,
  publishedAt: Date,
  content: String,
  category: { type: String, required: true, index: true } // Indexed for fast filtering
});

module.exports = mongoose.model('Article', articleSchema);