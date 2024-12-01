const Testimonials = require("../models/testimonials-model");

const addtestimonials = async (req, res) => {
  try {
    const { text, testurl, author, stars, status } = req.body;
    const newTestimonials = new Testimonials({ text, testurl, author, stars, status });
    await newTestimonials.save();
    return res.status(201).json({
      message: "Testimonials added successfully",
      testimonials: newTestimonials,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to add Testimonials" });
  }
};

// const updatetestimonials = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { text, testurl, author, stars, status } = req.body;

//     const updatedTestimonials = await Testimonials.findByIdAndUpdate(
//       id,
//       {
//         text,
//         testurl,
//         author,
//         stars,
//         status,
//       },
//       { new: true }
//     );

//     return res.status(200).json({
//       message: "Testimonials updated successfully",
//       Testimonials: updatedTestimonials,
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Failed to update Testimonials" });
//   }
// };
const viewAlltestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonials.find();
    if (!testimonials.length) {
      return res.status(404).json({ message: "No Testimonials found" });
    }
    return res.status(200).json({ testimonials });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to fetch Testimonials" });
  }
};

// const deletetestimonials = async (req, res) => {
//   try {
//     const Testimonials = await Testimonials.findByIdAndDelete(req.params.id);
//     if (!Testimonials) {
//       return res
//         .status(404)
//         .json({ message: "Testimonials deleted successfully" });
//     }
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Failed to delete Blog" });
//   }
// };

// const viewOnetestimonials = async (req, res) => {
//   try {
//     const Testimonials = await Testimonials.findById(req.params.id);
//     if (!Testimonials) {
//       return res.status(404).json({ message: "Testimonials not found" });
//     }
//     return res.status(200).json({ Testimonials });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Failed to fetch Testimonials" });
//   }
// };

module.exports = {
  addtestimonials,
  viewAlltestimonials,
  // deletetestimonials,
  // updatetestimonials,
  // viewOnetestimonials,
};
