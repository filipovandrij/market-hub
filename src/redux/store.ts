import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import productsReducer from "./productsreducer";


export const store = configureStore({
    reducer: {
        productsInCart: cartReducer,
        products: productsReducer
    },
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch