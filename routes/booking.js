const express = require("express");
const router = express.Router();

const {createBooking,updateBooking,getAllBooking,getAllBookingByDate,getAllBookingByUserId, getBookingCount} = require("../controller/booking");

router.post("/create", createBooking);
router.put("/update", updateBooking);
router.post("/", getAllBooking);
router.post("/date", getAllBookingByDate);
router.post("/user", getAllBookingByUserId);
router.get("/count", getBookingCount);

module.exports = router;