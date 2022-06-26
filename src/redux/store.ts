import { configureStore } from '@reduxjs/toolkit';
import filterReduсer from './filter/slice';
import cartSlice from './cart/slise';
import pizzaSlice from './pizzas/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    filter: filterReduсer,
    cart: cartSlice,
    pizza: pizzaSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();