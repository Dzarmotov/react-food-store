import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type PizzaItems = {
  id: number, 
  title: string, 
  imageUrl: string, 
  price: number, 
  sizes: number[], 
  types: number[] 
}

type SearchPizzaParams = {
  paginate: string,
  category: string,
  sortBy: string,
  search: string
}

export const fetchPizzas = createAsyncThunk<PizzaItems[], SearchPizzaParams>(
  "pizza/fetchPizzas",
  async (params) => {
    const { paginate, category, sortBy, search } = params;
    const API = `https://10ecbbd119910171.mokky.dev/items?${paginate}${category}&sortBy=${sortBy}${search}`;
    const { data } = await axios.get(API);
    return data.items;
  }
);


interface IPizza {
  items: PizzaItems[],
  status: string | null
}

const initialState: IPizza = {
  items: [],
  status: "",
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {}, 
  extraReducers: {
    [fetchPizzas.pending.type]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchPizzas.fulfilled.type]: (state, action) => {
      state.items = action.payload;
      state.status = 'succes'
    },
    [fetchPizzas.rejected.type]: (state) => {
      state.status = "Error";
      state.items = [];
    },
  },
});

export default pizzaSlice.reducer;
