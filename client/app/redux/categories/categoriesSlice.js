import { createSlice } from "@reduxjs/toolkit"
import { generateUrl, endpoints } from "@/api/endPoints"
import { getRequest } from "@/api/request"

export const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        data: null,
        status: "idle",
    },
    reducers: {
        categories: (state) => {
            return state
        },
        categoriesLoading: (state) => {
            state.status = "loading"
        },
        categoriesSuccess: (state, action) => {
            state.data = action.payload
            state.status = "success"
        },
        categoriesFailure: (state, action) => {
            state.status = "error"
            state.data = action.payload
        },
    },
})

export const getCategories = () => async (dispatch) => {
    try {
        dispatch(categoriesLoading())
        const url = generateUrl(endpoints.getCategories)

        const response = await getRequest(url)

        dispatch(categoriesSuccess(response))
    } catch (error) {
        dispatch(categoriesFailure(error.message))
    }
}

export const {
    categories,
    categoriesSuccess,
    categoriesFailure,
    categoriesLoading,
} = categoriesSlice.actions

export default categoriesSlice.reducer
