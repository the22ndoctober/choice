const bent = require("bent")

async function GetCats(store_id, res) {
   let clientServerOptions = {
      baseUrl: "https://api.dntrade.com.ua",
      method: "GET",
      headers: {
         "Content-Type": "application/json",
         ApiKey: process.env.API_KEY,
      },
   }

   const get = bent(
      (baseUrl = clientServerOptions.baseUrl),
      (method = clientServerOptions.method),
      (headers = clientServerOptions.headers)
   )

   const resp = await get(`/products/categories?store_id=${store_id}`, {
      store_id: store_id,
   })

   const data = await resp.json()

   return data
}

function SortCategories(categories) {
   let res = [...categories]

   categories
      .sort((a, b) => a.level - b.level)
      .map((child) => {
         if (child.parent !== null) {
            res = res.map((parent) => {
               if (parent.category_id === child.parent.id) {
                  if (parent.children.length > 0) {
                     return { ...parent, children: [...parent.children, child] }
                  }
                  return { ...parent, children: child }
               }
            })
         }

         return
      })
}

module.exports = { GetCats, SortCategories }
