const express = require("express");
const router = express.Router()
const { createDeliveryBoy, getDeliveryBoyByEmail, getAllDeliveryBoy, updateDeliveryBoy, deliveryCount} = require("../controller/delivery");

router.post("/create", createDeliveryBoy);
router.post("/email", getDeliveryBoyByEmail);
router.get("/", getAllDeliveryBoy);
router.get("/count", deliveryCount);
router.put("/update", updateDeliveryBoy);

module.exports = router;