const User = require("../models/user");

exports.getUserById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "No user was found in DB",
      });
    }
    req.profile = user;
    next();
  });
};

exports.createUser = (req, res) => {
  const user = new User(req.body);
  user.save((err, user) => {
    console.log(err);
    if (err) {
      res.status(400).json({
        error: "error saving user in DB",
      });
    }
    res.json(user);
  });
};

exports.getUserByPhone = (req, res) => {
  User.find({ phone: req.body.phone })
    .populate({
      path: "cart",
      populate: {
        path: "item",
        models: "Item",
      },
    })
    .exec((err, user) => {
      if (user.length === 0 || err) {
        return res.status(400).json({
          error: "No Phone Number is there.",
        });
      } else res.json(user);
    });
};

exports.getUser = (req, res) => {
  req.profile.password = undefined; //Password
  req.profile.createdAt = undefined; //Created At
  req.profile.updatedAt = undefined; // Updated At
  return res.json(req.profile);
};

exports.getUsers = (req, res) => {
  User.find().exec((err, user) => {
    if (err) {
      res.status(400).json({
        error: "No USERS are found",
      });
    }
    res.json(user);
  });
};

exports.updateUser = (req, res) => {
  console.log(req.body);
  User.findByIdAndUpdate(
    { _id: req.body._id },
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, user) => {
      if (err) {
        console.log(err);
        return res.status(400).json({
          error: "You are not authorized to update this user",
        });
      }
      user.password = undefined;
      res.json(user);
    }
  );
};

exports.userCount = (req, res) => {
  User.collection.countDocuments({}, (err, usercount) => {
    if (err) {
      res.status(400).json({
        error: "user count error",
      });
    } else {
      res.json({
        usercount,
      });
    }
  });
};
