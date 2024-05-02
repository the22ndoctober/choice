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
            state.status = "success"
            state.data = action.payload
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

        // class Category {
        //     constructor(category, child = null) {
        //         this.category = category
        //         this.child = child
        //     }
        //     childLink() {
        //         return this.child
        //     }

        //     setChild(newChild) {
        //         this.child =
        //             this.child === null ? [newChild] : [...this.child, newChild]
        //     }
        // }

        // let filtred = []

        // response.map((cat) => {
        //     if (cat.parent === null) {
        //         filtred.push(new Category(cat))
        //         return
        //     }

        //     const parentId = filtred.findIndex((category) =>
        //         category.category.category_id.some(
        //             (idx) => idx === cat.parent.id
        //         )
        //     )

        //     const childCat = new Category(cat)

        //     filtred[parentId].setChild(childCat)

        //     filtred.push(childCat)
        // })

        dispatch(categoriesSuccess(response))

        console.log(response)
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
