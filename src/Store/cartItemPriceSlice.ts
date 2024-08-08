import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        price: 0,
        quantity: 0
    }
]

const cartItemSlice = createSlice({
    name: "cartFinalPrice",
    initialState,
    reducers: {
        cartFinalPrice: (state,action) => {
            console.log(action.payload)
            // return action.payload
        }
    }
})

export const {cartFinalPrice} = cartItemSlice.actions

export default cartItemSlice.reducer