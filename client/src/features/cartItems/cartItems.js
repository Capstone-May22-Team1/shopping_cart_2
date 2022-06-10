import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../../lib/ApiClient";
import { decrementQuantity } from "../products/products";

const initialState = [];

export const fetchCartItems = createAsyncThunk(
  "cartItems/fetchCartItems",
  async () => {
    const data = await apiClient.getCartItems();
    return data;
  }
);

export const checkOut = createAsyncThunk("cartItems/checkOut",
  async () => {
    await apiClient.checkOutCart();
    return [];
  }
);

export const addCartItem = createAsyncThunk(
  "cartItems/addCartItem",
  async (cartItem, thunkAPI) => {
    const data = await apiClient.addItemToCart(cartItem);
    thunkAPI.dispatch(decrementQuantity(data.product))
    return data.item;
  }
);

const cartItemSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCartItems.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(checkOut.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addCartItem.fulfilled, (state, action) => {
      if (state.some(item => item._id === action.payload._id)) {
        return state.map(item2 => {
          if (item2._id === action.payload._id) {
            return action.payload
          } else {
            return item2
          }
        })
      } else {
        return state.concat(action.payload)
      }
    });
  },
});

export default cartItemSlice.reducer;