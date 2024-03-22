export const changeCart = (state: any, action: any) => {
    if (action.type === "ADD_ITEM") {
        if (
            state.some(
                (item: any) => item.product_id === action.payload.product_id
            )
        ) {
            return state
        }

        let result = [...state, action.payload]

        localStorage.setItem("cart", JSON.stringify(result))

        return result
    }
    if (action.type === "REMOVE_ITEM") {
        let result = state.filter(
            (item: any) => item.product_id !== action.payload
        )

        localStorage.setItem("cart", JSON.stringify(result))
        return result
    }

    return state
}
