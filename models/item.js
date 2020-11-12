const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    name: {
      require: true,
      type: String,
    },
    category: {
      require: true,
      type: String,
    },
    price: {
      require: true,
      type: String,
    },
    rating: {
      require: true,
      type: String,
    },
    isVeg: {
      require: true,
      type: Boolean,
    },
    photoUrl: {
      type: String,
      default: "google.com",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", itemSchema, "Items");
