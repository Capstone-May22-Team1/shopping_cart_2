import Product from "./Product";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/products";

const Products = ({ onAddToCart }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div class="product-listing">
      <h2>Products</h2>
      {products.map(product => (
        <Product key={product._id} product={product} onAddToCart={onAddToCart}/>
      ))}
    </div>
  );
};

export default Products;