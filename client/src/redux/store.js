import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./api/productsApi";
import burgerSlice from "./slices/burgerSlice";
import productsSlice from "./slices/productsSlice";
import cartSlice from "./slices/cartSlice";
import favouriteSlice from "./slices/favouriteSlice";
import filterSlice from "./slices/filterSlice";
import orderSlice from "./slices/orderSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      burger: burgerSlice,
      allProducts: productsSlice,
      cart: cartSlice,
      favourite: favouriteSlice,
      filter: filterSlice,
      order: orderSlice,
      [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productsApi.middleware),
  });
};
