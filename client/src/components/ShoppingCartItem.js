const ShoppingCartItem = ({ cartItem }) => {

  return (
    <tr class="">
      <td>{cartItem.title}</td>
      <td>{cartItem.quantity}</td>
      <td>{cartItem.price}</td>
    </tr>
  );
};

export default ShoppingCartItem