

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


type Product = {
    id: number
    title: string
    description: string
    category: string
    price: number
    image: string
    rating: number
    stock: number
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



