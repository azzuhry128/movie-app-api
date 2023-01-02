const User = require("../models/user.model");
const Rating = require("../models/rating.model");
const Comment = require("../models/comment.model");
const hasher = require("bcryptjs");

exports.DaftarUser = async (req, res) => {
  const { username, email, phone, password } = req.body;

  let emailUser = await User.findOne({ email: email });
  let usernameUser = await User.findOne({ username: username });
  let phoneUser = await User.findOne({ phone: phone });

  if (emailUser) {
    return res.send({ status: false, message: "email telah digunakan" });
  }

  if (usernameUser) {
    return res.send({ status: false, message: "username telah digunakan" });
  }

  if (phoneUser) {
    return res.send({ status: false, message: "nomor telah digunakan" });
  }

  const hashPassword = await hasher.hash(password, 10);

  const data = {
    username: username,
    email: email,
    phone: phone,
    password: hashPassword,
  };

  const user = new User({
    username: username,
    email: email,
    phone: phone,
    password: password,
  });

  user.save();

  return res.send({
    status: true,
    message: "pendaftaran berhasil",
    data: data,
  });
};

exports.LoginUser = async (req, res) => {
  const { username, email, password } = req.body;

  const userData = await User.findOne({
    $or: [{ username: username }, { email: email }],
  });

  if (userData) {
    //proses berhasil
    const passwordUser = userData.password;

    if (password == passwordUser) {
      return res.send({
        status: true,
        msg: "login berhasil",
        username: username,
        email: email,
        password: password,
      });
    } else {
      return res.send({ status: false, message: "password salah" });
    }
  } else {
    return res.send({
      status: false,
      message: "username atau email tidak tersedia",
    });
  }
};

exports.RatingUser = async (req, res) => {
  const { username, rating } = req.query;

  const ratingUser = new Rating({
    username: username,
    rating: rating,
  });

  ratingUser.save();
  res.send({ status: 200, data: ratingUser });
};

exports.CommentUser = async (req, res) => {
  const { username, comment } = req.query;

  const commentUser = new Comment({
    username: username,
    comment: comment,
  });

  commentUser.save();
  res.send({ status: 200, username: username, comment: comment });
};

exports.getComment = async(req,res) => {
  const allComments = await Comment.find({})
  res.send(allComments)
}

exports.getRatings = async(req,res) => {
  const allRatings = await Rating.find({})
  res.send(allRatings)
}
