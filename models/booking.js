const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const bookingSchema = mongoose.Schema(
  {
    date: {
      require: true,
      type: String,
    },
    startTimeID: {
      require: true,
      type: String,
    },
    endTimeID: {
      require: true,
      type: String,
    },
    tableId: {
      require: true,
      type: String,
    },
    customer: {
      type: ObjectId,
      ref: "User",
    },
    canceled: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema, "Bookings");
