const express = require('express');
const router = express.Router();
const Bank = require("../models/bank").Banks;
var async = require("async")

// /* GET users listing. */
// router.get('/', (req, res, next) => {
//   res.send('Новый маршрутизатор, для маршрутов, начинающихся с banks');
// });


/* Страница героев */
  router.get('/:nick', async function(req, res, next) {
    try {
      const [bank, banks] = await Promise.all([
        Bank.findOne({ nick: req.params.nick }),
        Bank.find({}, { _id: 0, title: 1, nick: 1 })
      ]);
    
      if (!bank) {
        throw new Error("Нет такого");
      }
      
      renderCup(res, bank.title, bank.avatar, bank.desc, banks);
    } catch (err) {
      next(err);
    }
  });
  
  function renderCup(res, title, picture, desc, banks) {
    console.log(banks);
  
    res.render('bank', {
      title: title,
      picture: picture,
      desc: desc,
      menu: banks
    });
  }
  
  
  
  module.exports = router;