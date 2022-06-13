import ProductDetails from "./ProductDetails";
import ProductEditForm from "./ProductEditForm";
import { useState } from "react";
import { useContext } from "react";

import axios from "axios";
import { CartContext } from "../context/cartItem-context";
import { ProductContext } from "../context/products-context";
import { quantityDecremented } from "../context/products-context";

const Product = ({ product }) => {
  const { shoppingCart, setShoppingCart } = useContext(CartContext);
  const { dispatch: productsDispatch } = useContext(ProductContext);

  let [ showForm, setShowForm ] = useState(false)

  const handleAddToCart = async (e) => {
    const cartItem = {productId: product._id}
    const response = await axios.post('/api/add-to-cart', cartItem)
    const updatedProduct = response.data.product
    const newItem = response.data.item
    let newShoppingCart;

    if (shoppingCart.some(item => item._id === newItem._id)) {
      newShoppingCart = shoppingCart.map(i => {
        if (i._id === newItem._id) {
          i.quantity++
          return i
        } else {
          return i
        } 
      })
    } else {
      newShoppingCart = shoppingCart.concat(newItem);
    }
    
    setShoppingCart(newShoppingCart)
    quantityDecremented(productsDispatch, updatedProduct)
  }

  let isDisabled = product.quantity === 0 ? 'disabled' : '';

  return (
    <div class="product">
      <ProductDetails product={product} />
      {(showForm) 
        ? <ProductEditForm product={product} setShowForm={setShowForm} />
        : (
          <div class="actions product-actions">
            <a class={`button add-to-cart ${isDisabled}`} onClick={handleAddToCart}>Add to Cart</a>
            <a class="button edit" onClick={() => setShowForm(true)}>Edit</a>
          </div>
        )
      }
    </div>
  );
};

export default Product;

