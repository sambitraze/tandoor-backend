const mongoose = require("mongoose");
const tempSchema = new mongoose.Schema(
  {
    title: {
      require: true,
      type: String,
    },
    description: String,
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Temp", tempSchema, "Temp");
