const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:3002"

export const endpoints = {
    getCategories: "/getAllCategories",
    getProducts: "/getAllProducts",
}

export const generateUrl = (endpoint) => {
    return `${API_BASE_URL}${endpoint}`
}
