const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  rating: {
    type: String,
  },
});

module.exports = mongoose.model("Ratings", ratingSchema);
