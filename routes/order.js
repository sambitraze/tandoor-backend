const express = require("express");
const router = express.Router()
const {createOrder, updatetOrder,getAllOrder} = require("../controller/order");

router.post("/create", createOrder);
router.put("/update", updatetOrder);
router.get("/", getAllOrder);

module.exports = router ;