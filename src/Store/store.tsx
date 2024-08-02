import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartDetailSlice";

export const store  = configureStore({
    reducer: {
        cart: cartSlice
    }
})