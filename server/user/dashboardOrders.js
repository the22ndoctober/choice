function DashboardOrders(app, PORT, bent) {
  require("dotenv").config();
  const mongoose = require("mongoose");
  const { connectMongoDB } = require("../lib/mongodb");

  connectMongoDB();
  const db = mongoose.connection;

  const orderSchema = new mongoose.Schema({
    id: String,
    createdAt: Date,
    updatedAt: Date,
    status: String,
    cart: [
      {
        product_id: String,
        store_id: String,
        title: String,
        img_path: String,
        amount: Number,
        price: String,
        currency: String,
      },
    ],
  });

  const userSchema = new mongoose.Schema({
    id: String,
    name: String,
    phone: String,
    createdAt: Date,
    updatedAt: Date,
    orders: [orderSchema],
  });

  const User = mongoose.model("User", userSchema);

  app.post("/server/dashboardOrders", async function (req, res) {
    let clientServerOptions = {
      baseUrl: "https://api.dntrade.com.ua",
      method: "GET",
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

    try {
      const user = await User.findOne({ phone: req.body.phone });
      console.log(user);
      res.json(user);
    } catch (error) {
      res.status(500).send(error);
    }
  });
}

module.exports = { DashboardOrders };
