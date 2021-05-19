const express = require("express");
const router = express.Router();

const sms = require("../controller/sms");


router.post("/send", sms.sendSms);

module.exports = router;