import { createSlice } from "@reduxjs/toolkit";


 const initialState = [
    {
        id: 1,
        title: "heading",
        image: "/Images/t-shirt1.jpg",
        price: 100,
        quantity: 0
    }
 ]

export const cartDetailSlice = createSlice({
    name: "cartDetail",
    initialState,
    reducers: {
        addDetails: (state, action) => {
            const {id, title, image, price, quantity} = action.payload
            console.log(action.payload)
            state.push({id, title,image,price,quantity})
        }
    }
})

export const { addDetails } = cartDetailSlice.actions

export default cartDetailSlice.reducer