var admin = require("firebase-admin");

exports.sendNotification = (req, res) => {
  var payload = {
    notification: {
      title: req.body.title,
      body: req.body.message,
    },
  };
  var options = {
    priority: "high",
    timeToLive: 60 * 60 * 12,
  };
  admin
    .messaging()
    .sendToDevice(req.body.deviceToken, payload, options)
    .then(function (response) {
      return res.json({
        message: "Successfully Send",
      });
    })
    .catch(function (error) {
      return res.json({
        message: "Not Send",
      });
    });
};

exports.sendNotificationToAll = (req, res) => {
  var payload = {
    notification: {
      title: req.body.title,
      body: req.body.message,
    },
  };

  var topic = req.body.topic;

  admin
    .messaging()
    .sendToTopic(topic, payload)
    .then(function (response) {
      return res.json({
        message: "Successfully Send",
      });
    })
    .catch(function (error) {
      return res.json({
        message: "Not Send",
      });
    });
}