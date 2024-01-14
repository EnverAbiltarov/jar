var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

/* Страница Bottle */
router.get('/bottle', function(req, res, next) {
  res.send('<h1>Bottle<h1>');
});

/* Страница Can */
router.get('/can', function(req, res, next) {
  res.send('<h1>can<h1>');
});

/* Страница Decanter */
router.get('/decanter', function(req, res, next) {
  res.send('<h1>decnter<h1>');
});

module.exports = router;