const mongoose = require("mongoose");

mongoose
  .connect(process.env.Database)
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((error) => {
    console.log(error);
  });
