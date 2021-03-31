const express = require("express");
const router = express.Router();

const {createBooking,updateBooking,getAllBooking,gettodayBookingByDate,getpastBookingByDate,getAllBookingByUserId, getBookingCount} = require("../controller/booking");

router.post("/create", createBooking);
router.put("/update", updateBooking);
router.get("/", getAllBooking);
router.post("/today", gettodayBookingByDate);
router.post("/past", getpastBookingByDate);
router.post("/user", getAllBookingByUserId);
router.get("/count", getBookingCount);

module.exports = router;