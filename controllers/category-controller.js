const Category = require("../models/categorys-model");

const addCategory = async (req, res) => {
  try {
    const { title, content, seo_tag, slug, status } = req.body;

    const existingCategory = await Category.findOne({ title });

    if (existingCategory) {
      return res.status(400).json({ message: "This Category already exists" });
    }

    const image = req.file ? req.file.filename : "";
    const newCategory = new Category({
      title,
      slug,
      content,
      seo_tag,
      image,
      status,
    });
    await newCategory.save();
    return res
      .status(200)
      .json({ message: "Category added successfully", category: newCategory });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to add Category" });
  }
};

const deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to delete Category" });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, slug, content, seo_tag, status } = req.body;
    let image = null;

    const existingCategory = await Category.findOne({
      title,
      _id: { $ne: id },
    });

    if (existingCategory) {
      return res.status(400).json({ message: "This Category already exists" });
    }

    if (req.file) {
      image = req.file.filename;
    } else {
      const existingCategory = await Category.findById(id);

      if (existingCategory) {
        image = existingCategory.image; // Retain the existing image
      }
    }

    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      {
        title,
        slug,
        content,
        seo_tag,
        status,
        image,
      },
      { new: true }
    );

    // Return the updated category
    return res.status(200).json({
      message: "Category updated successfully",
      category: updatedCategory,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to update Category" });
  }
};

const viewAllcategory = async (req, res) => {
  try {
    const category = await Category.find();
    if (!category.length) {
      return res.status(404).json({ message: "No category found" });
    }
    return res.status(200).json({ category });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to fetch category" });
  }
};

const viewOneCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    return res.status(200).json({ category });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to fetch category" });
  }
};

module.exports = {
  addCategory,
  deleteCategory,
  updateCategory,
  viewOneCategory,
  viewAllcategory,
};
