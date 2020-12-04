const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const ItemCartSchema = mongoose.Schema({
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Item",
  },
  count: String,
});

const orderSchema = mongoose.Schema(
  {
    items: [ItemCartSchema],
    orderId: {
      require: true,
      type: String,
    },
    customer: {
      type: ObjectId,
      ref: "User",
    },
    custName: {
      type: String,
    },
    custNumber: {
      type: String,
    },
    deliveryby: {
      type: ObjectId,
      ref: "Delivery",
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
    status: {
      type: String,
      default: "placed",
      enum: ["placed", "cancelled","completed", "out for delivery"]
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
