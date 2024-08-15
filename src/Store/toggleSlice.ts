import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState= {
        cart: false,
        nav: false
    }
export const toggleSlice = createSlice({
    name: "showToggle",
    initialState,
    reducers: {
        cartToggleFunction: (state, action: PayloadAction<boolean>) => {
            state.cart  = action.payload
        }
    }
})


export const { cartToggleFunction } = toggleSlice.actions

export default toggleSlice.reducer