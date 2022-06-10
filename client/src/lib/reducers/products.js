const products = (state = [], action) => {
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
    default: {
      return state;
    }
  }
}

export default products;