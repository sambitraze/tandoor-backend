const express = require("express");
const router = express.Router();

const { sendNotification, sendNotificationToAll } = require("../controller/notification");

router.post("/singleDevice", sendNotification);
router.post("/allDevice", sendNotificationToAll);

module.exports = router;