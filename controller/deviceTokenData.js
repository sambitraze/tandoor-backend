const DeviceTokenData = require("../models/deviceTokenData");

exports.createDeviceTokenData = (req, res) => {
  const deviceTokenData = new DeviceTokenData(req.body);
  deviceTokenData.save((err, deviceTokenData) => {
    if (err) {
      res.status(400).json({
        error: "error saving deviceTokenData in DB",
      });
    }
    res.json(deviceTokenData);
  });
};

exports.getDeviceTokenData = (req, res) => {
  DeviceTokenData.find().exec((err, deviceTokenData) => {
    if (err) {
      res.status(400).json({
        error: "No deviceTokenDatas are found",
      });
    } else res.json(deviceTokenData);
  });
};
