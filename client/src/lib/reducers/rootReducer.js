import products from "./products";
import cartItems from "./cartItems";

const rootReducer = (state = {}, action) => {
  return {
    products: products(state.products, action),
    cartItems: cartItems(state.cartItems, action),
  };
};

export default rootReducer;