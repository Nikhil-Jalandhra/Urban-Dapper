import { configureStore } from "@reduxjs/toolkit";
import cartDetailSlice from "./cartDetailSlice";
import cartShowHideSlice from "./cartShowHideSlice";
import cartItemPriceSlice from "./cartItemPriceSlice";

export const store  = configureStore({
    reducer: {
        cartDetail: cartDetailSlice,
        cartToogle: cartShowHideSlice,
        cartFinalPrice: cartItemPriceSlice
    }
})