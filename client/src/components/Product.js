import ProductDetails from "./ProductDetails";
import ProductEditForm from "./ProductEditForm";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCartItem } from "../features/cartItems/cartItems";

const Product = ({ product }) => {
  let [ showForm, setShowForm ] = useState(false);
  const dispatch = useDispatch()

  const handleAddToCart = async (e) => {
    const cartItem = {productId: product._id}
    console.log(cartItem)
    dispatch(addCartItem(cartItem))
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

