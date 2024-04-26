import axios from "axios"

const baseURL = "http://localhost:3002"
// process.env.API_BASE_URL ||

const instance = axios.create({
    baseURL,
})

export const getRequest = async (url, config = {}) => {
    try {
        const response = await instance.get(url, config)
        return response.data
    } catch (error) {
        throw error.response.data
    }
}

export const postRequest = async (url, data, config = {}) => {
    try {
        const response = await instance.post(url, data, config)
        return response.data
    } catch (error) {
        throw error.response.data
    }
}

export const patchRequest = async (url, data, config = {}) => {
    try {
        const response = await instance.patch(url, data, config)
        return response.data
    } catch (error) {
        throw error.response.data
    }
}

export const deleteRequest = async (url, config = {}) => {
    try {
        const response = await instance.delete(url, config)
        return response.data
    } catch (error) {
        throw error.response.data
    }
}
