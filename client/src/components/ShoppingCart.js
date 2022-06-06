const ShoppingCart = () => {
  return (
    <div id="ShoppingCart">
      <header>
        <h1>The Shop!</h1>
        <div class="cart">
          <h2>Your Cart</h2>
          <p>Your cart is empty</p>
          <p>Total: $0</p>
          <a class="button checkout disabled">Checkout</a>
        </div>
      </header>
    </div>
  );
};

export default ShoppingCart;