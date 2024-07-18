"use client"

import { createSlice } from "@reduxjs/toolkit"

export const searchTermsSlice = createSlice({
    name: "searchTerms",
    initialState: {
        data: null,
        status: "idle",
    },
    reducers: {
        searchTerms: (state) => {
            return state
        },
        setSearchTerms: (state, action) => {
            state.data = action.payload
        },
    },
})

export const { searchTerms, setSearchTerms } = searchTermsSlice.actions

export default searchTermsSlice.reducer
