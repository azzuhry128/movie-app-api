const express = require("express");
const router = express.Router();
const {
  DaftarUser,
  LoginUser,
  RatingUser,
} = require("../controllers/user.controller");
const {
  runValidation,
  validationDaftar,
  validationLogin,
  ra,
} = require("../validation/index");

router.post("/registration", validationDaftar, runValidation, DaftarUser);
router.post("/login", validationLogin, runValidation, LoginUser);
router.post("/rating", runValidation, RatingUser);
module.exports = router;
