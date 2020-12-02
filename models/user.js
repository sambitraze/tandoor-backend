const mongoose = require("mongoose");
const CartSchema = mongoose.Schema({
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Item",
  },
  count: String,
});
var userSchema = mongoose.Schema(
  {
    cart: [CartSchema],
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
    address: {
      type: String
    },
    deviceToken: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema, "users");
