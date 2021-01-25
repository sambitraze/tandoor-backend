const express = require("express");
const router = express.Router();

const {getOffer,updateOfferById, createOffer, getAppOffer} = require("../controller/offer");


router.post("/create", createOffer);
router.put("/update", updateOfferById);
router.get("/", getOffer);
router.get("/unblocked", getAppOffer);

module.exports = router;