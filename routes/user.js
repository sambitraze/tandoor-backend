var express = require("express");
var router = express.Router();

const {
  getUserById,
  getUser,
  getUsers,
  updateUser,
  createUser,
  getUserByPhone,
  userCount
} = require("../controller/user");

// Middlewares
// const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");

const user = require("../models/user");

//Params
router.param("userId", getUserById);

//All Routes

//Create a User
router.post("/create/", createUser);

//Get a User
router.get("/:userId", getUser);

//Get User By Phone Number
router.post("/number", getUserByPhone);

//Get All Users
router.get("/", getUsers);

router.post("/count", userCount);

//Update User
router.put("/update/:userId", updateUser);

module.exports = router;
