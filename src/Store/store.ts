import { configureStore } from "@reduxjs/toolkit";
import cartDetailSlice from "./cartDetailSlice";
import cartShowHideSlice from "./cartShowHideSlice";

export interface cartState {
    cartToggle: boolean;
}

export interface totalItemState {
    cartDetail: [
        {
            id: number,
            title: string,
            image: string,
            newPrice: number,
            productQuantity: number,
            inStock: number,
        },
    ]

}

export const store  = configureStore({
    reducer: {
        cartDetail: cartDetailSlice,
        cartToggle: cartShowHideSlice,
    }
})