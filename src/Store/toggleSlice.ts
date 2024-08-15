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
            console.log(action.payload + " aya hai");
            state.cart  = action.payload
            
        },
        navToggleFunction: (state, action: PayloadAction<boolean>) => {
            state.nav  = action.payload
        }
    }
})


export const { cartToggleFunction, navToggleFunction } = toggleSlice.actions

export default toggleSlice.reducer