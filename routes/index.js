var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'How to host a simple webpage at azure with ssl for free' });
});

module.exports = router;
