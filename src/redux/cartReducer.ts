import { createSlice } from "@reduxjs/toolkit";
import { omit } from 'lodash'

type CartType = { 
    [id:number]:number
}

export const initialState: CartType = {
}


export const CartSlice = createSlice({
    name:'productsInCart',
    initialState,
    reducers: {
addProductToCart: (state,action) => ({
    ...state,
    [action.payload.id]:
      (state[action.payload.id] || 0) + action.payload.count,
}),

removeProductFromCart:(state,action) => omit(state, action.payload),
changeProductQuantity:(state,action) => ({
    ...state,
    [action.payload.id]: action.payload.count,

}),

    },
})


export const { 
    addProductToCart,
    removeProductFromCart,
    changeProductQuantity,
} = CartSlice.actions


export default CartSlice.reducer