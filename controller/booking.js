const Booking = require("../models/booking");

exports.createBooking = (req, res) => {
  const booking = new Booking(req.body);
  booking.save((err, booking) => {
    if (err) {
      res.status(400).json({
        error: "error booking item in DB",
      });
    }
    res.json(booking);
  });
};

exports.updateBooking = (req, res) => {
  Booking.updateOne(
    { _id: req.body._id },
    { $set: req.body },
    (err, bookingUpdated) => {
      if (err) {
        res.status(400).json({
          error: "error updating Booking in DB",
        });
      }
      res.json({
        message: "Updated",
        bookingUpdated,
      });
    }
  );
};

exports.getTodayBookingByUserId = (req, res) => {
  Booking.find({ customer: req.body.customer, date: req.body.date, canceled: false })
    .populate("customer")
    .sort([["createdAt", "desc"]])
    .exec((err, bookings) => {
      if (err) {
        return res.status(400).json({
          error: "bookings not found",
        });
      } else res.json(bookings);
    });
};

exports.getPastBookingByUserId = (req, res) => {
  Booking.find({ customer: req.body.customer, date: { $ne: req.body.date } })
    .skip(req.body.skip)
    .limit(req.body.limit)
    .populate("customer")
    .sort([["createdAt", "desc"]])
    .exec((err, bookings) => {
      if (err) {
        return res.status(400).json({
          error: "bookings not found",
        });
      } else res.json(bookings);
    });
};

exports.gettodayBookingByDate = (req, res) => {
  Booking.find({ date: req.body.date })
    .populate("customer")
    .sort([["createdAt", "desc"]])
    .exec((err, bookings) => {
      if (err) {
        return res.status(400).json({
          error: "date bookings not found",
        });
      } else res.json(bookings);
    });
};

exports.getpastBookingByDate = (req, res) => {
  Booking.find({ date: { $ne: req.body.date } })
    .skip(req.body.skip)
    .limit(req.body.limit)
    .populate("customer")
    .sort([["createdAt", "desc"]])
    .exec((err, bookings) => {
      if (err) {
        return res.status(400).json({
          error: "date bookings not found",
        });
      } else res.json(bookings);
    });
};
exports.getBookingCount = (req, res) => {
  Booking.collection.countDocuments({}, (err, bookingCount) => {
    if (err) {
      res.status(400).json({
        error: "bookingCount error",
      });
    } else {
      res.json({
        bookingCount,
      });
    }
  });
};
