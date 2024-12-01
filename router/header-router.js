const express = require("express");
const headerController = require("../controllers/header-controller");
const router = express.Router();

router.post("/header", headerController.addHeader);
router.get("/view-header", headerController.viewAllHeader);
router.put("/header/:id", headerController.updateHeader);
router.get("/header/:id", headerController.viewOneCategory);

module.exports = router;
