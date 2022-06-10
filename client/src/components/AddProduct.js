import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addProduct } from '../features/products/products';

const AddProduct = ({ setToggleAdd }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const dispatch = useDispatch()

  const handleFormSubmit = (e) => {
    const newProduct = {title, price, quantity}
    dispatch(addProduct({ newProduct, callback: resetForm }))
  }

  const resetForm = () => {
    setTitle("")
    setPrice("")
    setQuantity("")
    setToggleAdd(false)
  }

  return (
    <div class="add-form visible">
      <p><a class="button add-product-button">Add A Product</a></p>
      <h3>Add Product</h3>
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
          <a class="button" onClick={handleFormSubmit}>Add</a>
          <a class="button" onClick={() => setToggleAdd(false)}>Cancel</a>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;