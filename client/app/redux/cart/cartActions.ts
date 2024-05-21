"use client"

export const changeCart = (state: any, action: any) => {
    if (action.type === "ADD_ITEM") {
        console.log(state)
        if (
            state.some(
                (item: any) => item.product_id === action.payload.product_id
            )
        ) {
            return state
        }

        let result = [...state, action.payload]

        global?.window?.localStorage.setItem("cart", JSON.stringify(result))

        return result
    }
    if (action.type === "REMOVE_ITEM") {
        let result = state.filter(
            (item: any) => item.product_id !== action.payload
        )

        global?.window?.localStorage.setItem("cart", JSON.stringify(result))
        return result
    }
    if (action.type === "REMOVE_ALL") {
        global?.window?.localStorage.setItem("cart", JSON.stringify([]))
        return []
    }

    return state
}
