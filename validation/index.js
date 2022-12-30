const { check, validationResult } = require("express-validator");

exports.runValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send({ status: false, message: errors.array()[0].msg });
  }
  next();
};

exports.validationDaftar = [
  check("username", "username tidak boleh kosong").notEmpty(),
  check("email", "email tidak boleh kosong")
    .notEmpty()
    .isEmail()
    .withMessage("email harus bertanda @"),
  check("phone", "nomor telepon tidak boleh kosong").notEmpty(),
  check("password", "password tidak boleh kosong")
    .notEmpty()
    .isLength({ min: 8 })
    .withMessage("minimal 8 karakter"),
];

exports.validationLogin = [
  check("username", "username tidak boleh kosong").notEmpty(),
  check("password", "password tidak boleh kosong").notEmpty(),
];
