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

  const resp = await get(`/products/categories?store_id=${store_id}`, {
    store_id: store_id,
  });

  const data = await resp.json();

  return data;
}

function SortCategories(categories) {
  let res = [...categories.sort((a, b) => a.level - b.level)];

  categories
    .sort((a, b) => b.level - a.level)
    .map((child) => {
      console.log(child.title);
      if (child.parent !== null) {
        let currentCatState = res.find(
          (parent) => parent.category_id === child.category_id
        );
        res = res
          .map((parent) => {
            if (parent.category_id === child.parent.id) {
              return {
                ...parent,
                children: Object.hasOwn(parent, "children")
                  ? [...parent.children, currentCatState]
                  : [currentCatState],
              };
            }
            return parent;
          })
          .filter((parent) => parent.category_id !== child.category_id);
      }

      return;
    });

  return res;
}

module.exports = { GetCats, SortCategories };
