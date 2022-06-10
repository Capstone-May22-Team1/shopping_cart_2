const cartItems = (state = [], action) => {
  switch (action.type) {
    case "CART_ITEMS_RECEIVED": {
      return action.payload;
    }
    case "CART_ITEM_ADDED": {
      return state.concat(action.payload);
    }
    case "CART_CHECKED_OUT": {
      return [];
    }
    default: {
      return state;
    }
  }
}

export default cartItems;