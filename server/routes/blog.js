const express = require('express');
const router = express.Router();

const auth = require('../services/auth-service');
const BlogCtrl = require('../controllers/blog');

router.get('', BlogCtrl.getBlogs);

router.get('/me',  auth.checkJwt, BlogCtrl.getUserBlogs);

router.get('/:slug', BlogCtrl.getBlogBySlug);

router.get('/me/:id', auth.checkJwt, BlogCtrl.getBlogById);

router.post('/new', auth.checkJwt, BlogCtrl.saveBlog);

router.patch('/:id', auth.checkJwt, BlogCtrl.updateBlog);

router.delete('/:id', auth.checkJwt, BlogCtrl.deleteBlog);

module.exports = router;

