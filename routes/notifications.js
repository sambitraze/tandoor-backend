const express = require("express");
const router = express.Router();

const { sendNotification, sendNotificationToAll, subscribeToTopic, unsubscribeToTopic } = require("../controller/notification");

router.post("/singleDevice", sendNotification);
router.post("/allDevice", sendNotificationToAll);
router.post("/subscribe", subscribeToTopic);
router.post("/unsubscribe", unsubscribeToTopic);

module.exports = router;