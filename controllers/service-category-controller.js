const ServiceCategory = require("../models/service-category-model");

const addServiceCategory = async (req, res) => {
  try {
    const { title, slug, seoTags, status } = req.body;
    const image = req.file ? req.file.filename : "";
    // console.log(req.file);
    const newServiceCategory = new ServiceCategory({
      title,
      slug,
      seoTags,
      image,
      status,
    });
    await newServiceCategory.save();

    return res.status(200).json({
      message: "Service Category added successfully",
      ServiceCategory: newServiceCategory,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to add ServiceCategory" });
  }
};

// Delete a ServiceCategory
const deleteServiceCategory = async (req, res) => {
  try {
    await ServiceCategory.findByIdAndDelete(req.params.id);
    return res
      .status(200)
      .json({ message: "ServiceCategory deleted successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Failed to delete ServiceCategory" });
  }
};
const updateServiceCategory = async (req, res) => {
  try {
    const { title, slug, seoTags, status } = req.body;
    let image = null;

    if (req.file) {
      image = req.file.filename;
    } else {
      const existingServiceCategory = await ServiceCategory.findById(
        req.params.id
      );

      if (existingServiceCategory) {
        image = existingServiceCategory.image; // Retain the existing image
      }
    }

    const updatedServiceCategory = await ServiceCategory.findByIdAndUpdate(
      req.params.id,
      {
        title,
        slug,
        seoTags,
        status,
        image,
      },
      { new: true }
    );

    return res.status(200).json({
      message: "ServiceCategory updated successfully",
      ServiceCategory: updatedServiceCategory,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Failed to update ServiceCategory" });
  }
};

const viewAllServiceCategory = async (req, res) => {
  try {
    const response = await ServiceCategory.find();
    if (!response) {
      res.status(404).json({ servicescategories: "No ServiceCategory found" });
      return;
    }
    res.status(200).json({ servicescategories: response });
  } catch (error) {
    console.log(`ServiceCategory: ${error}`);
  }
};

const getServiceCategoryById = async (req, res) => {
  try {
    const servicescategories = await ServiceCategory.findById(req.params.id);

    return res.status(200).json({ servicescategories });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Failed to fetch Services Categories" });
  }
};

module.exports = {
  addServiceCategory,
  deleteServiceCategory,
  updateServiceCategory,
  viewAllServiceCategory,
  getServiceCategoryById,
};
