const mongoose = require("mongoose");
const tableSchema = new mongoose.Schema(
  {
    name: {
        type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Table", tableSchema, "Tables");