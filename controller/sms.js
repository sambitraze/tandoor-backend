const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

exports.sendSms = (req, res) => {
  try {
    client.messages
      .create({
        body: "Order Update\nYour order number: has been placed succesfully.",
        from: process.env.TWILIO_PHONE_NUMBER,
        to: req.body.phone,
      })
      .then((message) => res.send(message));
  } catch (e) {
    res.status(400).json(e);
  }
};
