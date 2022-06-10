import axios from "axios";

const apiClient = {
  getProducts: async () => {
    const { data } = await axios.get('/api/products');
    return data;
  },
  addProduct: async (newProduct) => {
    const { data } = await axios.post('/api/products', newProduct);
    return data;
  },
  updateProduct: async (updatedProduct, id) => {
    const { data } = await axios.put(`/api/products/${id}`, updatedProduct);
    return data;
  },
  deleteProduct: async (id) => {
    await axios.delete(`/api/products/${id}`);
    return id;
  },
  getCartItems: async () => {
    const { data } = await axios.get('/api/cart');
    return data;
  },
  checkOutCart: async () => {
    await axios.post(`api/checkout`);
    return
  },
  addItemToCart: async (cartItem) => {
    const { data } = await axios.post('/api/add-to-cart', cartItem);
    return data
  }
};

export default apiClient;