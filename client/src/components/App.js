import React from "react";
import {useState, useEffect} from "react";
import ShoppingCart from "./ShoppingCart";
import Products from "./Products";
import AddProduct from "./AddProduct";
import axios from 'axios'


const App = () => {
  let [ products, setProducts ] = useState([])
  let [ shoppingCart, setShoppingCart ] = useState([])
  let [ toggleAdd, setToggleAdd ] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('/api/products')
      setProducts(response.data)
    }
    fetchProducts()
  }, [])

  const handleAddProduct = async (newItem, callback) => {
    const response = await axios.post('/api/products', newItem)
    setProducts(products.concat(response.data))
    if (callback) {
      callback()
    }
  }

  const handleUpdateProduct = async (updatedItem, id, callback) => {
    const response = await axios.put(`/api/products/${id}`, updatedItem);
    setProducts(products.map(product => {
      if (product._id === id) {
        return response.data
      } else {
        return product
      }
    }))
    if (callback) {
      callback()
    }
  }

  const handleDeleteProduct = async (id) => {
    await axios.delete(`/api/products/${id}`);
    setProducts(products.filter(product => product._id !== id));
  }

  const handleAddToCart = async (item) => {
    const cartItem = {productId: item._id}
    const response = await axios.post('/api/add-to-cart', cartItem)
    const updatedProduct = response.data.product
    const item = response.data.item
    
    setShoppingCart = shoppingCart.concat(item)
    setProducts(products.map(product => {
      if (product._id === id) {
        return response.data
      } else {
        return product
      }
    }))
  }

  return (
    <div id="app">
      <ShoppingCart/>
      <main>
        <Products products={products} onDeleteProduct={handleDeleteProduct} onUpdateProduct={handleUpdateProduct} onAddToCart={handleAddToCart}/>
        {(toggleAdd) 
        ? <AddProduct product={products} setProducts={setProducts} setToggleAdd={setToggleAdd} onAddProduct={handleAddProduct}/>
        : <p><a class="button add-product-button" onClick={() => {setToggleAdd(true)}}>Add A Product</a></p>
      }
      </main>
    </div>
  );
};

export default App;
