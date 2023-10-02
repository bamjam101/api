const express = require("express");
const {
  createBlog,
  getAllBlogs,
  deleteBlog,
  updateExistingBlog,
} = require("../controllers/blog");

const router = express.Router();

router.get("/all", getAllBlogs);

router.post("/new", createBlog);

router.patch("/:id", updateExistingBlog);

router.delete("/:id", deleteBlog);

module.exports = router;
