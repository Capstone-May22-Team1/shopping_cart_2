import ShoppingCartItem from './ShoppingCartItem'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItems, checkOut } from '../features/cartItems/cartItems';


const ShoppingCart = () => {
  const dispatch = useDispatch()
  const shoppingCart = useSelector((state) => state.cartItems)

  useEffect(() => {
    dispatch(fetchCartItems())
  }, [dispatch])

  const handleCheckout = async (e) => {
    dispatch(checkOut())
  }

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
                <td colSpan="3" class="total">Total: ${getCartTotal()}</td>
              </tr>
            </table>
          }
          

          <a class={`button checkout ${isDisabled}`} onClick={handleCheckout}>Checkout</a>
        </div>
      </header>
    </div>
  );
};

export default ShoppingCart;