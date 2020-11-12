const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyparser = require('body-parser');
const temproute = require("./routes/temp");
const itemroute = require("./routes/item");
const orderRoute = require("./routes/order");
const cors = require("cors");
require("dotenv/config");

app.use(cors());
app.use(bodyparser.json());
app.use("/api", temproute);
app.use("/item", itemroute);
app.use("/order", orderRoute);

//Mongo DB
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

//Routes
app.get("/", (req, res) => {
  res.send("server is live");
});

//
app.listen(3000);
