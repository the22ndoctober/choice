import axios from "axios"

const baseURL = process.env.API_BASE_URL || "http://localhost:3002"

export const getDashboardOrders = async ({ phone }) => {
    try {
        const response = await axios.post(
            baseURL + "/server/dashboardOrders",
            {
                phone: phone,
            },
            {
                headers: {
                    'secret': process.env.SECRET_KEY, // prettier-ignore
                },
            }
        )

        if (response) {
            return response.data
        } else {
            alert(1)
        }
    } catch (error) {
        console.log(error)
    }
}

export const getProfileByJWT = async ({ JWT }) => {
    try {
        const response = await axios.post(
            baseURL + "/server/getProfileByJWT",
            {},
            {
                headers: {
                    'secret': process.env.SECRET_KEY, // prettier-ignore
                    JWT: JWT,
                },
            }
        )

        if (response) {
            console.log(response.data)
            return response.data
        } else {
            alert(1)
        }
    } catch (error) {
        console.log(error)
    }
}
