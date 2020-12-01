const { compose } = require("async");
const { populate } = require("../models/order");
const Order = require("../models/order");
exports.createOrder = (req, res) => {
  const order = new Order(req.body);
  order.save((err, createdorder) => {
    if (err) {
      console.log(err);
      res.status(400).json({
        error: "error saving order in DB",
      });
    }
    res.json({ message: "order saved" });
  });
};

// exports.deleteOrder = (req, res) => {
//   let order = req.order;
//   Order.deleteOne(order, (err, orderdeleted) => {
//     if (err) {
//       res.status(400).json({
//         error: "error deleting order in DB",
//       });
//     }
//     res.json({
//       message: "Deleted",
//       orderdeleted,
//     });
//   });
// };

exports.updatetOrder = (req, res) => {
  Order.updateOne(
    { _id: req.body._id },
    { $set: req.body },
    (err, orderUpdated) => {
      if (err) {
        res.status(400).json({
          error: "error updating order in DB",
        });
      }
      res.json({
        message: "Updated",
      });
    }
  );
};

exports.getAllOrder = (req, res) => {
  Order.find()
    .populate({
      path: "items",
      populate: {
        path: "item",
        models: "Item",
      },
    })
    .sort([["createdAt", "desc"]])
    .exec((err, orders) => {
      if (err) {
        console.log(err);
        res.status(400).json({
          error: "error getting items from DB",
        });
      }
      res.json(orders);
    });
};

exports.getAllOrderById = (req, res) => {
  Order.find({ "customer": req.body.id})
    .populate({
      path: "items",
      populate: {
        path: "item",
        models: "Item",
      },
    }).populate({path: "customer", models: "User"})
    .sort([["createdAt", "desc"]])
    .exec((err, orders) => {
      if (err) {
        console.log(err);
        res.status(400).json({
          error: "error getting items from DB",
        });
      }
      res.json(orders);
    });
};
