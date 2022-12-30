const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  comment: {
    type: String,
  },
});

module.exports = mongoose.model("Comments", commentSchema);
