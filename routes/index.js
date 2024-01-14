var express = require('express');
var router = express.Router();


  /* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница с бутылкой. */
router.get('/bottle', function(req, res, next) {
  res.render('bank',{
    title:"Бутылка",
    picture:"images/bottle.jpg",
    desc:"Бутылка — ёмкость для долговременного хранения жидкостей, высокий сосуд преимущественно цилиндрической формы и с узким горлом."
  })
})

router.get('/can', function(req, res, next) {
  res.render('bank',{
    title:"Жестяная банка",
    picture:"images/can.jpg",
    desc:"Жестяная упаковка - одна из самых распространенных форм расфасовки. Это рекомендуемый метод упаковки многих пищевых продуктов, таких как безалкогольные напитки, супы или специи."})
});

router.get('/decanter', function(req, res, next) {
  res.render('bank',{
    title:"Графин",
    picture:"images/decanter.jpg",
    desc:"Графин — широкий книзу стеклянный или хрустальный прозрачный сосуд с длинным узким горлом, закрывающимся незакреплённой пробкой."})
});
const Bank = require("../models/bank").Cup


// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Jar' });
//   });


/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const menu = await Bank.find({}, { _id: 0, title: 1, nick: 1 });
    res.render('index', {
      title: 'Bank',
      menu: menu
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;