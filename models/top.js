const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const topSchema = new mongoose.Schema(
  {
    item: {
        type: ObjectId,
        ref: "Item",
    },
    srl: String,
    block: Boolean,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Top", topSchema, "Top");