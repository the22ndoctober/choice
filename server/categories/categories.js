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

  const parsedData = [];
  let iteratorBlocker = 0;

  for (const i of store_id) {
    const resp = await get(`/products/categories?store_id=${i}`);
    const data = await resp.json();

    parsedData.push(...data.categories);
  }

  console.log("1");

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

  categories.map((cat) => {
    if (map.has(cat.title) && cat.level === 1) {
      const targetID = filtred.findIndex(
        (item) => cat.title === item.category.title
      );

      filtred[targetID].category.category_id = [
        ...filtred[targetID].category.category_id,
        cat.category_id,
      ];
      return;
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

  return filtred;
}

module.exports = { GetCats };
