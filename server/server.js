const express = require("express")

require("dotenv").config()

const app = express()

const PORT = 3002

app.listen(PORT)

async function GetGoods() {
   console.log(process.env.SECRET_KEY)
}
GetGoods()
console.log("Hello!")
