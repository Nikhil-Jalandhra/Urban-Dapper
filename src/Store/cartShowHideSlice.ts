import { createSlice } from "@reduxjs/toolkit";

const initialState = false

export const cartShowHideSlice = createSlice({
    name: "cartToogle",
    initialState,
    reducers: {
        cartToogleFunction: (state, action) => {
            console.log(action.payload)
           return action.payload
        }
    }
})


export const { cartToogleFunction } = cartShowHideSlice.actions

export default cartShowHideSlice.reducer