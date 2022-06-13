import axios from 'axios'
import { useContext } from 'react';
import { productDeleted } from '../context/products-context';
import { ProductContext } from '../context/products-context';

const ProductDetails = ({product}) => {
  const { products, dispatch: productsDispatch } = useContext(ProductContext);

  const handleDeleteProduct = async (id) => {
    productDeleted(productsDispatch, id);
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