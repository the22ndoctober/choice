const { userSchema } = require("../user/dashboardOrders");
const bent = require("bent");

function smsVerify(app, PORT) {
  const jwt = require("jsonwebtoken");
  require("dotenv").config();
  const { v4: uuidv4 } = require("uuid");
  const mongoose = require("mongoose");
  const { connectMongoDB } = require("../lib/mongodb");

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromPhone = process.env.TWILIO_NUMBER;

  //new sms verify

  const API_KEY = process.env.SMS_VERIFY_API_KEY;

  //

  const client = require("twilio")(accountSid, authToken);

  connectMongoDB();
  const db = mongoose.connection;

  const otpSchema = new mongoose.Schema({
    phoneNumber: String,
    otp: String,
  });

  const OtpModel = mongoose.model("Otp", otpSchema);

  const User = mongoose.model("User", userSchema);

  const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 90000);
  };

  app.post("/server/send-otp", async (req, res) => {
    try {
      console.log("i here");
      const { phoneNumber } = req.body;

      const otpPrev = await OtpModel.find({ phoneNumber });
      if (otpPrev) {
        await OtpModel.deleteMany({ phoneNumber });
      }

      const otp = generateOTP();

      const otpDocument = new OtpModel({ phoneNumber, otp });
      otpDocument.save();

      let clientServerOptions = {
        baseUrl: "https://api.sms.intel-tele.com",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ApiKey: process.env.API_KEY,
        },
      };

      const post = bent(
        (baseUrl = clientServerOptions.baseUrl),
        (method = clientServerOptions.method),
        (headers = clientServerOptions.headers)
      );

      const phoneCut = phoneNumber.substring(1);

      const resp = await fetch(
        `https://api.sms.intel-tele.com/message/send/?username=U-LombardSeif&api_key=${API_KEY}&from=LombardSeif&to=${phoneCut}&message=Ваш%20код%20для%20входу%20у%20ChoiceShop:%20${otp}`
      );

      console.log(resp.ok);

      if (resp.ok) {
        console.log("Получилося");
        res.send({ success: true, body: resp });
      } else {
        res.status(500).send({
          success: false,
          error: "Failed to send OTP",
        });
      }
    } catch (error) {
      res.status(500).send({
        success: false,
        error: "Failed to send OTP",
      });
    }

    // client.messages
    //    .create({
    //       body: `Your verify code from Choice Shop: ${otp}`,
    //       from: fromPhone,
    //       to: phoneNumber,
    //    })
    //    .then(() => {
    //       console.log("ПОЛУЧИЛОСЯ!!")
    //       res.send({ success: true, otp: otp })
    //    })
    //    .catch((err) => {
    //       console.log(err)

    //       res.status(500).send({
    //          success: false,
    //          error: "Failed to send OTP",
    //       })
    //    })

    // res.send({ success: true, otp: otp })
  });

  app.post("/server/verify-otp", async (req, res) => {
    function generateRandomString(length) {
      let result = "";
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    }

    const randomString = generateRandomString(32);
    const { phoneNumber, userOTP } = req.body;

    try {
      const otpDocument = await OtpModel.findOne({
        phoneNumber,
        otp: userOTP,
      });
      if (otpDocument) {
        const user = await User.findOne({ phone: phoneNumber });
        if (user) {
          await User.updateOne(
            { phone: phoneNumber }, // Query
            { $set: { jwt: randomString } } // Update
          );
          user.save();
        }

        if (!user) {
          await User.create({
            id: uuidv4(),
            name: "",
            surname: "",
            phone: phoneNumber,
            createdAt: new Date(),
            updatedAt: new Date(),
            jwt: randomString,
            orders: [],
          });
          user.save();
        }

        res.send({ success: true, jwt: randomString });
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
