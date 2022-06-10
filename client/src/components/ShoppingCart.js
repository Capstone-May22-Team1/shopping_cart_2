import ShoppingCartItem from './ShoppingCartItem'
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartItemsReceived, cartCheckedOut } from '../actions/cartItemActions';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.cartItems)

  useEffect(() => {
    const fetchShoppingCart = async () => {
      const { data } = await axios.get('/api/cart')
      dispatch(cartItemsReceived(data));
    }
    fetchShoppingCart()
  }, [dispatch])

  const handleCheckout = async () => {
    await axios.post(`api/checkout`);
    dispatch(cartCheckedOut());
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
                <td colspan="3" class="total">Total: ${getCartTotal()}</td>
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