"use client"

import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cart/cartSlice"
import categoriesSlice from "./categories/categoriesSlice"
import productsSlice from "./products/productsSlice"

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        categories: categoriesSlice,
        products: productsSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
