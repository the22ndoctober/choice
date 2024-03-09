const bent = require("bent");

async function GetCats(store_id, res) {
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

  const filtredData = data.categories.filter((cat) =>
    store_id.some((id) => id === cat.store_id)
  );

  return filtredData;
}

function SortCategories(categories) {
  let map = new Map();
  let childCategories = [];
  let parentCategories = [];
  categories.map((cat) => {
    if (cat.parent === null) {
      if (map.has(cat.title)) {
        parentCategories = parentCategories.map((parentCat) => {
          if (parentCat.title === cat.title)
            return {
              ...parentCat,
              category_id: Array.isArray(parentCat.category_id)
                ? [...parentCat.category_id, cat.category_id]
                : [parentCat.category_id, cat.category_id],
            };
          return parentCat;
        });
        return;
      }
      parentCategories.push({ ...cat, category_id: [cat.category_id] });
      map.set(cat.title, cat.category_id);
      return;
    }
    childCategories.push({ ...cat, category_id: [cat.category_id] });
    return;
  });

  return { parents: parentCategories, childen: childCategories };
}

function GenerateChildren(parents, children) {
  let result = [];

  parents.map((parent) => {
    let childrenHasParent = children.filter((child) =>
      parent.category_id.some((id) => id === child.parent.id)
    );

    if (childrenHasParent.length > 0) {
      if (childrenHasParent.length > 1) {
        let map = new Map();
        let mutate = [];

        childrenHasParent.map((child, id) => {
          if (map.has(child.title)) {
            mutate = mutate.map((val) => {
              if (val.title === child.title) {
                return {
                  ...val,
                  category_id: [...val.category_id, child.category_id],
                };
              }
              return val;
            });
            return;
          }
          map.set(child.title, id);
          mutate.push({ ...child, category_id: [child.category_id] });
          return;
        });

        childrenHasParent = mutate;
      }

      result.push({ ...parent, children: childrenHasParent });
      return;
    }

    result.push(parent);
    return;
  });

  return result;
}

module.exports = { GetCats, SortCategories, GenerateChildren };
