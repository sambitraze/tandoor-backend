const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const ItemCartSchema = mongoose.Schema({
  item: {
    type: ObjectId,
    ref: "item",
  },
  name: String,
  count: String,
  price: String,
});

const orderSchema = mongoose.Schema(
  {
    orderId: {
      require: true,
      type: String,
    },
    customer: {
      type: ObjectId,
      ref: "user",
    },
    custName: {
      require: true,
      type: String,
    },
    custNumber: {
      require: true,
      type: String,
    },
    deliveryby: {
      type: ObjectId,
      ref: "delivery",
    },
    paymentType: {
      require: true,
      type: String,
    },
    txtId: {
      type: String,
    },
    orderType: {
      type: String,
      default: "Billing",
      enum: ["Delivery", "Billing"],
    },
    amount: {
      require: true,
      type: String,
    },
    packing: {
      require: true,
      type: String,
    },
    gst: {
      require: true,
      type: String,
    },
    gstRate: {
      require: true,
      type: String,
    },
    paid: {
      require: true,
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema, "Orders");
