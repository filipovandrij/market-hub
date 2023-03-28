

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


type Product = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

const initialState:Product[] = []

export const fetchProducts = createAsyncThunk<Product[],undefined>(
    'products/fetchProducts',
    async () => {
        const response = await axios.get('https://dummyjson.com/products'
        )
        return response.data.products
    }
)



export const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(fetchProducts.fulfilled,(state,action) => {
            return (state = action.payload)
        })
    },
})

export default productsSlice.reducer