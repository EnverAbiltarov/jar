const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/all");
const User = require("./models/user.js").User;

const first_user = new User({
  username: "Enver",
  password: "Enver"
});

first_user.save()
  .then(user => {
    console.log(user);
  })
  .catch(err => {
    throw err;
  });