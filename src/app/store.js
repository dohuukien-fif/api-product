import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../features/couter/component/couterSclice';
import userSlice from '../features/Auth/userSlice/userSlice';
import CartSlice from './../features/cart/cartSlice';
const rootReducer = {
  counter: counterSlice,
  user: userSlice,
  carts: CartSlice,
};
const store = configureStore({
  reducer: rootReducer,
});
export default store;
