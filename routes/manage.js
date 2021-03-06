const express = require('express');
const router = express.Router();

Category = require('../models/category.js');

router.get('/articles', (req,res,next) => {
  res.render('manage_articles', {title: 'Manage Articles'});
});

router.get('/categories', (req,res,next) => {
  Category.getCategories((err, categories) => {
    if (err) {
      res.send(err);
    }
    res.render('manage_categories', {
      title: 'Categories',
      categories: categories
    });
  });
});

router.get('/articles/add', (req,res,next) => {
  res.render('add_article', {title: 'Create Article'});
});

router.get('/categories/add', (req,res,next) => {
  res.render('add_category', {title: 'Create Catagory'});
});

router.get('/articles/edit/:id', (req,res,next) => {
  res.render('edit_articles', {title: 'Edit Articles'});
});

router.get('/categories/edit/:id', (req,res,next) => {
  Category.getCategoryById(req.params.id, (err, category) => {
    if (err) {
      res.send(err)
    };
    res.render('edit_categories', {
      title: 'Edit Catagory',
      category: category
    });
  });
});




module.exports = router;
