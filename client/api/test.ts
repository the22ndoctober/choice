import axios from "axios"

export async function TestAxiosReq(params: any) {
    const data = await axios.get("http://localhost:3002/test")

    return data.data
}
