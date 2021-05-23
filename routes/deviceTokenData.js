const express = require("express");
const router = express.Router();

const dtD = require("../controller/deviceTokenData");


router.post("/create", dtD.createDeviceTokenData);
router.get("/", dtD.getDeviceTokenData);
router.delete("/delete/:id", dtD.deleteDeviceTokenData);

module.exports = router;