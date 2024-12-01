const express = require("express");
const homeDoctorsController = require("../controllers/homeDoctors-controller");
// const { uploadHomeDoctors } = require("../utils/multerConfig");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");
const router = express.Router();

router.route("/home-doctors").post(
  authMiddleware,
  adminMiddleware,
  // uploadHomeDoctors.single("hdrImage"),
  homeDoctorsController.addHomeDoctor
);

router
  .route("/view-home-doctors")
  .get(homeDoctorsController.viewAllHomeDoctors);

router
  .route("/home-doctors/:id")
  .delete(
    authMiddleware,
    adminMiddleware,
    homeDoctorsController.deleteHomeDoctor
  );

router
  .route("/home-doctors/:id")
  .put(authMiddleware, adminMiddleware, homeDoctorsController.updateHomeDoctor);

router
  .route("/home-doctors/:id")
  .get(
    authMiddleware,
    adminMiddleware,
    homeDoctorsController.getHomeDoctorById
  );

module.exports = router;
