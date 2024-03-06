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

   const resp = await get(`/products/categories`)

   const data = await resp.json()

   const filtredData = data.categories.filter((cat) =>
      store_id.some((id) => id === cat.store_id)
   )

   return filtredData
}

function SortCategories(categories) {
   let map = new Map()
   let childCategories = []
   let parentCategories = []
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
                  }
               return parentCat
            })
            return
         }
         parentCategories.push({ ...cat, category_id: [cat.category_id] })
         map.set(cat.title, cat.category_id)
         return
      }
      childCategories.push(cat)
      return
   })

   return { parent: parentCategories, child: childCategories }
}

module.exports = { GetCats, SortCategories }

// let res = [...categories.sort((a, b) => a.level - b.level)]

//    categories
//       .sort((a, b) => b.level - a.level)
//       .map((child) => {
//          if (child.parent !== null) {
//             let currentCatState = res.find(
//                (parent) => parent.category_id === child.category_id
//             )
//             res = res
//                .map((parent) => {
//                   if (parent.category_id === child.parent.id) {
//                      return {
//                         ...parent,
//                         children: Object.hasOwn(parent, "children")
//                            ? [...parent.children, currentCatState]
//                            : [currentCatState],
//                      }
//                   }
//                   return parent
//                })
//                .filter((parent) => parent.category_id !== child.category_id)
//          }

//          return
//       })
