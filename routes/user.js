var express = require("express");
var router = express.Router();

const {
  getUserById,
  getUser,
  getUsers,
  updateUser,
  createUser,
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

//Get All Users
router.get("/", getUsers);

//Update User
router.put("/update/:userId", updateUser);

module.exports = router;
