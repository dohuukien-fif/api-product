import React from 'react';
import PropTypes from 'prop-types';
import Cartitem from './cartItem';
CartList.propTypes = {
  item: PropTypes.array,
  setQuantity: PropTypes.func,
  remove: PropTypes.func,
};

function CartList({ item, setQuantity, remove }) {
  const handleRemoveItem = (id) => {
    console.log(id);
    remove(id);
  };
  const handleQuantity = (newquantity) => {
    console.log(newquantity);
    setQuantity(newquantity);
  };
  return (
    <ul>
      {item.map((items, index) => (
        <li key={index}>
          <Cartitem items={items} removes={handleRemoveItem} onSubmit={handleQuantity} />
        </li>
      ))}
    </ul>
  );
}

export default CartList;
