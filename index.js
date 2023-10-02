const express = require("express");
const app = express();

const mongoose = require("mongoose");

const dotenv = require("dotenv");
const port = 3000;

// Import routes
const blogRoutes = require("./routes/blog");

// Middleware configuration
app.use(express.json());
dotenv.config();

app.use("/api/blogs", blogRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(port, () => {
      console.log(`Running on port: ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
