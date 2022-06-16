import { configureStore } from '@reduxjs/toolkit';
import filterReduсer from './filter/slice';
import cartSlice from './cart/slise';
import pizzaSlice from './pizzas/slice';

export const store = configureStore({
  reducer: {
    filter: filterReduсer,
    cart: cartSlice,
    pizza: pizzaSlice,
  },
})