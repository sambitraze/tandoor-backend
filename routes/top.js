const express = require("express");
const router = express.Router();

const {getTop,updateTopById,createTop} = require("../controller/top");


router.post("/create", createTop);
router.put("/update", updateTopById);
router.get("/", getTop);

module.exports = router;