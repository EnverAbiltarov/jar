const express = require('express');
const router = express.Router();
const Bank = require("../models/bank").Bank;

// /* GET users listing. */
//router.get('/', (req, res, next) => {
//  res.send('Новый маршрутизатор, для маршрутов, начинающихся с banks');
//});


/* Страница героев */
router.get("/:nick", async (req, res, next) => {
    try {
      const bank = await Bank.findOne({ nick: req.params.nick });
      console.log(bank);
      if (!bank) {
        throw new Error("Нет такого!");
      }
      res.render('bank', {
        title: bank.title,
        picture: bank.avatar,
        desc: bank.desc
      });
    } catch (err) {
      next(err);
    }
  });


module.exports = router;