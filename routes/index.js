var index = require('../controllers/index');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The Parkist' });
});

module.exports = router;