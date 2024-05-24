import { createSlice } from "@reduxjs/toolkit"
import { generateUrl, endpoints } from "@/api/endPoints"
import { postRequest } from "@/api/request"

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        data: null,
        status: "idle",
    },
    reducers: {
        products: (state) => {
            return state
        },
        productsLoading: (state) => {
            state.status = "loading"
        },
        productsSuccess: (state, action) => {
            state.status = "success"
            state.data = action.payload
        },
        productsFailure: (state, action) => {
            state.status = "error"
            state.data = action.payload
        },
    },
})

export const getProducts = () => async (dispatch) => {
    try {
        dispatch(productsLoading())
        const url = generateUrl(endpoints.getProducts)
        const response = await postRequest(
            url,
            {},
            {
                headers: {
                    'secret': process.env.SECRET_KEY, // prettier-ignore
                },
            }
        )
        const result = response.filter(
            (product) =>
                product.store_id !== null &&
                product.category !== null &&
                product.sku !== ""
        )
        dispatch(productsSuccess(result))
    } catch (error) {
        dispatch(productsFailure(error.message))
    }
}

export const { products, productsSuccess, productsFailure, productsLoading } =
    productsSlice.actions

export default productsSlice.reducer
