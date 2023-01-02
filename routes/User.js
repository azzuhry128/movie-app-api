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

router.get("/", (req, res) => {
  res.json("this route serves only GET, dont bother sending request to me");
});

router.get("/registration", (req,res) => {
  res.json("this is registration endPoint")
})

router.get("/login", (req,res) => {
  res.json("this is login endPoint")
})

router.get("/comment", (req,res) => {
  res.json("this is comment endPoint")
})

router.get("/rating", (req,res) => {
  res.json("this is comment endPoint")
})

router.post(
  "/registration",
  validationDaftar,
  runValidation,
  DaftarUser
);
router.post(
  "/login",
  validationLogin,
  runValidation,
  LoginUser
);
router.post(
  "/rating",
  runValidation,
  RatingUser
);
router.post(
  "/comment",
  runValidation,
  CommentUser
);
module.exports = router;
