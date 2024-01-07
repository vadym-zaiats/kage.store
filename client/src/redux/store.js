import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import burgerSlice from "./slices/burgerSlice";
import productsSlice from "./slices/productsSlice";
import cartSlice from "./slices/cartSlice";
import favouriteSlice from "./slices/favouriteSlice";

export const store = configureStore({
  reducer: {
    burger: burgerSlice,
    allProducts: productsSlice,
    cart: cartSlice,
    favourite: favouriteSlice,
    // middleware: [thunk],
  },
});

export const wrapper = createWrapper(store);
