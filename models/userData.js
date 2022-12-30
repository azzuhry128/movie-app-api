const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const findData = new Schema({
  username: String,
});

const searchData = mongoose.model("Accounts", findData);

module.exports = searchData;
