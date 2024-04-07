const express = require("express");
require("dotenv").config();
require("./Database/connection");

const morgan = require("morgan");

const CategoryRoute = require("./routes/categoryRoute");
const ProductRoute = require("./routes/productRoute");
const UserRoute = require("./routes/userRoute");

const app = express();
const port = process.env.port;

app.use(express.json());
app.use(morgan("dev"));
//using routes
app.use("/api", CategoryRoute);
app.use("/api", ProductRoute);
app.use("/api", UserRoute);
app.user("/api", OrderRoute);

app.use("/public/uploads", express.static("public/uploads"));

app.listen(port, () => {
  console.log(`App started successfully at port ${port}`);
});

exports.userCheck = [
  check("username", "Username is required")
    .notEmpty()
    .isLength({ min: 3 })
    .withMessage("Username must be at least 3 characters"),

  check("email", "email is required")
    .isEmail()
    .withMessage("Email format is incorrect"),
  check("password", "Password is required")
    .notEmpty()
    .matches(
      /[a-z]/
        .withMessage("Password must contain at least 1 lowercase alphabet")
        .matches(/[A-Z]/)
        .withMessage("password must contain at least 1 uppercasee alphabet")
        .matches(/[0-9]/)
        .withMessage("Password must contain at least 1 number")
        .matches(/[!#@$\-]/)
        .withMessage("Password must contain at least 1 special characters")
        .isLength({ min: 8 })
        .withMessage("Password must be at least  8 characters"),
      check("gender")
        .isIn(["Male", "Female"])
        .withMessage("Gender must be either male or female")
        .not()
        .isIn(["p@ssw0rd"])
        .withMessage("P@ssw0rd is not allowed")
    ),
];
