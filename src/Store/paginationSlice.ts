import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState= {
        currentPage: 1
    }
export const paginationSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        updateCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage  = action.payload;
            
        }
    }
})


export const { updateCurrentPage } = paginationSlice.actions

export default paginationSlice.reducer