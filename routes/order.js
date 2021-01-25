const express = require("express");
const router = express.Router()
const { createOrder, updatetOrder, getOrderByCount, getAllOrder, getAllOrderByUserId, getAllOrderByDeliveryId, orderCount } = require("../controller/order");

router.post("/create", createOrder);
router.put("/update", updatetOrder);
router.get("/", getAllOrder);
router.get("/count", orderCount);
router.post("/id", getAllOrderByUserId);
router.post("/delivery", getAllOrderByDeliveryId);
router.post("/count", getOrderByCount);

module.exports = router;