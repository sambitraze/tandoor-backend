const mongoose = require("mongoose");
const offerSchema = new mongoose.Schema(
  {
    percentage: String,
    offerCode: String,
    minLimit: String,
    maxLimit: String,
    block: Boolean,   
  },
  { timestamps: true }
);

module.exports = mongoose.model("Offer", offerSchema, "Offer");
