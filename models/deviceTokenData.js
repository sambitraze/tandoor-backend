const mongoose = require("mongoose");

const deviceTokenDataSchema = mongoose.Schema(
  {
    user: {
      require: true,
      type: String,
    },
    devicetoken: {
      require: true,
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DeviceToken", deviceTokenDataSchema, "DeviceTokens");
