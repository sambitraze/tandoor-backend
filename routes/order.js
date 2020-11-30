const express = require("express");
const router = express.Router()
const {createOrder, updatetOrder,getAllOrder, getAllOrderById} = require("../controller/order");

router.post("/create", createOrder);
router.put("/update", updatetOrder);
router.get("/", getAllOrder);
router.get("/id", getAllOrderById);

module.exports = router ;