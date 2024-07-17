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

        console.log(response)

        const result = response[0].products.filter(
            (product) =>
                product.store_id !== null &&
                product.category !== null &&
                product.sku !== ""
        )

        function quickSort(result) {
            if (result.length <= 1) {
                return result
            }
            let pivotIndex = Math.floor(result.length / 2)
            let pivot = result[pivotIndex]
            let less = []
            let greater = []
            for (let i = 0; i < result.length; i++) {
                if (i === pivotIndex) continue
                if (parseInt(result[i].balance) <= parseInt(pivot.balance)) {
                    less.push(result[i])
                } else {
                    greater.push(result[i])
                }
            }

            return [...quickSort(less), pivot, ...quickSort(greater)]
        }

        const sortedArray = quickSort(result).reverse()

        dispatch(productsSuccess(sortedArray))
    } catch (error) {
        dispatch(productsFailure(error.message))
    }
}

export const { products, productsSuccess, productsFailure, productsLoading } =
    productsSlice.actions

export default productsSlice.reducer
