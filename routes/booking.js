const express = require("express");
const router = express.Router();

const {createBooking,updateBooking,getTodayBookingByUserId,getPastBookingByUserId,gettodayBookingByDate,getpastBookingByDate,getAllBookingByUserId, getBookingCount} = require("../controller/booking");

router.post("/create", createBooking);
router.put("/update", updateBooking);
router.post("/today", getTodayBookingByUserId);
router.post("/today", getPastBookingByUserId);
router.post("/today", gettodayBookingByDate);
router.post("/past", getpastBookingByDate);
router.post("/user", getAllBookingByUserId);
router.get("/count", getBookingCount);

module.exports = router;