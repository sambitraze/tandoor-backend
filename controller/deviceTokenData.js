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

exports.deleteDeviceTokenData = (req, res) => {
  DeviceTokenData.deleteOne({ "_id" : req.params.id },(err, deletedToken) => {
    if (err) {
      res.status(400).json({
        error: "error deleting deviceTokenData in DB",
      });
    }
    res.json(deletedToken);
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
