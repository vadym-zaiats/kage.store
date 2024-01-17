import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  hotProducts: [],
  newProducts: [],
  saleProducts: [],
  filteredProducts: [],
  isLoading: true,
};

const selectors = {
  allProductsSelector: (state) => state.allProducts,
  hotProductsSelector: (state) => state.hotProducts,
  newProductsSelector: (state) => state.newProducts,
  saleProductsSelector: (state) => state.saleProducts,
  filteredProductsSelector: (state) => state.filteredProducts,
  isLoadingSelector: (state) => state.isLoading,
};

const productsSlice = createSlice({
  name: "allProducts",
  initialState,
  selectors,
  reducers: (create) => ({
    setProducts: create.reducer((state, action) => {
      state.isLoading = false;
      state.allProducts = action.payload;
      state.hotProducts = action.payload.filter((obj) => {
        return obj.hot === true;
      });
      state.newProducts = action.payload.filter((obj) => {
        return new Date(obj.date) > new Date("2023-12-10T12:47:48.042Z");
      });
      state.saleProducts = action.payload.filter((obj) => {
        return obj.sale === true;
      });
    }),
    setFilteredProducts: create.reducer((state, action) => {
      state.filteredProducts = action.payload.products;
    }),
  }),
});

export default productsSlice.reducer;

export const {
  allProductsSelector,
  hotProductsSelector,
  newProductsSelector,
  saleProductsSelector,
  isLoadingSelector,
  filteredProductsSelector,
} = productsSlice.selectors;

export const { setProducts, setFilteredProducts } = productsSlice.actions;
