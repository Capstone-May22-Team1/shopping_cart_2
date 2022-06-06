import ProductDetails from "./ProductDetails";
import ProductEditForm from "./ProductEditForm";
import { useState } from "react";

const Product = ({ product }) => {
  let [ showForm, setShowForm ] = useState(false)

  return (
    <div class="product">
      <ProductDetails product={product} />
      {(showForm) 
        ? <ProductEditForm product={product} setShowForm={setShowForm}/>
        : (
          <div class="actions product-actions">
            <a class="button add-to-cart disabled">Add to Cart</a>
            <a class="button edit" onClick={() => setShowForm(true)}>Edit</a>
          </div>
        )
      }
    </div>
  );
};

export default Product;

