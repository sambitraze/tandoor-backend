const mongoose = require("mongoose");

var userSchema = mongoose.Schema(
  {
    uid: {
      type: String,
      trim: true,
    },
    name: {
      type: String,
      maxlength: 64,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    latitude: {
      type: String,
      trim: true,
    },
    longitude: {
      type: String,
      trim: true,
    },
    deviceToken: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
