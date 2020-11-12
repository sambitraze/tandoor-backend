const express = require("express");
const { updateOne } = require("../models/temp");
const router = express.Router();
const Temp = require("../models/temp");

router.get("/", async (req, res) => {
  try {
    const tempGet = await Temp.find();
    res.json(tempGet);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:postId", async (req, res) => {
  try {
    const getsingle = await Temp.findById(req.params.postId);
    res.json(getsingle);
  } catch (err) {
    res.json({ message: err });
  }
});
router.patch("/:postId", async (req, res) => {
  try {
    const updatesingle = await Temp.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatesingle);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:postId", async (req, res) => {
  try {
    const removedPost = await Temp.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/create", (req, res) => {
  const tempus = new Temp({
    title: req.body.title,
    description: req.body.description,
  });
  tempus
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
  console.log(req.body);
});
module.exports = router;
