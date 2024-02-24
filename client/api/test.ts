import axios from "axios"

export async function TestAxiosReq(params: any) {
    const data = await axios.get("http://localhost:3002/test")

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
    const data = await axios.get("http://localhost:3002/getGoods")

    return data.data
}
