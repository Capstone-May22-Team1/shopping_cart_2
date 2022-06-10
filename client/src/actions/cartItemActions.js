export const cartItemsReceived = (products) => {
  return { type: "CART_ITEMS_RECEIVED", payload: products };
};

export const cartItemAdded = (newProduct) => {
  return { type: "CART_ITEM_ADDED", payload: newProduct };
};

export const cartCheckedOut = () => {
  return { type: "CART_CHECKED_OUT" };
};