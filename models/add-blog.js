const { Schema, model } = require("mongoose");

const blogsSchema = new Schema(
  {
    blog_title: { type: String, required: true },
    blog_slug: { type: String },
    blog_content: { type: String },
    blog_seo: { type: String },
    blog_date: { type: Date },
    blog_auther: { type: String },
    blog_category: { type: String },
    blog_image: { type: String },
    blog_imageALT: { type: String },
     blog_whoIsAdded: { type: String }, 
    blog_status: { type: Boolean },
  },
  { timestamps: true }
);

const Blogs = model("Blogs", blogsSchema);

module.exports = Blogs;
