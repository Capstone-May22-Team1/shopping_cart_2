import ProductDetails from "./ProductDetails";
import ProductEditForm from "./ProductEditForm";
import { useState } from "react";

const Product = ({ product, onDeleteProduct, onUpdateProduct, onAddToCart }) => {
  let [ showForm, setShowForm ] = useState(false)

  let isDisabled = product.quantity === 0 ? 'disabled' : '';

  return (
    <div class="product">
      <ProductDetails product={product} onDeleteProduct={onDeleteProduct}/>
      {(showForm) 
        ? <ProductEditForm product={product} setShowForm={setShowForm} onUpdateProduct={onUpdateProduct}/>
        : (
          <div class="actions product-actions">
            <a class={`button add-to-cart ${isDisabled}`} onClick={() => onAddToCart(product)}>Add to Cart</a>
            <a class="button edit" onClick={() => setShowForm(true)}>Edit</a>
          </div>
        )
      }
    </div>
  );
};

export default Product;

