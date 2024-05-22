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
      const category_id = category.category_id;
      const store_id = category.store_id;

      if (
        category.title === "Послуги" ||
        category.title === "Кнопкові телефони"
      )
        return;

      if (!map.has(category.title)) {
        map.set(category.title, category.title);
        result.push({
          ...category,
          category_id: new Array(category_id),
          store_id: new Array(store_id),
        });
        return;
      }

      const IDX = result.findIndex(
        (cat) =>
          cat.title === category.title &&
          cat.level === category.level &&
          cat.store_id.every((id) => id !== category.store_id)
      );

      if (IDX !== -1) {
        result[IDX] = {
          ...result[IDX],
          category_id: result[IDX].category_id.some((id) => id === category_id)
            ? result[IDX].category_id
            : [...result[IDX].category_id, category_id],
          store_id: [...result[IDX].store_id, store_id],
        };
        return;
      }

      result.push({
        ...category,
        category_id: new Array(category_id),
        store_id: new Array(store_id),
      });
    });

    return result;
  }

  const sameTitleLess = sameTitleHandle(categories);

  sameTitleLess.sort((a, b) => b.title - a.title);

  return sameTitleLess;
}

module.exports = { GetCats };
