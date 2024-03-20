export const changeCart = (state: any, action: any) => {
    if (action.payload !== "") return action.payload
    return state
}
