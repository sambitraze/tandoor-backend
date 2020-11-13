const express = require("express");
const router = express.Router();

const {createItem, deleteitem, updatetItem, getAllItem, getItemById} = require("../controller/item");

router.param("itemId", getItemById)

router.post("/create", createItem);
router.delete("/delete/:itemId", deleteitem);
router.put("/update", updatetItem);
router.get("/", getAllItem);

module.exports = router;