const express = require("express");
const blogsController = require("../controllers/blogs-controller");
const { uploadBlogImage } = require("../utils/multerConfig");

const router = express.Router();

router.post(
  "/blogs",
  uploadBlogImage.single("blog_image"),
  blogsController.addBlogs
);

router.get("/view-blogs", blogsController.viewAllBlogs);
router.delete("/blogs/:id", blogsController.deleteBlogs);

router.put(
  "/blogs/:id",
  uploadBlogImage.single("blog_image"),
  blogsController.updateBlogs
);

router.get("/blogs/:id", blogsController.getBlogsById);

module.exports = router;
