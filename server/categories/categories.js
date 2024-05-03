const bent = require("bent")

async function GetCats(store_id) {
   console.log("started")

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

   async function getCategories(store) {
      const resp = await get(`/products/categories?store_id=${store}`)
      const data = await resp.json()
      return data
   }

   const response = await Promise.all(
      store_id.map((store) => getCategories(store))
   )

   const parsedData = []

   response.map((categories) => parsedData.push(...categories.categories))

   function quickSort(result) {
      if (result.length <= 1) {
         return result
      }
      let pivotIndex = Math.floor(result.length / 2)
      let pivot = result[pivotIndex]
      let less = []
      let greater = []
      for (let i = 0; i < result.length; i++) {
         if (i === pivotIndex) continue
         if (result[i].level <= pivot.level) {
            less.push(result[i])
         } else {
            greater.push(result[i])
         }
      }

      return [...quickSort(less), pivot, ...quickSort(greater)]
   }

   let categories = quickSort(parsedData)

   function sameTitleHandle(cats) {
      const map = new Map()
      const result = []

      cats.map((category, i) => {
         if (map.has(category.title)) {
            const idx = result.findIndex(
               (value) => value.title === category.title
            )
            if (category.level === result[idx].level) {
               result[idx].category_id = [
                  category.category_id,
                  ...result[idx].category_id,
               ]
               return
            }
         }
         map.set(category.title, category.title)
         result.push(category)
      })

      return result
   }

   const sameTitleLess = sameTitleHandle(categories)

   console.log("ended")

   return categories
}

module.exports = { GetCats }
