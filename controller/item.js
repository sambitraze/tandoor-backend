const Item = require("../models/item");

exports.createItem = (req, res) => {
  const item = new Item(req.body);
  item.save((err, item) => {
    if (err) {
      res.status(400).json({
        error: "error saving item in DB",
      });
    }
    res.json(item);
  });
};

exports.deleteitem = (req, res) => {
  let item = req.Item;
  Item.deleteOne(item, (err, itemdeleted) => {
    if (err) {
      res.status(400).json({
        error: "error deleting item in DB",
      });
    }
    res.json({
      message: "Deleted",
      itemdeleted,
    });
  });
};

exports.updatetItem = (req, res) => {
  Item.updateOne(
    { _id: req.body._id },
    { $set: req.body },
    (err, itemUpdated) => {
      if (err) {
        res.status(400).json({
          error: "error updating item in DB",
        });
      }
      res.json({
        message: "Updated",
        itemUpdated,
      });
    }
  );
};

exports.getAllItem = (req, res) => {
  Item.find().sort([["name", "asc"]]).exec((err, items)=>{
      if(err){
        res.status(400).json({
            error: "error getting items from DB",
          });
      }
      res.json(items);
  });
};
