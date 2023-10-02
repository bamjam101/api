const { default: mongoose } = require("mongoose");
const Blog = require("../models/Blog");

const createBlog = async (req, res) => {
  try {
    const { title, snippet, description } = req.body;

    if (!(title || description))
      return res
        .status(400)
        .json({ message: "Expected data was not found in request body" });

    // Process data...
    const blog = new Blog({
      title,
      description,
      snippet,
    });

    await blog.save();

    res.json({ message: "Data received" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });

    if (!blogs) return res.status(404).json({ message: "blogs not found." });

    res.status(200).json({ message: "Success", data: blogs });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blogId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(blogId))
      return res.status(400).json({ message: "Invalid ID" });

    // Deletion process
    await Blog.findByIdAndDelete(blogId);

    res.status(200).json({ message: "Successfully deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

const updateExistingBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const { title, snippet, description } = req.body;

    if (!mongoose.Types.ObjectId.isValid(blogId))
      return res.status(400).json({ message: "Invalid ID" });

    const existingBlog = await Blog.findById(blogId);

    if (!existingBlog) res.status(404).json({ message: "blog not found" });

    existingBlog.title = title;
    existingBlog.description = description;
    existingBlog.snippet = snippet || "";

    const updatedBlog = await existingBlog.save();

    res.status(200).json({ message: "Success", data: updatedBlog });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

module.exports = { createBlog, getAllBlogs, deleteBlog, updateExistingBlog };
