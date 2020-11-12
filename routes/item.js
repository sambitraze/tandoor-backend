const express = require("express");
const router = express.Router();

const {createItem, deleteitem, updatetItem, getAllItem} = require("../controller/item");


router.post("/create", createItem);
router.delete("/delete", deleteitem);
router.put("/update", updatetItem);
router.get("/", getAllItem);

module.exports = router;