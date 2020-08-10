const express = require('express');
const router = express.Router();
const Post = require('../../models/Post');

router.get('/travel', async (req, res) => {
  const posts = await Post.find();
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(posts.reverse());
});

router.get('/food', async (req, res) => {
  const posts = await Post.find();
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(posts);
});

module.exports = router;
