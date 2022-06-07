import Product from "./Product";

const Products = ({ products, onDeleteProduct, onUpdateProduct, onAddToCart }) => {
  return (
    <div class="product-listing">
      <h2>Products</h2>
      {products.map(product => (
        <Product key={product._id} product={product} onDeleteProduct={onDeleteProduct} onUpdateProduct={onUpdateProduct} onAddToCart={onAddToCart}/>
      ))}
    </div>
  );
};

export default Products;