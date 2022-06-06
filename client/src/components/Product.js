const Product = () => {
  return (
    <div class="product">
      <div class="product-details">
        <h3>Apple 10.5-Inch iPad Pro</h3>
        <p class="price">$649.99</p>
        <p class="quantity">2 left in stock</p>
        <div class="actions product-actions">
          <a class="button add-to-cart">Add to Cart</a>
          <a class="button edit">Edit</a>
        </div>
        <a class="delete-button"><span>X</span></a>
      </div>
    </div>
  );
};

export default Product;

