import { configureStore } from "@reduxjs/toolkit";
import burgerSlice from "./slices/burgerSlice";
import productsSlice from "./slices/productsSlice";

export const store = configureStore({
  reducer: {
    burger: burgerSlice,
    allProducts: productsSlice,
    // middleware: [thunk],
  },
});
