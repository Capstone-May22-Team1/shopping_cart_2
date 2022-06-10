import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/products";
import cartItemReducer from "../features/cartItems/cartItems"

const store = configureStore({
  reducer: {
    products: productReducer,
    cartItems: cartItemReducer,
  },
});

export default store;