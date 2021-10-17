import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import StorageKey from 'contains/Storage-key';
import userApi from './../../../api/userApi';
export const register = createAsyncThunk('users/register', async (payload) => {
  //call api resgister
  const data = await userApi.register(payload);
  //save data local
  localStorage.setItem(StorageKey.TOKEN, data.jwt);
  localStorage.setItem(StorageKey.USER, JSON.stringify(data.user));
  return data.user;
});
export const login = createAsyncThunk('users/login', async (payload) => {
  //call api resgister
  const data = await userApi.Login(payload);
  //save data local
  localStorage.setItem(StorageKey.TOKEN, data.jwt);
  localStorage.setItem(StorageKey.USER, JSON.stringify(data.user));
  return data.user;
});
const couterSlice = createSlice({
  name: 'user',
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKey.USER)) || {},
    setting: {},
  },
  reducers: {
    logout(state) {
      //clear local
      localStorage.removeItem(StorageKey.USER);
      localStorage.removeItem(StorageKey.TOKEN);
      state.current = {};
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});
const { reducer, actions } = couterSlice;
export const { logout } = actions;
export default reducer;
