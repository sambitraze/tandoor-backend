const express = require("express");
const router = express.Router();
const {createPdf} = require("../controller/pdfmaker");
router.post("/", createPdf);
module.exports = router ;