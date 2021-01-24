const express = require("express");
const router = express.Router();

const {getOffer,updateOfferById, createOffer} = require("../controller/offer");


router.post("/create", createOffer);
router.put("/update", updateOfferById);
router.get("/", getOffer);

module.exports = router;