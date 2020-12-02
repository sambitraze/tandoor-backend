const Delivery = require("../models/delivery");

exports.createDeliveryBoy = (req, res) => {
  const Delivery = new Delivery(req.body);
  Delivery.save((err, delivery) => {
    console.log(err);
    if (err) {
      res.status(400).json({
        error: "error saving user in DB",
      });
    }
   else res.json(delivery);
  });
};

exports.getDeliveryBoyByEmail = (req, res) => {
  Delivery.find({ email: req.body.email })
    .exec((err, delivery) => {
      if (err) {
        return res.json({
          error: "No Phone Number is there.",
        });
      } else res.json(delivery);
    });
};


exports.getAllDeliveryBoy = (req, res) => {
  Delivery.find().exec((err, delivery) => {
    if (err) {
      res.status(400).json({
        error: "No USERS are found",
      });
    }
   else res.json(delivery);
  });
};

exports.updateDeliveryBoy = (req, res) => {
  Delivery.findByIdAndUpdate(
    { _id: req.body._id },
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, delivery) => {
      if (err) {
        console.log(err);
        return res.status(400).json({
          error: "You are not authorized to update this user",
        });
      }
     else res.json(delivery);
    }
  );
};
