import { createContext, useReducer } from "react";
import axios from "axios";

export const ProductContext = createContext();

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case "PRODUCTS_RECEIVED": {
      return action.payload;
    }
    case "PRODUCT_ADDED": {
      return state.concat(action.payload);
    }
    case "PRODUCT_UPDATED": {
      return state.map(product => {
        if (product._id === action.payload._id) {
          return action.payload;
        } else {
          return product;
        }
      })
    }
    case "PRODUCT_DELETED": {
      return state.filter(product => product._id !== action.payload.id);
    }
    case "QUANTITY_DECREMENTED": {
      return state.map(product => {
        if (product._id === action.payload._id) {
          return action.payload;
        } else {
          return product;
        }
      })
    }
    default: {
      return state;
    }
  }
};

export const fetchProducts = async (dispatch) => {
  const { data } = await axios.get('/api/products')
  dispatch({ type: "PRODUCTS_RECEIVED", payload: data})
}

export const addProducts = async (dispatch, newItem, callback) => {
  const { data } = await axios.post('/api/products', newItem)
  dispatch({ type: "PRODUCT_ADDED", payload: data })
  callback()
}

export const productUpdated = async (dispatch, id, updatedItem, callback) => {
  const { data } = await axios.put(`/api/products/${id}`, updatedItem)
  dispatch({ type: "PRODUCT_UPDATED", payload: data})
  callback()
}

export const productDeleted = async (dispatch, id) => {
  const { data } = await axios.delete(`/api/products/${id}`)
  dispatch({ type: "PRODUCT_DELETED", payload: {id} })
}

export const quantityDecremented = (dispatch, updatedItem) => {
  dispatch({ type: "QUANTITY_DECREMENTED", payload: updatedItem})
}

export const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(productsReducer, []);

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};