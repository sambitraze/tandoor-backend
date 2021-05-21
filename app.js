require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const admin = require("firebase-admin");
const app = express();
const userRoutes = require("./routes/user");
const temproute = require("./routes/temp");
const itemroute = require("./routes/item");
const orderRoute = require("./routes/order");
const pdfRoute = require("./routes/pdfmaker");
const deliveryBoyRoute = require("./routes/delivery");
const notificationRoute = require("./routes/notifications");
const offerRoute = require("./routes/offer");
const topRoute = require("./routes/top");
const tableRoute = require("./routes/table");
const bookingRoute = require("./routes/booking");
const smsRoute = require("./routes/sms");
const path = require("path");
const cors = require("cors");
const http = require("http");
var serviceAccount = require("./serviceAccountKey.json");

app.use(cors());
app.use(express.json());
app.use("/", express.static(path.join(__dirname, '/dashboard')));
app.use("/user", userRoutes);
app.use("/api", temproute);
app.use("/item", itemroute);
app.use("/order", orderRoute);
app.use("/pdfmaker", pdfRoute);
app.use("/notification", notificationRoute);
app.use("/deliveryBoy", deliveryBoyRoute);
app.use("/offer", offerRoute);
app.use("/top", topRoute);
app.use("/table", tableRoute);
app.use("/booking", bookingRoute);
app.use("/sms", smsRoute);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://tandoor-hut.firebaseio.com"
});

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
// app.get("/", (req, res) => {
//   res.send("server is live");
// });

// for local
// app.listen(3000);

//for server 
const httpServer = http.createServer(app);
httpServer.listen(80, () => {
  console.log("HTTP Server running on port 80");
});
