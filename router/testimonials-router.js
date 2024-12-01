const express = require("express");
const testimonialsController = require("../controllers/testimonials-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");

const router = express.Router();

router
    .route("/testimonials")
    .post(authMiddleware, adminMiddleware, testimonialsController.addtestimonials);

router
    .route("/view-testimonials")
    .get(authMiddleware, adminMiddleware, testimonialsController.addtestimonials);


// router.delete("/testimonials/:id", testimonialsController.deletetestimonials);
// router.put("/testimonials/:id", testimonialsController.updatetestimonials);
// router.get("/testimonials/:id", testimonialsController.viewOnetestimonials);

module.exports = router;
