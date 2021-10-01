import { createSlice } from '@reduxjs/toolkit';
const couterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increat(state, action) {
      return state + action.payload;
    },
    decreat(state) {
      return state - 1;
    },
  },
});
const { actions, reducer } = couterSlice;
export const { increat, decreat } = actions;
export default reducer;
