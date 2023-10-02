const express = require("express");
const app = express();
const port = 3000;

/* ------------------------------------------------ */

const mongoose = require("mongoose");

// Model definition
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: String,
  email: String,
});

const User = mongoose.model("User", userSchema);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`Running on port: ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
