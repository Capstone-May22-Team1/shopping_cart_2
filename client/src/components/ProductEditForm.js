import { useState } from 'react'
import { useDispatch } from "react-redux"
import { updateProduct } from '../features/products/products';

const ProductEditForm = ({ product,  setShowForm }) => {
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    const updatedProduct = {title, price, quantity}
    dispatch(updateProduct({ updatedProduct, id: product._id, callback: resetForm}))
  }

  const resetForm = () => {
    setTitle(product.title)
    setPrice(product.price)
    setQuantity(product.quantity)
    setShowForm(false)
  }

  return (
    <div class="edit-form">
      <h3>Edit Product</h3>
      <form>
        <div class="input-group">
          <label for="product-name">Product Name</label>
          <input type="text" id="product-name" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>

        <div class="input-group">
          <label for="product-price">Price</label>
          <input type="text" id="product-price" value={price} onChange={(e) => setPrice(e.target.value)}/>
        </div>

        <div class="input-group">
          <label for="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
        </div>

        <div class="actions form-actions">
          <a class="button" onClick={handleFormSubmit}>Update</a>
          <a class="button" onClick={() => setShowForm(false)}>Cancel</a>
        </div>
      </form>
    </div>
  );
};

export default ProductEditForm;