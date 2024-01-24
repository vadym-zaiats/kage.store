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
  availableFiltersSelector: (state) => state.availableFilters,
  minPriceSelector: (state) => state.availableFilters.price.min,
  maxPriceSelector: (state) => state.availableFilters.price.max,
  categoriesSelector: (state) => state.categories,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  selectors,
  reducers: (create) => ({
    setFilter: create.reducer((state) => {
      state.isOpen = !state.isOpen;
    }),
    addCategory: create.reducer((state, action) => {
      if (!state.categories.includes(action.payload))
        state.categories.push(action.payload);
    }),
    removeCategory: create.reducer((state, action) => {
      const categoryIndex = state.categories.findIndex(
        (arrayItem) => arrayItem === action.payload
      );
      if (categoryIndex > -1) state.categories.splice(categoryIndex, 1);
    }),
    setMinPrice: create.reducer((state, action) => {
      state.minPrice = action.payload;
    }),
    setMaxPrice: create.reducer((state, action) => {
      state.maxPrice = action.payload;
    }),
    resetFilters: create.reducer((state) => ({
      ...initialState,
      isOpen: true,
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
export const {
  setFilter,
  addCategory,
  removeCategory,
  setMinPrice,
  setMaxPrice,
  resetFilters,
} = filterSlice.actions;
export const {
  filterIsOpenSelector,
  availableFiltersSelector,
  categoriesSelector,
  minPriceSelector,
  maxPriceSelector,
} = filterSlice.selectors;
