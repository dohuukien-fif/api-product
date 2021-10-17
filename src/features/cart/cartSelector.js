import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
export const cartItemSelector = (state) => state.carts.cartItem;
//count Number of product
export const cartItemCount = createSelector(cartItemSelector, (cartItem) =>
  cartItem.reduce((count, item) => count + item.quantity, 0)
);
export const cartItemTotal = createSelector(cartItemSelector, (cartItem) =>
  cartItem.reduce((total, item) => total + item.product.salePrice * item.quantity, 0)
);
