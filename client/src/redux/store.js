import { configureStore } from "@reduxjs/toolkit";
import burgerSlice from "./slices/burgerSlice";
import productsSlice from "./slices/productsSlice";
import cartSlice from "./slices/cartSlice";
import favouriteSlice from "./slices/favouriteSlice";
import filterSlice from "./slices/filterSlice";
import { productsApi } from "./api/productsApi";

export const makeStore = () => {
  return configureStore({
    reducer: {
      burger: burgerSlice,
      allProducts: productsSlice,
      cart: cartSlice,
      favourite: favouriteSlice,
      filter: filterSlice,
      [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productsApi.middleware),
  });
};
