import Product from "./Product";

const Products = ({ products }) => {
  return (
    <div class="product-listing">
      <h2>Products</h2>
      {products.map(product => (
        <Product key={product.id} product={product}/>
      ))}
    </div>
  );
};

export default Products;