const Offer = require("../models/offer");

exports.createOffer = (req, res) => {
  const offer = new Offer(req.body);
  offer.save((err, offer) => {
    console.log(err);
    if (err) {
      res.status(400).json({
        error: "error saving offer in DB",
      });
    }
    res.json(offer);
  });
};

exports.getOffer = (req, res) => {
    Offer
    .find()
    .exec((err, offer) => {
      console.log(err);
      if (err) {
        res.status(400).json({
          error: "error getting offer in DB",
        });
      }
      res.json(offer);
    });
};
exports.getAppOffer = (req, res) => {
  Offer
  .find({block: false})
  .exec((err, offer) => {
    console.log(err);
    if (err) {
      res.status(400).json({
        error: "error getting offer in DB",
      });
    }
    res.json(offer);
  });
};
exports.updateOfferById = (req, res) => {
    Offer.findByIdAndUpdate(
    { _id: req.body._id },
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, offer) => {
      if (err) {
        console.log(err);
        return res.status(400).json({
          error: "error update this offer",
        });
      }
      res.json(offer);
    }
  );
};
