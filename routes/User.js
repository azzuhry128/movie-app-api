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

router.post("/registration", validationDaftar, runValidation, DaftarUser);
router.post("/login", validationLogin, runValidation, LoginUser);
router.post("/rating", runValidation, RatingUser);
router.post("/comment", runValidation, CommentUser);
module.exports = router;
