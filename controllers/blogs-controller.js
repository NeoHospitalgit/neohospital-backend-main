const Blogs = require("../models/add-blog");

const addBlogs = async (req, res) => {
  try {
    const {
      blog_title,
      blog_slug,
      blog_content,
      blog_date,
      blog_auther,
      blog_category,
      blog_image,
      blog_imageALT,
      blog_whoIsAdded,
      blog_seo,
      blog_status,
    } = req.body;

    const existingBlog = await Blogs.findOne({ blog_title });

    if (existingBlog) {
      return res.status(400).json({ message: "This Blogs already exists" });
    }

    const blogimage = req.file ? req.file.filename : "";

    const newBlogs = new Blogs({
      blog_title,
      blog_slug,
      blog_content,
      blog_date,
      blog_auther,
      blog_category,
      blog_image,
      blog_imageALT,
      blog_whoIsAdded,
      blog_seo,
      blog_status,
    });
    await newBlogs.save();
    return res
      .status(200)
      .json({ message: "Blog added successfully", Blogs: newBlogs });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to add Blog" });
  }
};

const deleteBlogs = async (req, res) => {
  try {
    await Blogs.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to delete Blog" });
  }
};

const updateBlogs = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      blog_title,
      blog_slug,
      blog_content,
      blog_date,
      blog_auther,
      blog_category,
      blog_image,
      blog_imageALT,
      blog_whoIsAdded,
      blog_seo,
      blog_status,
    } = req.body;

    let image = null;
    const existingBlogWithTitle = await Blogs.findOne({
      blog_title,
      _id: { $ne: id },
    });

    if (existingBlogWithTitle) {
      return res.status(400).json({ message: "This blog already exists" });
    }

    if (req.file) {
      image = req.file.filename;
    } else {
      const existingBlog = await Blogs.findById(id);

      if (existingBlog) {
        image = existingBlog.blog_image;
      }
    }

    const updatedBlog = await Blogs.findByIdAndUpdate(
      id,
      {
        blog_title,
        blog_slug,
        blog_content,
        blog_date,
        blog_auther,
        blog_category,
        blog_image: image,
        blog_imageALT,
        blog_whoIsAdded,
        blog_seo,
        blog_status,
      },
      { new: true }
    );

    return res
      .status(200)
      .json({ message: "Blog updated successfully", blog: updatedBlog });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to update blog" });
  }
};

const viewAllBlogs = async (req, res) => {
  try {
    const response = await Blogs.find();
    if (response.length === 0) {
      return res.status(404).json({ message: "No Blogs found" });
    }
    return res.status(200).json({ Blog: response });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to fetch Blogs" });
  }
};

const getBlogsById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await Blogs.findById(id);
    if (!data) {
      return res.status(404).json({ message: "Blog not found" });
    }
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addBlogs,
  deleteBlogs,
  updateBlogs,
  viewAllBlogs,
  getBlogsById,
};
