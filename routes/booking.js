const express = require("express");
const router = express.Router();

const {createBooking,updateBooking,getTodayBookingByUserId,getPastBookingByUserId,gettodayBookingByDate,getpastBookingByDate, getBookingCount} = require("../controller/booking");

router.post("/create", createBooking);
router.put("/update", updateBooking);
router.post("/user/today", getTodayBookingByUserId);
router.post("/user/past", getPastBookingByUserId);
router.post("/today", gettodayBookingByDate);
router.post("/past", getpastBookingByDate);
router.get("/count", getBookingCount);

module.exports = router;