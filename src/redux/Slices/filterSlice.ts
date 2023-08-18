import { createSlice } from "@reduxjs/toolkit";

type Sort = {
  name: string,
  sortProperty: 'rating' | 'title' | 'price' | '-rating' | '-title' | '-price'
}

export interface IFilterSlice {
  searchValue: string,
  categoryId: number,
  currentPage: number,
  sortType: Sort
}

const initialState: IFilterSlice = {
  searchValue: '',
  categoryId: 0,
  currentPage: 1,
  sortType: {
    name: "популярности",
    sortProperty: "rating",
  },
};

const filterSlice = createSlice({
  name: "categoryId",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.categoryId = action.payload;
    },
    setSort: (state, action) => {
      state.sortType = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload
    }
  },
});


export const { setCategory, setSort, setCurrentPage, setSearchValue } =
  filterSlice.actions;
export default filterSlice.reducer;
