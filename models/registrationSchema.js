const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const registrationSchema = new Schema({
  username: String,
  email: String,
  phone: Number,
  password: String,
});

const registration = mongoose.model("Accounts", registrationSchema);

module.exports = registration;
