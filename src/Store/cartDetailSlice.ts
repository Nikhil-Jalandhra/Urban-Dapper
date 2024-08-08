import { createSlice } from "@reduxjs/toolkit";


 const initialState = [
    {
        id: 1,
        title: "Comfort Fit T-shirt",
        newPrice: 1499,
        image: "/Images/ProductImages/jacket4.jpg",
        inStock: 50,
        productQuantity: 1,
    },
 ]

export const cartDetailSlice = createSlice({
    name: "cartDetail",
    initialState,
    reducers: {
        addDetails: (state, action) => {
            const {id, title, image, newPrice, productQuantity, inStock} = action.payload
            const existingItem = state.find(item => item.id === Number(id))
            if (existingItem) {
                const totalQuatity = existingItem.productQuantity + productQuantity
                
                if (totalQuatity <= inStock) {
                    existingItem.productQuantity += productQuantity
                }
                else if (existingItem.productQuantity === inStock) {
                    alert("we have only " + inStock + " piece at this time")
                }
                else {
                    alert("you can add " + (inStock-existingItem.productQuantity) + " more")
                }

            }else {
                state.push({id, title, image, newPrice, productQuantity, inStock})
            }
        },
        deleteItem: (state, action) => {
            const itemId = action.payload
            const index = state.findIndex(item => item.id === Number(itemId));
            if (index !== -1) {
                state.splice(index, 1);
            }
        }        
    }
})

export const { addDetails, deleteItem } = cartDetailSlice.actions

export default cartDetailSlice.reducer