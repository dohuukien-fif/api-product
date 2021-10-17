import { createSlice, createSelector } from '@reduxjs/toolkit';
const CartSlice = createSlice({
  name: 'carts',
  initialState: {
    showMiniCart: false,
    cartItem: JSON.parse(localStorage.getItem('cartss')),
  },
  reducers: {
    showMiniCart(state) {
      state.showMiniCart = true;
    },
    hideMiniCart(state) {
      state.showMiniCart = false;
    },
    addTocart(state, action) {
      const newCart = action.payload;
      const index = state.cartItem.findIndex((item) => item.id === newCart.id);
      if (index >= 0) {
        state.cartItem[index].quantity += newCart.quantity;
      } else {
        state.cartItem.push(newCart);
        localStorage.setItem('cartss', JSON.stringify(state.cartItem));
      }
    },
    setQuantity(state, action) {
      const { id, quantity } = action.payload;
      const index = state.cartItem.findIndex((item) => item.id === id);
      if (index >= 0) {
        state.cartItem[index].quantity = quantity;
        localStorage.setItem('cartss', JSON.stringify(state.cartItem));
      }
    },
    removeFromCart(state, action) {
      //get {id}
      const idneedRemove = action.payload;
      state.cartItem = state.cartItem.filter((item) => item.id !== idneedRemove);
      localStorage.setItem('cartss', JSON.stringify(state.cartItem));
    },
  },
});
const { actions, reducer } = CartSlice;
export const { showMiniCart, hideMiniCart, addTocart, setQuantity, removeFromCart } = actions;
export default reducer;
