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
    return data;
  }

  const response = await Promise.all(
    store_id.map((store) => getCategories(store))
  );

  const parsedData = [];

  response.map((categories) => parsedData.push(...categories.categories));

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
    const result = [];

    for (let i = 0; i < cats.length; i++) {
      if (map.has(cats[i].title)) {
        const idx = result.findIndex((cat) => cat.title === cats[i].title);
        if (result[idx].level === cats[i].level) {
          result[idx] = {
            ...result[idx],
            category_id: [...result[idx].category_id, cats[i].category_id],
          };
        }
        continue;
      }
      result.push({ ...cats[i], category_id: [cats[i].category_id] });
      map.set(cats[i].title, cats[i].title);
    }

    return result;
  }

  const sameTitleLess = sameTitleHandle(categories);

  console.log("ended");

  return sameTitleLess;
}

module.exports = { GetCats };
