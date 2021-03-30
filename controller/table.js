const Table = require("../models/table");
exports.createTable = (req, res) => {
    const table = new Table(req.body);
    table.save((err, table) => {
      if (err) {
        res.status(400).json({
          error: "error saving table in DB",
        });
      }
      res.json(table);
    });
  };

  exports.getTableLen = (req, res) => {
    Table.collection.countDocuments({}, (err, tablecount) => {
        if (err) {
          res.status(400).json({
            error: "Table count error",
          });
        } else {
          res.json({
            tablecount,
          });
        }
      });
  };