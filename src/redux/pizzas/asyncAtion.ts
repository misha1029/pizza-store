import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Pizza, SearchPizzaParams } from "./types";


export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
    "pizza/fetchPizzasStatus",
    async (params) => {
      const { order, sortBy, category, search, currentPage } = params;
      const { data } = await axios.get<Pizza[]>(
        `https://629e5534c6ef9335c0b320e7.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}&search${search}`
      );
      return data;
    }
  );