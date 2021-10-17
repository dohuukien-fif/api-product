import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { cartItemTotal, cartItemSelector } from './cartSelector';
import { removeFromCart, setQuantity } from './cartSlice';
import CartList from './component/cartLisst';
CartFeture.propTypes = {};

function CartFeture(props) {
  const cartTotal = useSelector(cartItemTotal);
  const dispatch = useDispatch();
  const cartItem = useSelector(cartItemSelector);
  const { id, originalPrice, promotionPercent, shortDescription } = cartItem;
  console.log(cartItem);
  const handleRemoveItem = (id) => {
    const action = removeFromCart(id);
    dispatch(action);
  };
  const handleQuantity = (newquantity) => {
    console.log(newquantity);
    const action = setQuantity({
      id: newquantity.id,
      quantity: newquantity.quantity,
    });
    dispatch(action);
  };
  console.log(cartItem);
  return (
    <div>
      <CartList item={cartItem} remove={handleRemoveItem} setQuantity={handleQuantity} />
      <h1>Total:{cartTotal}</h1>
    </div>
  );
}

export default CartFeture;
