var express = require('express');
var router = express.Router();
const Bank = require("../models/bank").Bank

/* GET login/registration page. */
router.get('/logreg', function(req, res, next) {
  res.render('logreg',{title: 'Вход'});
});



/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/


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


// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Jar' });
//   });   

/*router.get('/', function(req, res, next) {
  res.cookie('greeting', 'Hi!!!').render('index', { 
   title: 'Express',
   menu:menu  
   }); 
 });
*/
 /* GET home page. */
 router.get('/', async (req, res, next) => {
  try {
    const menu = await Bank.find({}, { _id: 0, title: 1, nick: 1 });
    req.session.greeting = "Hi!!!"
    res.render('index', { title:'Express', menu: menu, counter:req.session.counter});
  } catch (err) {
    next(err);
  }
});


/* POST login/registration page. */
router.post('/logreg', function(req, res, next) { 
  var username = req.body.username 
  var password = req.body.password
});


module.exports = router;