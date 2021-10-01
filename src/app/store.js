import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../features/couter/component/couterSclice';
const rootReducer = {
  counter: counterSlice,
};
const store = configureStore({
  reducer: rootReducer,
});
export default store;
