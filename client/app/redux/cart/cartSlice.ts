"use client"

import { createSlice } from "@reduxjs/toolkit"
import * as actions from "./cartActions"

const local: any = localStorage.getItem("cart")

const initialState = {
    cart:
        local === null || local === "[]"
            ? [
                  {
                      id: 0,
                      image: "/test_item.png",
                      title: "Redmi Note 8T 4/64",
                      price: 3200,
                      currency: " ₴",
                      amount: 35,
                  },
                  {
                      id: 1,
                      image: "/test_item.png",
                      title: "Samsung 7j 4/64",
                      price: 4200,
                      currency: " ₴",
                      amount: 1,
                  },
                  {
                      id: 2,
                      image: "/test_item.png",
                      title: "Motorola 4/64",
                      price: 5200,
                      currency: " ₴",
                      amount: 2,
                  },
              ]
            : JSON.parse(local),
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
