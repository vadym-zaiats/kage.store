import { createSlice } from "@reduxjs/toolkit";
import { fetchFilters } from "../middlewares/filter";

const initialState = {
  isOpen: false,
  categories: [],
  minPrice: null,
  maxPrice: null,
  availableFilters: {},
  isLoading: false,
  isLoaded: false,
};

const selectors = {
  filterIsOpenSelector: (state) => state.isOpen,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  selectors,
  reducers: (create) => ({
    setFilter: create.reducer((state) => {
      state.isOpen = !state.isOpen;
    }),
    addCategory: create.reducer(({ categories }, { payload: { category } }) => {
      if (!categories.includes(category)) categories.push(category);
    }),
    removeCategory: create.reducer(
      ({ categories }, { payload: { category } }) => {
        const categoryIndex = categories.findIndex(
          (arrayItem) => arrayItem === category
        );
        if (categoryIndex > -1) categories.splice(categoryIndex, 1);
      }
    ),
    setMinPrice: create.reducer((state, { payload: { price } }) => {
      state.minPrice = price;
    }),
    setMaxPrice: create.reducer((state, { payload: { price } }) => {
      state.maxPrice = price;
    }),
    resetFilters: create.reducer((state) => ({
      ...initialState,
      availableFilters: { ...state.availableFilters },
      isLoaded: state.isLoaded,
      isLoading: state.isLoading,
    })),
  }),
  extraReducers: (builder) => {
    builder.addCase(fetchFilters.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchFilters.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLoaded = true;
      state.availableFilters = action.payload;
    });
    builder.addCase(fetchFilters.rejected, (state) => {
      state.isLoading = false;
      state.isLoaded = false;
    });
  },
});

export default filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
export const { filterIsOpenSelector } = filterSlice.selectors;
