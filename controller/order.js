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
    } else res.json({ message: "order saved" });
  });
};

exports.updatetOrder = (req, res) => {
  Order.updateOne(
    { _id: req.body._id },
    { $set: req.body },
    (err, orderUpdated) => {
      if (err) {
        res.status(400).json({
          error: "error updating order in DB",
        });
      } else
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
    .populate("customer")
    .populate("deliveryby")
    .populate("offer")
    .sort([["createdAt", "desc"]])
    .exec((err, orders) => {
      if (err) {
        console.log(err);
        res.status(400).json({
          error: "error getting items from DB",
        });
      } else res.json(orders);
    });
};

exports.getAllUnconfirmedOrder = (req, res) => {
  Order.find({ status: "unconfirmed" })
    .populate({
      path: "items",
      populate: {
        path: "item",
        models: "Item",
      },
    })
    .populate("customer")
    .populate("deliveryby")
    .populate("offer")
    .sort([["createdAt", "desc"]])
    .exec((err, orders) => {
      if (err) {
        console.log(err);
        res.status(400).json({
          error: "error getting items from DB",
        });
      } else res.json(orders);
    });
};

exports.getAllConfimredOrder = (req, res) => {
  Order.find({ status: { $ne: "unconfirmed" } })
    .populate({
      path: "items",
      populate: {
        path: "item",
        models: "Item",
      },
    })
    .populate("customer")
    .populate("deliveryby")
    .populate("offer")
    .sort([["createdAt", "desc"]])
    .exec((err, orders) => {
      if (err) {
        console.log(err);
        res.status(400).json({
          error: "error getting items from DB",
        });
      } else res.json(orders);
    });
};

exports.getConfirmedOrderByCount = (req, res) => {
  Order.find({ status: "unconfirmed" })
    .skip(req.body.skip)
    .limit(req.body.limit)
    .populate({
      path: "items",
      populate: {
        path: "item",
        models: "Item",
      },
    })
    .populate("customer")
    .populate("deliveryby")
    .populate("offer")
    .sort([["createdAt", "desc"]])
    .exec((err, orders) => {
      if (err) {
        console.log(err);
        res.status(400).json({
          error: "error getting items from DB",
        });
      } else res.json(orders);
    });
};

exports.getUnconfirmedOrderByCount = (req, res) => {
  Order.find({ status: { $ne: "unconfirmed" } })
    .skip(req.body.skip)
    .limit(req.body.limit)
    .populate({
      path: "items",
      populate: {
        path: "item",
        models: "Item",
      },
    })
    .populate("customer")
    .populate("deliveryby")
    .populate("offer")
    .sort([["createdAt", "desc"]])
    .exec((err, orders) => {
      if (err) {
        console.log(err);
        res.status(400).json({
          error: "error getting items from DB",
        });
      } else res.json(orders);
    });
};

exports.getOrderByCount = (req, res) => {
  Order.find()
    .skip(req.body.skip)
    .limit(req.body.limit)
    .populate({
      path: "items",
      populate: {
        path: "item",
        models: "Item",
      },
    })
    .populate("customer")
    .populate("deliveryby")
    .populate("offer")
    .sort([["createdAt", "desc"]])
    .exec((err, orders) => {
      if (err) {
        console.log(err);
        res.status(400).json({
          error: "error getting items from DB",
        });
      } else res.json(orders);
    });
};

exports.getAllOrderByUserId = (req, res) => {
  Order.find({ customer: req.body.id })
    .populate({
      path: "items",
      populate: {
        path: "item",
        models: "Item",
      },
    })
    .populate({
      path: "customer",
      populate: {
        path: "cart",
        populate: {
          path: "item",
          models: "Item",
        },
      },
    })
    .populate("deliveryby")
    .populate("offer")
    .sort([["createdAt", "desc"]])
    .exec((err, orders) => {
      if (err) {
        console.log(err);
        res.status(400).json({
          error: "error getting items from DB",
        });
      } else res.json(orders);
    });
};
exports.getAllOrderByDeliveryId = (req, res) => {
  Order.find({ deliveryby: req.body.id })
    .populate({
      path: "items",
      populate: {
        path: "item",
        models: "Item",
      },
    })
    .populate({
      path: "customer",
      populate: {
        path: "cart",
        populate: {
          path: "item",
          models: "Item",
        },
      },
    })
    .populate("deliveryby")
    .populate("offer")
    .sort([["createdAt", "desc"]])
    .exec((err, orders) => {
      if (err) {
        console.log(err);
        res.status(400).json({
          error: "error getting items from DB",
        });
      } else res.json(orders);
    });
};

exports.orderCount = (req, res) => {
  Order.collection.countDocuments({}, (err, ordercount) => {
    if (err) {
      res.status(400).json({
        error: "order count error",
      });
    } else {
      res.json({
        ordercount,
      });
    }
  });
};
