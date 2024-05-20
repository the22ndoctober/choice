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
//

const baseURL = process.env.API_BASE_URL || "http://localhost:3002"

export async function TestAxiosReq() {
    try {
        const response = await axios.get(baseURL + "/server/test", {
            headers: {
                'secret': process.env.SECRET_KEY, // prettier-ignore
            },
        })
        if (response.data.success) {
            console.log(response.data.msg)
        }
    } catch (error) {
        console.log(error)
    }
}

export async function GetCatSorted(params: any) {
    const data = await axios.get(baseURL + "/server/getBaseCatSorted")

    console.log(data.data)

    return data.data
}

export async function GetCategoryProducts(params: any) {
    const result = await axios.post(
        baseURL + "/server/getCategoryProducts",
        {
            category_id: params,
        },
        {
            headers: {
                'secret': process.env.SECRET_KEY, // prettier-ignore
            },
        }
    )

    return result.data
}

export async function GetSubCats(params: any) {
    const data = await axios.post(
        baseURL + "/server/getSubCats",
        {
            category_id: params,
        },
        {
            headers: {
                'secret': process.env.SECRET_KEY, // prettier-ignore
            },
        }
    )

    console.log(data.data)

    return data.data
}

export async function GetProducts(params: any) {
    const data = await axios.post(
        baseURL + "/server/getGoods",
        {
            product_id: params,
        },
        {
            headers: {
                'secret': process.env.SECRET_KEY, // prettier-ignore
            },
        }
    )

    return data.data
}

export async function SearchProducts() {
    const data = await axios.post(baseURL + "/server/searchProducts", {
        headers: {
            'secret': process.env.SECRET_KEY, // prettier-ignore
        },
    })

    return data.data
}

export async function SendOTP(phoneNumber: string) {
    try {
        const response = await axios.post(
            baseURL + "/server/send-otp",
            {
                phoneNumber: phoneNumber,
            },
            {
                headers: {
                    'secret': process.env.SECRET_KEY, // prettier-ignore
                },
            }
        )
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
        const response = await axios.post(
            baseURL + "/server/verify-otp",
            {
                phoneNumber: phoneNumber,
                userOTP: userOTP,
            },
            {
                headers: {
                    'secret': process.env.SECRET_KEY, // prettier-ignore
                },
            }
        )
        if (response.data.success) {
            return response.data
        } else {
            console.log("something went wrong")
        }
    } catch (error) {
        console.error(error)
    }
}

export async function DeleteOTP(phoneNumber: string) {
    try {
        const response = await axios.post(
            baseURL + "http://localhost:3002/delete",
            {
                phoneNumber: phoneNumber,
            },
            {
                headers: {
                    'secret': process.env.SECRET_KEY, // prettier-ignore
                },
            }
        )
        if (response.data) {
            console.log(response.data)
        } else {
            console.log("something went wrong")
        }
    } catch (error) {
        console.error(error)
    }
}
