const express = require("express");
const seopagesController = require("../controllers/seopages-controller");
const router = express.Router();

router.post("/seopages", seopagesController.addseopages);
router.get("/view-seopages", seopagesController.viewAllseopages);
router.delete("/seopages/:id", seopagesController.deleteseopages);
router.put("/seopages/:id", seopagesController.updateseopages);
router.get("/seopages/:id", seopagesController.viewOneseopages);

module.exports = router;
