import { createSlice } from "@reduxjs/toolkit";


export interface dataObject {
    id: number,
    title: string,
    image: string,
    newPrice: number,
    productQuantity: number,
    inStock: number,
  }

 const initialState : dataObject[] = []

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
        incrementQuantity: (state,action)=> {
            const id = Number(action.payload)
            const updatedquantity = state.find((item) => item.id === id)
            if (updatedquantity && updatedquantity.productQuantity < updatedquantity.inStock) {
                updatedquantity.productQuantity += 1
            }else{
                console.log("helo")
            }
        },
        decrementQuantity: (state,action)=> {
            const id = Number(action.payload)
            const updatedquantity = state.find((item) => item.id === id)
            if (updatedquantity && updatedquantity.productQuantity > 1 ) {
                updatedquantity.productQuantity -= 1
                console.log(updatedquantity.productQuantity);
                
            }else{
                const index = state.findIndex(item => item.id === Number(updatedquantity?.id));
                if (index !== -1) {
                    state.splice(index, 1);
                }
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

export const { addDetails, incrementQuantity, decrementQuantity, deleteItem } = cartDetailSlice.actions

export default cartDetailSlice.reducer