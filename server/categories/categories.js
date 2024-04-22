const bent = require("bent");

async function GetCats(store_id) {
  let clientServerOptions = {
    baseUrl: "https://api.dntrade.com.ua",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ApiKey: process.env.API_KEY,
    },
  };

  const get = bent(
    (baseUrl = clientServerOptions.baseUrl),
    (method = clientServerOptions.method),
    (headers = clientServerOptions.headers)
  );

  const resp = await get(`/products/categories?store_id=${store_id[0]}`);
  const data = await resp.json();
  const resp1 = await get(`/products/categories?store_id=${store_id[1]}`);
  const data1 = await resp1.json();
  const resp2 = await get(`/products/categories?store_id=${store_id[2]}`);
  const data2 = await resp2.json();
  //   const resp3 = await get(`/products/categories?store_id=${store_id[3]}`);
  //   const data3 = await resp3.json();
  //   const resp4 = await get(`/products/categories?store_id=${store_id[4]}`);
  //   const data4 = await resp4.json();
  //   const resp5 = await get(`/products/categories?store_id=${store_id[5]}`);
  //   const data5 = await resp5.json();

  const parsedData = [
    ...data.categories,
    ...data1.categories,
    ...data2.categories,
    //  ...data3.categories,
    //  ...data4.categories,
    //  ...data5.categories,
  ];

  class Category {
    constructor(category, child = null) {
      this.category = category;
      this.child = child;
    }
    childLink() {
      return this.child;
    }

    setChild(newChild) {
      this.child = this.child === null ? [newChild] : [...this.child, newChild];
    }

    addCategoryId(newId) {
      this.category.category_id = [...this.category_id, newId];
    }
  }

  function quickSort(result) {
    if (result.length <= 1) {
      return result;
    }
    let pivotIndex = Math.floor(result.length / 2);
    let pivot = result[pivotIndex];
    let less = [];
    let greater = [];
    for (let i = 0; i < result.length; i++) {
      if (i === pivotIndex) continue;
      if (result[i].level <= pivot.level) {
        less.push(result[i]);
      } else {
        greater.push(result[i]);
      }
    }

    return [...quickSort(less), pivot, ...quickSort(greater)];
  }

  let categories = quickSort(parsedData);

  const map = new Map();
  let filtred = [];

  parsedData.map((cat) => {
    if (map.has(cat.title)) {
    }

    map.set(cat.title, cat.category_id);

    if (cat.parent === null) {
      filtred.push(new Category({ ...cat, category_id: [cat.category_id] }));
      return;
    }

    const parentIndex = filtred.findIndex((item) =>
      item.category.category_id.some((idx) => idx === cat.parent.id)
    );

    if (parentIndex === -1) return;

    filtred[parentIndex].setChild(new Category(cat));
  });

  console.log("1");

  return filtred;
}

async function GetSubCats(stores, req) {
  let clientServerOptions = {
    baseUrl: "https://api.dntrade.com.ua",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ApiKey: process.env.API_KEY,
    },
  };

  const get = bent(
    (baseUrl = clientServerOptions.baseUrl),
    (method = clientServerOptions.method),
    (headers = clientServerOptions.headers)
  );

  const resp = await get(`/products/categories`);

  const data = await resp.json();

  const map = new Map();
  const filtredData = [];

  data.categories.map((cat) => {
    if (stores.some((id) => id === cat.store_id) && cat.parent !== null) {
      if (req.body.category_id.some((id) => id === cat.parent.id)) {
        if (map.has(cat.title)) {
          let targetID = filtredData.findIndex(
            (item) => item.title === cat.title
          );
          filtredData[targetID].category_id = [
            ...filtredData[targetID].category_id,
            cat.category_id,
          ];
          return;
        }

        map.set(cat.title, cat.title);
        filtredData.push({ ...cat, category_id: [cat.category_id] });
      }
    }
  });

  function quickSort(cats) {
    if (cats.length <= 1) {
      return cats;
    }
    let pivotIndex = Math.floor(cats.length / 2);
    let pivot = cats[pivotIndex];
    let less = [];
    let greater = [];
    for (let i = 0; i < cats.length; i++) {
      if (i === pivotIndex) continue;
      if (cats[i].title < pivot.title) {
        less.push(cats[i]);
      } else {
        greater.push(cats[i]);
      }
    }

    return [...quickSort(less), pivot, ...quickSort(greater)];
  }

  const sortedData = quickSort(filtredData);

  console.log(sortedData);

  return sortedData;
}

module.exports = { GetCats, GetSubCats };
