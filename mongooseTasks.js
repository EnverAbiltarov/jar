var mongoose = require('mongoose') 
mongoose.connect('mongodb://localhost/test') 
var Bank = require("./models/bank").Bank

var schema = mongoose.Schema({name: String})

var bank = new Bank({
      title: "Бутылка",
      nick: "bottle"
})

bank.save().then(() => {
      console.log(bank.title)
})