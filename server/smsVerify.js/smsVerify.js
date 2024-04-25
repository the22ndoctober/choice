function smsVerify(app, PORT) {
  require("dotenv").config();
  const mongoose = require("mongoose");
  const { connectMongoDB } = require("../lib/mongodb");

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromPhone = process.env.TWILIO_NUMBER;

  const client = require("twilio")(accountSid, authToken);

  connectMongoDB();
  const db = mongoose.connection;

  const otpSchema = new mongoose.Schema({
    phoneNumber: String,
    otp: String,
  });

  const OtpModel = mongoose.model("Otp", otpSchema);

  const generateOTP = () => {
    return Math.floor(1000000 + Math.random() * 900000);
  };

  app.post("/delete", async (req, res) => {
    const { phoneNumber } = req.body;

    const otpPrev = await OtpModel.find({ phoneNumber });
    if (otpPrev) {
      await OtpModel.deleteMany({ phoneNumber });
    }
    res.json("deleted");
  });

  app.post("/send-otp", async (req, res) => {
    const { phoneNumber } = req.body;

    const otpPrev = await OtpModel.find({ phoneNumber });
    if (otpPrev) {
      await OtpModel.deleteMany({ phoneNumber });
    }

    const otp = generateOTP();

    const otpDocument = new OtpModel({ phoneNumber, otp });
    otpDocument.save();

    client.messages
      .create({
        body: `Ваш код авторизації для входу у ChoiceShop: ${otp}`,
        from: fromPhone,
        to: phoneNumber,
      })
      .then(() => {
        console.log("ПОЛУЧИЛОСЯ!!");
        res.send({ success: true, otp: otp });
      })
      .catch((err) => {
        console.log(err);

        res.status(500).send({ success: false, error: "Failed to send OTP" });
      });
  });

  app.post("/verify-otp", async (req, res) => {
    const { phoneNumber, userOTP } = req.body;

    try {
      const otpDocument = await OtpModel.findOne({ phoneNumber, otp: userOTP });
      if (otpDocument) {
        res.send({ success: true });
      } else {
        res.status(401).send({ succes: false, error: "Invalid OTP" });
      }
    } catch (error) {
      console.log(err);

      res.status(500).send({ success: false, error: "Error to send OTP" });
    }
  });
}

module.exports = { smsVerify };
