import { createSlice } from "@reduxjs/toolkit";

const initialState = false

export const cartShowHideSlice = createSlice({
    name: "cartToogle",
    initialState,
    reducers: {
        cartToogle: (state) => {
            state != state 
        }
    }
})


export const { cartToogle } = cartShowHideSlice.actions

export default cartShowHideSlice.reducer