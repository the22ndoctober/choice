const bent = require("bent");

async function GetCats(store_id) {
  console.log("started");

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

  async function getCategories(store) {
    const resp = await get(`/products/categories?store_id=${store}`);
    const data = await resp.json();
    return data.categories;
  }

  const response = await Promise.all(
    store_id.map((store) => getCategories(store))
  );

  const parsedData = [];

  response.map((cats) => parsedData.push(...cats));

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

  function sameTitleHandle(cats) {
    const map = new Map();
    let result = [];

    cats.map((category, i) => {
      let category_id = category.category_id;

      if (map.has(category.title)) {
        const idx = result.findIndex((value) => value.title === category.title);

        if (category.level === result[idx].level) {
          if (result[idx].category_id.some((cat) => cat !== category_id)) {
            result[idx].category_id = [...result[idx].category_id, category_id];
          }
          result[idx].store_id = [...result[idx].store_id, category.store_id];
          return;
        }
      }
      map.set(category.title, category.title);
      result.push({
        ...category,
        store_id: [category.store_id],
        category_id: [category_id],
      });
    });

    return result;
  }

  const sameTitleLess = sameTitleHandle(categories);

  return sameTitleLess;
}

module.exports = { GetCats };
