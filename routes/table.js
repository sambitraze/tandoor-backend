const express = require("express");
const router = express.Router();

const {createTable, getTableLen} = require("../controller/table");


router.get("/count", getTableLen);
router.post("/create", createTable);

module.exports = router;