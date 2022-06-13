import Product from "./Product";
import { useEffect, useContext } from "react";
import { fetchProducts } from "../context/products-context";
import { ProductContext } from "../context/products-context";

const Products = () => {
  const { products, dispatch: productsDispatch } = useContext(ProductContext);
 
  useEffect(() => {
    fetchProducts(productsDispatch)
  }, [productsDispatch])

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