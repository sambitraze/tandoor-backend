const express = require("express");
const router = express.Router()
const { createOrder, updatetOrder, getAllOrder, getAllOrderByUserId, getAllOrderByDeliveryId } = require("../controller/order");

router.post("/create", createOrder);
router.put("/update", updatetOrder);
router.get("/", getAllOrder);
router.post("/id", getAllOrderByUserId);
router.post("/delivery", getAllOrderByDeliveryId);

module.exports = router;