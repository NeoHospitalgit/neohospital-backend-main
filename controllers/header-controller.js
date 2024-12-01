const Header = require("../models/header-model");

const addHeader = async (req, res) => {
  try {
    const { page, tagdata, status } = req.body;

    const newHeader = await Header.create({ page, tagdata, status });
    await newHeader.save();
    return res
      .status(201)
      .json({ message: "Header added successfully", header: newHeader });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to add Header" });
  }
};

const updateHeader = async (req, res) => {
  try {
    const { id } = req.params;
    const { page, tagdata, status } = req.body;

    const updatedHeader = await Header.findByIdAndUpdate(
      id,
      {
        page,
        tagdata,
        status,
      },
      { new: true }
    );

    // Return the updated category
    return res.status(200).json({
      message: "Header updated successfully",
      header: updatedHeader,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to update Header" });
  }
};
const viewAllHeader = async (req, res) => {
  try {
    const header = await Header.find();
    if (!header.length) {
      return res.status(404).json({ message: "No Header found" });
    }
    return res.status(200).json({ header });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to fetch Header" });
  }
};

const viewOneCategory = async (req, res) => {
  try {
    const header = await Header.findById(req.params.id);
    if (!header) {
      return res.status(404).json({ message: "Header not found" });
    }
    return res.status(200).json({ header });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to fetch Header" });
  }
};

module.exports = {
  addHeader,
  updateHeader,
  viewOneCategory,
  viewAllHeader,
};
