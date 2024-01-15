const Bank = require("./../models/bank").Bank;

module.exports = async function(req, res, next) {
    try {
      res.locals.nav = [];
      const result = await Bank.find({}, { _id: 0, title: 1, nick: 1 });
      res.locals.nav = result;
      next();

    } catch (err) {
      throw err;
    }
};