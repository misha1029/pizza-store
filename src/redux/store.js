import { configureStore } from '@reduxjs/toolkit';
import filterReduсer from './filter/slice';
import cartSlice from './cart/slise';


export const store = configureStore({
  reducer: {
    filter: filterReduсer,
    cart: cartSlice,
  },
})