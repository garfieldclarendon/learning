const express = require('express');
require('es6-promise').polyfill();
require('isomorphic-fetch');

const router = express.Router();

/* GET home page. */
router.get('*', function(req, res, next) {
  res.render('index', { title: 'Learn Ardiuno' });
});

module.exports = router;
