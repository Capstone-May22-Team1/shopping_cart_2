const ProductDetails = ({product, onDeleteProduct}) => {

  return (
    <div class="product-details">
      <h3>{product.title}</h3>
      <p class="price">{product.price}</p>
      <p class="quantity">{product.quantity} left in stock</p>
      <a class="delete-button" onClick={() => onDeleteProduct(product._id)}><span>X</span></a>
    </div>
  );
};

export default ProductDetails;