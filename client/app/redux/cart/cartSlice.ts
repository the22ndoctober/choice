"use client"

import { createSlice } from "@reduxjs/toolkit"
import * as actions from "./cartActions"

const local: any = localStorage.getItem("cart")

const initialState = {
    cart: local === null || local === "[]" ? [] : JSON.parse(local),
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        changeCart: (state: any, action: any) => {
            state.cart = actions.changeCart(state.cart, action.payload)
        },
    },
})

export const { changeCart } = cartSlice.actions

export const getCart = (state: any) => state.cart.cart

export default cartSlice.reducer
