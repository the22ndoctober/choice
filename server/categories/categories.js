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
    return data;
  }

  const response = await Promise.all(
    store_id.map((store) => getCategories(store))
  );

  const parsedData = [];

  response.map((categories) => parsedData.push(...categories.categories));

  class Category {
    constructor(category, parentClass = null, child = null) {
      this.category = category;
      this.child = child;
      this.parentClass = parentClass;
    }
    childLink() {
      return this.child;
    }

    parentLink() {
      return this.parentClass;
    }

    setChild(newChild) {
      this.child = this.child === null ? [newChild] : [...this.child, newChild];
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

  console.log(categories[categories.length - 1]);

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
      }
      result.push({ ...cats[i], category_id: [cats[i].category_id] });
      map.set(cats[i].title, cats[i].title);
    }

    return result;
  }

  const sameTitleLess = sameTitleHandle(categories);
  let filtred = [];
  sameTitleLess.map((cat) => {
    if (cat.parent === null) {
      filtred.push(new Category(cat));
      return;
    }

    const parentId = filtred.findIndex((category) =>
      category.category.category_id.some((idx) => idx === cat.parent.id)
    );

    console.log(parentId);

    const childCat = new Category(cat, filtred[parentId]);

    filtred[parentId].setChild(childCat);

    filtred.push(childCat);
  });

  return filtred;
}

module.exports = { GetCats };
