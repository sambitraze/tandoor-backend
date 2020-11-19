var express = require("express");
var router = express.Router();

const {
  getUserById,
  getUser,
  getUsers,
  updateUser,
} = require("../controllers/user");

// Middlewares
// const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");

const user = require("../models/user");

//Params
router.param("userId", getUserById);

//All Routes

//Get a User
router.get("/user/:userId", getUser);

//Get All Users
router.get("/getUsers/:userId", getUsers);

//Update User
router.put("/user/:userId", updateUser);

module.exports = router;
