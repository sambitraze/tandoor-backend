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
      return res.json(response);
    })
    .catch(function (e) {
      res.status(400).json(e);
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
      return res.json(response);
    })
    .catch(function (e) {
      res.status(400).json(e);
    });
};

exports.subscribeToTopic = (req, res) => {
  const registrationTokens = [req.body.deviceToken];
 console.log(registrationTokens);
  admin
    .messaging()
    .subscribeToTopic(registrationTokens, req.body.topic)
    .then((response) => {
      res.json(response);
    })
    .catch((e) => {
      console.log(e);
      res.status(400).json(e);
    });
};

exports.unsubscribeToTopic = (req, res) => {
  admin
    .messaging()
    .unsubscribeFromTopic(req.body.deviceToken, req.body.topic)
    .then((response) => {
      res.json(response);
    })
    .catch((e) => {
      res.status(400).json(e);
    });
};
