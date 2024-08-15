import { configureStore } from "@reduxjs/toolkit";
import cartDetailSlice from "./cartDetailSlice";
import toggleSlice from "./toggleSlice";

export interface showState {
    showToggle: {
        cart: boolean,
        nav: boolean
    }
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
        showToggle: toggleSlice,
    }
})