const mongoose = require("mongoose");
var deliverySchema = mongoose.Schema(
  {
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
      default: "0.0",
    },
    longitude: {
      type: String,
      trim: true,
      default: "0.0",
    },
    deviceToken: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
    blocked: {
      type: Boolean,
      default: false,
    },
    assigned: {
      type: String,
      trim: true,
      default: "0",
    },
    completed: {
      type: String,
      trim: true,
      default: "0",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Delivery", deliverySchema, "DeliveryBoy");
