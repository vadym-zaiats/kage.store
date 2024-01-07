import { createSlice } from "@reduxjs/toolkit";
import { setAllProducts } from "../middlewares/products";

const initialState = {
  allProducts: [],
  hotProducts: [],
  newProducts: [],
  saleProducts: [],
  isLoading: true,
};

const productsSlice = createSlice({
  name: "allProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setAllProducts.pending, (state) => {});
    builder.addCase(setAllProducts.fulfilled, (state, action) => {
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
    });
    builder.addCase(setAllProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export default productsSlice.reducer;
export const {} = productsSlice.actions;
