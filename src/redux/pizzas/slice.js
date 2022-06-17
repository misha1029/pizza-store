import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { order, sortBy, category, search, currentPage } = params;
    const { data } = await axios.get(
      `https://629e5534c6ef9335c0b320e7.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}&search${search}`
    );
    return data;
  }
);

const initialState = {
  items: [],
  status: 'loading',
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state, action) => {
        state.status = 'loading';
        state.items = [];
    },
    [fetchPizzas.fulfilled]: (state, action) => {
        state.items = action.payload;
        state.status = 'success';
    },
    [fetchPizzas.rejected]: (state, action) => {
        state.status = 'error';
        state.items = [];
    }
}
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;