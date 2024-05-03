import axios from "axios"

// export async function TestAxiosReq(params: any) {
//     const data = await axios.get("http://92.205.105.0:3002/test")

//     return data.data
// }

// export async function GetCatSorted(params: any) {
//     const data = await axios.get("http://92.205.105.0:3002/getCatSorted")

//     console.log(data.data)

//     return data.data
// }

// export async function GetCategoryProducts(params: any) {
//     const data = await axios.post(
//         "http://92.205.105.0:3002/getCategoryProducts",
//         {
//             category_id: params,
//         }
//     )

//     return data.data
// }

// export async function GetProducts(params: any) {
//     const data = await axios.post("http://92.205.105.0:3002/getGoods", {
//         product_id: params,
//     })

//     return data.data
// }

// export async function SearchProducts() {
//     const data = await axios.post("http://92.205.105.0:3002/searchProducts")

//     console.log(data.data)

//     return data.data
// }

export async function TestAxiosReq(params: any) {
    const data = await axios.get("http://localhost:3002/test")

    return data.data
}

export async function GetCatSorted(params: any) {
    const data = await axios.get("http://localhost:3002/getBaseCatSorted")

    console.log(data.data)

    return data.data
}

export async function GetCategoryProducts(params: any) {
    const data = await axios.post("http://localhost:3002/getCategoryProducts", {
        category_id: params,
    })

    return data.data
}

export async function GetSubCats(params: any) {
    const data = await axios.post("http://localhost:3002/getSubCats", {
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

export async function SendOTP(phoneNumber: string) {
    try {
        const response = await axios.post("http://localhost:3002/send-otp", {
            phoneNumber: phoneNumber,
        })
        if (response.data.success) {
            return response.data.success
        } else {
            console.log("something went wrong")
        }
    } catch (error) {
        console.error(error)
    }
}

export async function VerifyOtpRequest(phoneNumber: string, userOTP: string) {
    console.log(phoneNumber, userOTP)
    try {
        const response = await axios.post("http://localhost:3002/verify-otp", {
            phoneNumber: phoneNumber,
            userOTP: userOTP,
        })
        if (response.data.success) {
            return response.data.success
        } else {
            console.log("something went wrong")
        }
    } catch (error) {
        console.error(error)
    }
}

export async function DeleteOTP(phoneNumber: string) {
    try {
        const response = await axios.post("http://localhost:3002/delete", {
            phoneNumber: phoneNumber,
        })
        if (response.data) {
            console.log(response.data)
        } else {
            console.log("something went wrong")
        }
    } catch (error) {
        console.error(error)
    }
}
