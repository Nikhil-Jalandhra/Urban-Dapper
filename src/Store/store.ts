import { configureStore } from "@reduxjs/toolkit";
import cartDetailSlice from "./cartDetailSlice";
import cartShowHideSlice from "./cartShowHideSlice";

export const store  = configureStore({
    reducer: {
        cartDetail: cartDetailSlice,
        cartToggle: cartShowHideSlice,
    }
})