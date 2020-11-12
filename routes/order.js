const express = require("express");
const router = express.Router()
const {createOrder, deleteOrder,updatetOrder,getAllOrder} = require("../controller/order");

router.post("/create", createOrder);
router.delete("/delete", deleteOrder);
router.put("/update", updatetOrder);
router.get("/", getAllOrder);

module.exports = router ;