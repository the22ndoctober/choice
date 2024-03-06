import axios from "axios"

export async function TestAxiosReq(params: any) {
    const data = await axios.get("http://localhost:3002/test")

    return data.data
}

export async function GetCatSorted(params: any) {
    const data = await axios.get("http://localhost:3002/getCatSorted")

    console.log(data.data)

    return data.data
}

export async function GetCategoryProducts(params: any) {
    const data = await axios.post("http://localhost:3002/getCategoryProducts", {
        category_id: params,
    })

    console.log(data.data)

    return data.data
}

export async function GetProducts(params: any) {
    const data = await axios.post("http://localhost:3002/getGoods", {
        product_id: params,
    })

    return data.data
}

export async function SearchProducts() {
    const data = await axios.post("http://localhost:3002/searchProducts")

    console.log(data.data)

    return data.data
}

// const api_key = "fu0b42ncxnpzp5pg5q0gol1czrioliqoor4tfolcgzaathgd6ehjeh"

// export async function TestAxiosReq(params: any) {
//     const req = await axios.create({
//         headers: {
//             ApiKey: api_key,
//             "Cache-Control": "no-cache",
//             "Content-Type": "application/x-www-form-urlencoded",
//         },
//     })

//     const data = await req.get("https://api.dntrade.com.ua/products/categories")

//     console.log(data.data)

//     return data.data
// }

// export async function GetCategoryProducts(params: any) {
//     const req = await axios.create({
//         headers: {
//             ApiKey: api_key,
//             "Cache-Control": "no-cache",
//             "Content-Type": "application/x-www-form-urlencoded",
//         },
//     })

//     const data = await req.post(
//         "https://api.dntrade.com.ua/products/categories",
//         { body: { category_id: params } }
//     )

//     console.log(data.data)

//     return data.data
// }

// export async function GetProducts(params: any) {
//     const req = await axios.create({
//         headers: {
//             ApiKey: api_key,
//             "Cache-Control": "no-cache",
//             "Content-Type": "application/x-www-form-urlencoded",
//         },
//     })

//     const data = await req.post("https://api.dntrade.com.ua/products/list", {
//         store_id: "A1BDE61D-A7D3-456C-ABC0-4C3EA672D5E4",
//     })

//     return data.data
// }
