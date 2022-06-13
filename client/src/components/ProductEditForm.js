import { useState, useContext } from 'react'
import { productUpdated } from '../context/products-context';
import { ProductContext } from '../context/products-context';

const ProductEditForm = ({ product,  setShowForm }) => {
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);
  const { dispatch: productsDispatch } = useContext(ProductContext);

  const handleUpdateProduct = async () => {
    const updatedItem = {title, price, quantity}
    let id = product._id

    productUpdated(productsDispatch, id, updatedItem, resetForm);
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
          <a class="button" onClick={handleUpdateProduct}>Update</a>
          <a class="button" onClick={() => setShowForm(false)}>Cancel</a>
        </div>
      </form>
    </div>
  );
};

export default ProductEditForm;