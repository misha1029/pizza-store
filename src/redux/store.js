import { configureStore } from '@reduxjs/toolkit';
import filterReduсer from './filter/slice';


export const store = configureStore({
  reducer: {
    filter: filterReduсer,
  },
})