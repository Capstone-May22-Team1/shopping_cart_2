import axios from 'axios'
import { useDispatch } from 'react-redux';
import { productDeleted } from '../actions/productActions';

const ProductDetails = ({product}) => {
  const dispatch = useDispatch()

  const handleDeleteProduct = async (id) => {
    await axios.delete(`/api/products/${id}`);
    dispatch(productDeleted({id}));
  }

  return (
    <div class="product-details">
      <h3>{product.title}</h3>
      <p class="price">{product.price}</p>
      <p class="quantity">{product.quantity} left in stock</p>
      <a class="delete-button" onClick={() => handleDeleteProduct(product._id)}><span>X</span></a>
    </div>
  );
};

export default ProductDetails;