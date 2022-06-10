import { useDispatch } from "react-redux"
import { deleteProduct } from "../features/products/products";

const ProductDetails = ({product}) => {
  const dispatch = useDispatch()

  const handleDeleteProduct = async () => {
    dispatch(deleteProduct(product._id))
  }

  return (
    <div class="product-details">
      <h3>{product.title}</h3>
      <p class="price">{product.price}</p>
      <p class="quantity">{product.quantity} left in stock</p>
      <a class="delete-button" onClick={handleDeleteProduct}><span>X</span></a>
    </div>
  );
};

export default ProductDetails;