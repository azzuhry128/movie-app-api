const express = require("express");
const mongoose = require("mongoose");

const app = express();
const userRouter = require("./routes/User");
const port = 3000;

mongoose.set("strictQuery", true);

const dbURI =
  "mongodb+srv://azzuhry:529440@azzuhry-cluster.6tojn.mongodb.net/testDB-MWST?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) =>
    app.listen(port, () =>
      console.log(`listening to port ${port}, connected to db`)
    )
  )
  .catch((err) => console.log(err));

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("https://movie-app-api-dun.vercel.app/", userRouter);

// app.use("/registration", (req, res, next) => {
//   if (req.method === "POST") {
//     console.log({ url: req.originalUrl });
//     console.log({ method: req.method });
//     console.log({ data: req.body });
//   }
//   return next();
// });

// app.use("/registration", (req, res, next) => {
//   if (req.method === "POST") {
//     const usernameEntryRequest = req.body.username;
//     const emailEntryRequest = req.body.email;
//     const phoneEntryRequest = req.body.phone;
//     UserSchema.find({
//       $or: [
//         { username: usernameEntryRequest },
//         { email: emailEntryRequest },
//         { phone: phoneEntryRequest },
//       ],
//     }).then((doc) => {
//       const attribute = doc[0];

//       console.log(attribute);

//       // console.log(attribute["username"]);
//       // console.log(attribute["email"]);
//       // console.log(attribute["phone"]);

//       // switch (doc) {
//       //   case undefined:
//       //     console.log("no data match, proceeding to database entry...");
//       //     break;
//       //   case req.body.username == doc[0]["username"]:
//       //     console.log("username already used, aborting entry...");
//       //     break;
//       //   case emailEntryRequest == attribute["email"]:
//       //     console.log("email already used, aborting entry...");
//       //     break;
//       //   case phoneEntryRequest == attribute["phone"]:
//       //     console.log("phone number is already taken");
//       //     break;
//       //   default:
//       //     console.log("wat de fuk ???");
//       // }

//       // if (doc == "") {
//       // } else if (req.body.username == doc[0]["username"]) {
//       //   console.log("username already used, aborting entry...");
//       // } else if (req.body.email == doc[0]["email"]) {
//       //   console.log("email already used, aborting entry...");
//       // } else if (req.body.phone == doc[0]["phone"]) {
//       //   console.log("phone number already used, aborting entry...");
//       // } else {
//       //   console.log("unknown error");
//       // }
//     });
//   }

//   // (err, docs) => {
//   //   const response = docs;
//   //   const jsonObject = response;

//   //   console.log({ object: jsonObject }, { type: typeof response });
//   //   if (err) {
//   //     console.log(err);
//   //   } else if (req.body.username == jsonObject["username"]) {
//   //     console.log("username already used, aborting entry...");
//   //   } else if (jsonObject["email"] == req.body.email) {
//   //     console.log("email already used, aborting entry...");
//   //   } else if (jsonObject["phone"] == req.body.phone) {
//   //     console.log("phone number already used, aborting entry...");
//   //   } else {
//   //     console.log("no data match, proceed to database entry...");
//   //   }
//   // }

//   return next();
// });

// router.get("/", (req, res) => {
//   console.log("router working");
//   res.send("this is main route, dont bother sending requests to me");
// });

// router.post(
//   "/registration",
//   body("username")
//     .notEmpty()
//     .isLength({ min: 5 })
//     .custom((value) => {
//       const username = UserSchema.findOne({
//         username: value,
//       });
//       return username.then((username) => {
//         if (username) {
//           return Promise.reject("Username is already in-use");
//         }
//       });
//     }),
//   body("email", "email harus memiliki tanda @")
//     .notEmpty()
//     .isEmail()
//     .custom((value) => {
//       const email = UserSchema.findOne({
//         email: value,
//       });
//       return email.then((email) => {
//         if (email) {
//           return Promise.reject("Email is already in-use");
//         }
//       });
//     }),
//   body("phone", "nomor telepon terlalu pendek")
//     .notEmpty()
//     .isLength({ min: 10 })
//     .custom((value) => {
//       const phone = UserSchema.findOne({
//         phone: value,
//       });
//       return phone.then((phone) => {
//         if (phone) {
//           return Promise.reject("Phone is already in-use");
//         }
//       });
//     }),

//   body("password", "password terlalu pendek").notEmpty().isLength({ min: 8 }),
//   (req, res) => {
//     const error = validationResult(req);
//     if (!error.isEmpty()) {
//       return res.status(400).json({ error: error.array() });
//     } else {
//       const hashedPassword =
//       UserSchema.create({
//         username: req.body.username,
//         email: req.body.email,
//         phone: req.body.phone,
//         password: req.body.password,
//       });
//       res.send("user created successfully");
//     }
//   }
// );

// router.post("/login", (req, res) => {
//   if (req.body.is) {
//     res.send("minimal datanya keisi");
//   } else {
//     res.send(req.body);
//   }
// });

//find then display selected data (can be used to find movies)
// app.get("/find/:username", (req, res) => {
//   const query = UserSchema.find({ username: req.params.username }).select(
//     "username"
//   );
//   query.exec((err, values) => {
//     if (err) return err;
//     console.log(values);
//     res.send(values);
//   });
// });
