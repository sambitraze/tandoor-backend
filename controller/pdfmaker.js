const pdf = require("html-pdf");
const { response } = require("express");
const Order = require("../models/order");
const Item = require("../models/item");
exports.createPdf = (req, res) => {
  let items = [];
  let totalItems = 0;
  let totalAmt = 0;

  try {
    const order = new Order(req.body);

    var table =
      '<center><table style="text-align:center;width:95%;font-weight: bold;"><thead><tr><th colspan="6">Tandoor Hut</th></tr></thead><tbody><tr></tr><tr></tr><tr><td colspan="6">Godhana Road Ara<br>Phone No. 9852259112, 8340245998<br>Email: tandoorhutara@gmail.com<br>GSTIN:10HIAPK7037L1ZA<br>State: 10-Bihar</td></tr><tr></tr><tr></tr><tr><td colspan="6">TAX INVOICE</td></tr><tr></tr><tr></tr><tr><td colspan="3"></td><td colspan="2">Invoice No.</td><td>' +
      req.body.orderId +
      '</td></tr><tr><td colspan="3"></td><td colspan="2">Date</td><td>' +
      req.body.date +
      '</td></tr><tr><td colspan="6"></td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr><td>#</td><td colspan=2>Item Name</td><td>Price/U</td><td>Quantity</td><td>Amount</td></tr>';
    let count = 0;
    for (i = 0; i < req.body.items.length; i++) {
      table += `<tr> 
      <td>${i + 1}</td> 
      <td colspan=2>${req.body.items[i].item.name}</td> 
      <td>${req.body.items[i].item.price}</td>
      <td>${req.body.items[i].count}</td>
      <td>${req.body.items[i].item.price * req.body.items[i].count}</td> </tr>`;
      count += parseInt(req.body.items[i].count, 10);
    }

    table +=
      '<tr></tr><tr></tr><tr><td></td><td colspan="2">Total</td><td></td><td>' +
      count +
      "</td><td>" +
      req.body.amount +
      '</td></tr><tr></tr><tr></tr><tr></tr><tr></tr><tr><td></td><td></td><td></td><td colspan="2">Packing</td><td>' +
      req.body.packing +
      '</td></tr><tr><td colspan="2">Bill To:</td><td>' +
      req.body.custName +
      '</td><td colspan="2">CGST</td><td>' +
      (req.body.gst / 2).toFixed(2) +
      "</td></tr><tr><td>Mob No.</td><td></td><td>" +
      req.body.custNumber +
      '</td><td colspan="2">SGST</td><td>' +
      (req.body.gst / 2).toFixed(2) +
      '</td></tr><tr><td></td><td></td><td></td><td colspan="2">Total</td><td>' +
      (
        parseFloat(req.body.amount) +
        parseFloat(req.body.packing) +
        parseFloat(req.body.gst)
      ).toFixed(2);
    ('</td></tr><tr><td></td><td></td><td></td><td colspan="2"></td><td></td></tr><tr><td></td><td></td><td></td><td colspan="2"></td><td></td></tr></tbody></table></center>');
    '</td></tr><tr><td></td><td></td><td></td><td colspan="2">Offer</td><td>' +
      "-"(
        parseFloat(req.body.amount) *
          0.01 *
          parseFloat(req.body.offer.percentage)
      );
    '</td></tr><tr><td></td><td></td><td></td><td colspan="2">Grand Total</td><td>' +
      (
        parseFloat(req.body.amount) +
        parseFloat(req.body.packing) +
        parseFloat(req.body.gst)
      ).toFixed(2) -
      parseFloat(req.body.amount) *
        0.01 *
        parseFloat(req.body.offer.percentage);
    ('</td></tr><tr><td></td><td></td><td></td><td colspan="2"></td><td></td></tr><tr><td></td><td></td><td></td><td colspan="2"></td><td></td></tr></tbody></table></center>');

    html = table;
    var options = { width: "56mm" };
    pdf.create(html, options).toStream((err, stream) => {
      if (err) return console.log(err);
      res.status(200);
      stream.pipe(res);
    });
  } catch (error) {
    console.log(error);
    response.status(401).send("Error!");
  }
};
