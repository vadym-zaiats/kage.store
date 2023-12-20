import { configureStore } from "@reduxjs/toolkit";
import burgerSlice from "./slices/burgerSlice";
import allProductsSlice from "./slices/productsSlice";
import hotProductsSlice from "./slices/hotProducts";
import { thunk } from "redux-thunk";

export const store = configureStore({
  reducer: {
    burger: burgerSlice,
    allProducts: allProductsSlice,
    hotProducts: hotProductsSlice,
    // middleware: [thunk],
  },
});
