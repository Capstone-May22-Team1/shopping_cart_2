const cartItems = (state = [], action) => {
  switch (action.type) {
    case "CART_ITEMS_RECEIVED": {
      return action.payload;
    }
    case "CART_ITEM_ADDED": {
      if (state.some(item => item._id === action.payload._id)) {
        return state.map(i => {
          if (i._id === action.payload._id) {
            i.quantity++
            return i
          } else {
            return i
          } 
        })
      } else {
        return state.concat(action.payload);
      }
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