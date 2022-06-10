import Product from "./Product";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsReceived } from "../actions/productActions";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
 
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('/api/products')
      dispatch(productsReceived(response.data))
    }

    fetchProducts()
  }, [dispatch])

  return (
    <div class="product-listing">
      <h2>Products</h2>
      {products.map(product => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Products;