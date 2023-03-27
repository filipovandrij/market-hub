import { createSlice } from "@reduxjs/toolkit";

type Products = {
    [id:string]:any
}
export const initialState: Products = {
    products: []
}

export const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        addProduct(state,action) {
            //return { ...state,
            // products:[...state.products,
        //action.payload]}


            state.product.push({
                id:'Math.floor(Math.random() * 10000)',
                
            })
        }
    },
})