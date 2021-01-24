const Top = require("../models/top");

exports.createTop = (req, res) => {
  const top = new Top(req.body);
  top.save((err, user) => {
    console.log(err);
    if (err) {
      res.status(400).json({
        error: "error saving top in DB",
      });
    }
    res.json(user);
  });
};

exports.getTop = (req, res) => {
  Top
    .find()
    .populate({
      path: "item",
    })
    .exec((err, top) => {
      console.log(err);
      if (err) {
        res.status(400).json({
          error: "error saving top in DB",
        });
      }
      res.json(top);
    });
};
exports.updateTopById = (req, res) => {
  Top.findByIdAndUpdate(
    { _id: req.body._id },
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, top) => {
      if (err) {
        console.log(err);
        return res.status(400).json({
          error: "error update this top",
        });
      }
      res.json(top);
    }
  );
};
