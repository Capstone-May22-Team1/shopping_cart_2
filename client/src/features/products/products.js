import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../../lib/ApiClient";

const initialState = [];

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const data = await apiClient.getProducts();
    return data;
  }
);

export const addProduct = createAsyncThunk("products/addProduct",
  async (arg) => {
    const { newProduct, callback } = arg;
    const data = await apiClient.addProduct(newProduct);
    if (callback) {
      callback();
    }
    return data;
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (arg) => {
    const { updatedProduct, id, callback } = arg;
    const data = await apiClient.updateProduct(updatedProduct, id);
    if (callback) {
      callback();
    }
    return data;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    const data = await apiClient.deleteProduct(id)
    return { id: data };
  }
);

export const decrementProductStock = createAsyncThunk

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    decrementQuantity(state, action) {
      return state.map(p => {
        if (p._id === action.payload._id) {
          return action.payload
        } else {
          return p
        }
      })
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      return state.map(p => {
        if (p._id === action.payload._id) {
          return action.payload;
        } else {
          return p;
        }
      })
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      return state.filter(p => p._id !== action.payload.id)
    })
  },
});

export const { decrementQuantity } = productSlice.actions

export default productSlice.reducer;