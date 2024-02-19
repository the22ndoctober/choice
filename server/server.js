const express = require("express")
const cors = require("cors")
const bent = require("bent")

require("dotenv").config()

const app = express()
app.use(cors())
app.use(express.json())

const PORT = 3002

app.listen(PORT)

app.get("/test", async function (req, res) {
   console.log("response success")

   let clientServerOptions = {
      baseUrl: "https://yevheniiseif.dntrade.com.ua",
      method: "POST",
      headers: {
         "Content-Type": "application/json",
         ApiKey: process.env.API_KEY,
      },
   }

   const post = bent(
      (baseUrl = clientServerOptions.baseUrl),
      (method = clientServerOptions.method),
      (headers = clientServerOptions.headers)
   )

   const resp = await post("/api/website/categories")
   const data = await resp.json()

   res.json(data)
})

async function GetGoods() {
   console.log(process.env.SECRET_KEY)
}
GetGoods()
console.log("Hello!")
