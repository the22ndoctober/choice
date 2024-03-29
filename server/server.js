const express = require("express");
const cors = require("cors");
const bent = require("bent");
const {
  GetCats,
  SortCategories,
  GenerateChildren,
} = require("./categories/categories");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3002;

app.listen(PORT);

app.get("/getCatSorted", async function (req, res) {
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
    .filter((store) => store.is_sell === true)
    .map((store) => store.id);

  const data = await GetCats(["5D06BC79-3901-46B3-A434-DEEA4965DC78"], res);

  // ...filtredStores,

  const { parents, childen } = SortCategories([...data]);

  const finalArray = GenerateChildren(parents, childen);

  console.log(finalArray);

  res.json(finalArray);
});

app.get("/test", async function (req, res) {
  console.log("response success");

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

  const resp = await post("/products/categories");
  const data = await resp.json();

  const filtred = data.categories.filter(
    (cat) => cat.store_id === "A1BDE61D-A7D3-456C-ABC0-4C3EA672D5E4"
  );

  res.json(filtred);
});

app.post("/searchProducts", async function (req, res) {
  console.log("response success");

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
    {
      store_id: "A1BDE61D-A7D3-456C-ABC0-4C3EA672D5E4",
    }
  );
  const data = await resp.json();

  res.json(data);
});

app.post("/getCategoryProducts", async function (req, res) {
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

  let result = [];

  for (let i = 0; i < req.body.category_id.length; i++) {
    const resp = await post(
      `/products/list?category_id=${req.body.category_id[i]}`
    );
    const data = await resp.json();

    result.push(...data.products);
  }

  res.json(result);
});

app.post("/getGoods", async function (req, res) {
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

  const resp = await post(`/products/list`, {
    product_id: req.body.product_id,
  });

  const data = await resp.json();

  console.log(data);

  res.json(data);
});

app.get("/static", async function (req, res) {
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

console.log("Hello!");
