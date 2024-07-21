require("dotenv").config();
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product_id: String,
  balance: String,
  title: String,
  category_id: String,
  category: {
    title: String,
  },
  store_id: String,
  sku: String,
  code: Number,
  short_description: String,
  description: String,
  image_path: String,
  images: [String],
  price: String,
  tags: [mongoose.Schema.Types.Mixed],
});

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
  surname: String,
  phone: String,
  jwt: String,
  createdAt: Date,
  updatedAt: Date,
  email: String,
  birthDate: String,
  orders: [orderSchema],
  favProducts: [productSchema],
});

function DashboardOrders(app, PORT, bent) {
  const { connectMongoDB } = require("../lib/mongodb");

  connectMongoDB();
  const db = mongoose.connection;

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
      if (user) {
        res.json(user);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  });

  app.post("/server/getProfileByJWT", async function (req, res) {
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
      const user = await User.findOne({ jwt: req.headers.jwt });

      if (user) {
        res.json(user);
      } else {
        res.status(401).send("No valid user");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  });

  app.post("/server/changeInfo", async function (req, res) {
    try {
      const user = await User.findOne({ jwt: req.headers.jwt });
      console.log(123);

      if (user) {
        const newUser = await User.updateOne(
          { jwt: req.headers.jwt },
          {
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            birthDate: req.body.birthDate,
          }
        ).then((result) => result);
        res.json(newUser);
      } else {
        res.status(401).send("No valid user");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  });

  app.post("/server/addFavProducts", async function (req, res) {
    try {
      const user = await User.findOne({ jwt: req.headers.jwt });

      if (user) {
        if (
          !user.favProducts.some(
            (item) => item.product_id === req.body.product.product_id
          )
        ) {
          User.findOneAndUpdate(
            { jwt: req.headers.jwt },
            { $push: { favProducts: req.body.product } },
            { new: true, useFindAndModify: false }
          )
            .then((updatedDocument) => {
              if (updatedDocument) {
                console.log(
                  "Successfully pushed item:",
                  req.body.product.product_id,
                  "to document:",
                  updatedDocument.id
                );
              } else {
                console.log("Document not found");
              }
            })
            .catch((err) =>
              console.error(
                "Failed to push item:",
                req.body.product.product_id,
                "Error:",
                err
              )
            );
        } else {
          console.log("1");
        }
      } else {
        res.status(401).send("No valid user");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  });

  app.post("/server/removeFavProducts", async function (req, res) {
    try {
      const user = await User.findOne({ jwt: req.headers.jwt });
      console.log(req.body.product_id);

      if (user) {
        User.findOneAndUpdate(
          { jwt: req.headers.jwt },
          { $pull: { favProducts: { product_id: req.body.product_id } } },
          { new: true, useFindAndModify: false }
        )
          .then((updatedDocument) => {
            if (updatedDocument) {
              console.log(
                "Successfully removed item:",
                req.body.product_id,
                "to document:",
                updatedDocument.id
              );
            } else {
              console.log("Document not found");
            }
          })
          .catch((err) =>
            console.error(
              "Failed to push item:",
              req.body.product_id,
              "Error:",
              err
            )
          );
      } else {
        res.status(401).send("No valid user");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  });
}

module.exports = { DashboardOrders, orderSchema, userSchema };
