const express = require("express");
const cors = require("cors");
const bent = require("bent");
const {
  GetCats,
  SortCategories,
  GenerateChildren,
  GetSubCats,
} = require("./categories/categories");
const smsVerify = require("./smsVerify.js/smsVerify");
const dashBoardOrders = require("./user/dashboardOrders");
const skipStores = [
  "E4DB401B-717D-4F09-A223-B9E9D0446361",
  "459307A2-460B-4052-84E5-16145AD098DD",
  "833a605c-fa32-46b6-9735-067239c68634",
];

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  product_id: String,
  title: String,
  category_id: String,
  category: {
    title: String,
  },
  store_id: String,
  sku: String,
  code: Number,
  short_desription: String,
  desription: String,
  image_path: String,
  images: [String],
  price: String,
});

const PORT = 3002;

app.listen(PORT);

smsVerify.smsVerify(app, PORT);
dashBoardOrders.DashboardOrders(app, PORT, bent);

app.get("/server/test", async function (req, res) {
  if (req.headers.secret !== process.env.SECRET_KEY) {
    res.status(401).send({ success: false, error: "Wrong key" });
    return;
  }
  res.status(200).send({ success: true, msg: "You were authorized" });
});

app.post("/server/searchProducts", async function (req, res) {
  let clientServerOptions = {
    baseUrl: "https://api.dntrade.com.ua",
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

  const get = bent(
    (baseUrl = clientServerOptions.baseUrl),
    (method = "GET"),
    (headers = clientServerOptions.headers)
  );

  //   const stores = await get("/products/stores").then((data) => data.json());

  //   const filtredStores = stores.stores
  //     .filter(
  //       (store) =>
  //         (store.is_sell === true ||
  //           store.id === "5D06BC79-3901-46B3-A434-DEEA4965DC78") &&
  //         skipStores.every((str) => str !== store.id)
  //     )
  //     .map((store) => store.id);

  //   console.log(filtredStores);

  //   async function getProductByStore(store, result, offset) {
  //     const resp = await post(
  //       `/products/list?store_id=${store}&offset=${offset}`
  //     );
  //     const data = await resp.json();
  //     const resulted = [...result, ...data.products];
  //     console.log(data.products.length);
  //     if (data.products.length <= 99) {
  //       return resulted;
  //     }
  //     return getProductByStore(store, resulted, offset + 100);
  //   }

  //   const parsedData = await Promise.all(
  //     filtredStores.map((store) => getProductByStore(store, [], 0))
  //   );

  //   const response = [];
  //   parsedData.map((array) => {
  //     response.push(...array);
  //   });

  const { connectMongoDB } = require("./lib/mongodb");
  connectMongoDB();

  const Product = new mongoose.model("Product", productSchema);

  //   await Product.deleteMany({});

  //   console.log("started");

  //   for (const product of response) {
  //     const item = new Product({
  //       product_id: product.product_id,
  //       title: product.title,
  //       category_id: product.category.category_id,
  //       category: {
  //         title: product.category.title,
  //       },
  //       store_id: product.store_id,
  //       sku: product.sku,
  //       code: product.code,
  //       short_desription: product.short_desription,
  //       desription: product.desription,
  //       image_path: product.image_path,
  //       images: product.images,
  //       price: product.price,
  //     });
  //     item.save();
  //   }

  const data = await Product.find();

  console.log("ended");

  res.json(data);
});

app.post("/server/getCategoryProducts", async function (req, res) {
  let clientServerOptions = {
    baseUrl: "https://api.dntrade.com.ua",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ApiKey: process.env.API_KEY,
    },
  };

  const get = bent(
    (baseUrl = clientServerOptions.baseUrl),
    (method = "GET"),
    (headers = clientServerOptions.headers)
  );

  const post = bent(
    (baseUrl = clientServerOptions.baseUrl),
    (method = clientServerOptions.method),
    (headers = clientServerOptions.headers)
  );

  async function getCategoryProducts(cat) {
    const resp = await post(`/products/list?category_id=${cat}`);
    const data = await resp.json();

    return data.products;
  }

  try {
    const parsedData = await Promise.all(
      req.body.category_id.map((cat) => getCategoryProducts(cat))
    );

    if (parsedData) {
      res.json(parsedData[0]);
    } else {
      res.status(401).send("no data");
    }
  } catch (error) {
    res.status(500).send("Error when trying to get products");
  }
});

app.post("/server/getGoods", async function (req, res) {
  let clientServerOptions = {
    baseUrl: "https://api.dntrade.com.ua",
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

  try {
    const resp = await post(`/products/list`, {
      product_id: req.body.product_id,
    });

    const data = await resp.json();

    if (data) {
      res.json(data);
    } else {
      res.status(401).send("not founded");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/server/static", async function (req, res) {
  let clientServerOptions = {
    baseUrl: "https://api.dntrade.com.ua",
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

  const resp = await post(
    "/products/list?store_id=A1BDE61D-A7D3-456C-ABC0-4C3EA672D5E4",
    {}
  );
  const data = await resp.json();

  res.json(data);
});

app.post("/server/getProducts", async function (req, res) {
  let clientServerOptions = {
    baseUrl: "https://api.dntrade.com.ua",
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
  try {
    const resp = await post(`/products/list`, {
      product_id: req.body.product_id,
    });

    const data = await resp.json();

    if (data.products) {
      res.json(data);
    } else {
      res.status(401).send("Error");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/server/getAllCategories", async function (req, res) {
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

  const stores = await post("/products/stores").then((data) => data.json());

  const filtredStores = stores.stores
    .filter(
      (store) =>
        store.is_sell === true && skipStores.every((str) => str !== store.id)
    )
    .map((store) => store.id);

  const data = await GetCats(filtredStores);

  res.json(data);
});
