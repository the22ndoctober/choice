"use client"

import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cart/cartSlice"
import categoriesSlice from "./categories/categoriesSlice"

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        categories: categoriesSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
