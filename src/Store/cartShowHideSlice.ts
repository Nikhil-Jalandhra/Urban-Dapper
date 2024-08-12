import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = false

export const cartShowHideSlice = createSlice({
    name: "cartToggle",
    initialState,
    reducers: {
        cartToggleFunction: (state, action: PayloadAction<boolean>) => {
            state            
           return action.payload
        }
    }
})


export const { cartToggleFunction } = cartShowHideSlice.actions

export default cartShowHideSlice.reducer