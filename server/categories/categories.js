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
   class Category {
      constructor(category, child = null) {
         this.category = category
         this.child = child
      }
      get childLink() {
         return this.child
      }

      setChild(newChild) {
         this.child =
            this.child === null ? [newChild] : [...this.child, newChild]
      }

      addCategoryId(newId) {
         this.category.category_id = [...this.category_id, newId]
      }
   }

   function quickSort(cats) {
      if (cats.length <= 1) {
         return cats
      }
      let pivotIndex = Math.floor(cats.length / 2)
      let pivot = cats[pivotIndex]
      let less = []
      let greater = []
      for (let i = 0; i < cats.length; i++) {
         if (i === pivotIndex) continue
         if (cats[i].level <= pivot.level) {
            less.push(cats[i])
         } else {
            greater.push(cats[i])
         }
      }

      return [...quickSort(less), pivot, ...quickSort(greater)]
   }

   categories = quickSort(categories)

   const map = new Map()
   let filtred = []

   categories.map((cat) => {
      if (map.has(cat.title)) {
      }

      map.set(cat.title, cat.category_id)

      if (cat.parent === null) {
         filtred.push(new Category({ ...cat, category_id: [cat.category_id] }))
         return
      }

      const parentIndex = filtred.findIndex((item) =>
         item.category.category_id.some((idx) => idx === cat.parent.id)
      )

      if (parentIndex === -1) return

      filtred[parentIndex].setChild(new Category(cat))
   })

   return filtred
}

// function SortCategories(categories) {
//   let map = new Map();
//   let childCategories = [];
//   let parentCategories = [];
//   categories.map((cat) => {
//     if (cat.parent === null) {
//       if (map.has(cat.title)) {
//         parentCategories = parentCategories.map((parentCat) => {
//           if (parentCat.title === cat.title)
//             return {
//               ...parentCat,
//               category_id: Array.isArray(parentCat.category_id)
//                 ? [...parentCat.category_id, cat.category_id]
//                 : [parentCat.category_id, cat.category_id],
//             };
//           return parentCat;
//         });
//         return;
//       }
//       parentCategories.push({ ...cat, category_id: [cat.category_id] });
//       map.set(cat.title, cat.category_id);
//       return;
//     }
//     childCategories.push({ ...cat, category_id: [cat.category_id] });
//     return;
//   });

//   return { parents: parentCategories, childen: childCategories };
// }

module.exports = { GetCats, SortCategories }
