const express = require("express");
const doctorsController = require("../controllers/doctors-controller");
const { uploadDoctorImage } = require("../utils/multerConfig");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");
const router = express.Router();

router
  .route("/doctors")
  .post(
    authMiddleware,
    adminMiddleware,
    uploadDoctorImage.single("drImage"),
    doctorsController.addDoctor
  );

router.route("/view-doctors").get(doctorsController.viewAllDoctors);

router
  .route("/doctors/:id")
  .delete(authMiddleware, adminMiddleware, doctorsController.deleteDoctor);

router
  .route("/doctors/:id")
  .put(
    authMiddleware,
    adminMiddleware,
    uploadDoctorImage.single("drImage"),
    doctorsController.updateDoctor
  );

router
  .route("/doctors/:id")
  .get(authMiddleware, adminMiddleware, doctorsController.getDoctorById);

module.exports = router;
