const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');


const Bank = mongoose.model('bank', { name: String });



const bank = new Bank({ name: 'Фляжка' });
bank.save().then(() => console.log('из титана'));



