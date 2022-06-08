import ShoppingCartItem from './ShoppingCartItem'

const ShoppingCart = ({ shoppingCart, onCheckout }) => {
  const getCartTotal = () => {
    const total = shoppingCart.reduce((prevSum, currItem) => prevSum + currItem.price * currItem.quantity, 0)
    return total
  }

  let isCartEmpty = shoppingCart.length === 0
  let isDisabled = isCartEmpty ? 'disabled' : ''; 

  return (
    <div id="ShoppingCart">
      <header>
        <h1>The Shop!</h1>
        <div class="cart">
          <h2>Your Cart</h2>

          {(isCartEmpty)
          ? <>
              <p>Your cart is empty</p>
              <p>Total: $0</p>
            </>
          : <table class="cart-items">
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
              {shoppingCart.map(cartItem => (
                <ShoppingCartItem cartItem={cartItem} key={cartItem._id} />
              ))}
              <tr>
                <td colspan="3" class="total">Total: ${getCartTotal()}</td>
              </tr>
            </table>
          }
          

          <a class={`button checkout ${isDisabled}`} onClick={() => onCheckout()}>Checkout</a>
        </div>
      </header>
    </div>
  );
};

export default ShoppingCart;