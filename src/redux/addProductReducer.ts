


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




type AddProduct = {

}


const initialState:AddProduct[] = []

export const addProduct = createAsyncThunk<AddProduct[], undefined>(
    'addProducts/addProduct',
    async (newProduct) => {
      const response = await axios.post('https://dummyjson.com/products/add', newProduct);
      return response.data;
    }
  );


  export const addProductsSlice = createSlice({
    name:'addProducts',
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder
        .addCase(addProduct.fulfilled, (state, action) => {
            state.push(action.payload);
          });
    },
})

export default addProductsSlice.reducer