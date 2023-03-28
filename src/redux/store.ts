import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import likeReducer from "./likeReducer";
import productsReducer from "./productsreducer";


export const store = configureStore({
    reducer: {
        productLikeState: likeReducer,
        productsInCart: cartReducer,
        products: productsReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch