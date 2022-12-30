const express = require("express");
const router = express.Router();
const {
  DaftarUser,
  LoginUser,
  RatingUser,
  CommentUser,
} = require("../controllers/user.controller");
const {
  runValidation,
  validationDaftar,
  validationLogin,
} = require("../validation/index");

router.post("https://movie-app-api-dun.vercel.app/registration", validationDaftar, runValidation, DaftarUser);
router.post("https://movie-app-api-dun.vercel.app/login", validationLogin, runValidation, LoginUser);
router.post("https://movie-app-api-dun.vercel.app/rating", runValidation, RatingUser);
router.post("https://movie-app-api-dun.vercel.app/comment", runValidation, CommentUser);
module.exports = router;
