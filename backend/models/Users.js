const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: String,
  jobrole: String,
  mobile: String,
  address: String,
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
