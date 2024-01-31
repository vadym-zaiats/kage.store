import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./api/productsApi";
import { customerApi } from "./api/customersApi";
import burgerSlice from "./slices/burgerSlice";
import productsSlice from "./slices/productsSlice";
import cartSlice from "./slices/cartSlice";
import favouriteSlice from "./slices/favouriteSlice";
import filterSlice from "./slices/filterSlice";
import orderSlice from "./slices/orderSlice";
import userSlice from "./slices/userSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      burger: burgerSlice,
      allProducts: productsSlice,
      cart: cartSlice,
      favourite: favouriteSlice,
      filter: filterSlice,
      order: orderSlice,
      user: userSlice,
      [productsApi.reducerPath]: productsApi.reducer,
      [customerApi.reducerPath]: customerApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        productsApi.middleware,
        customerApi.middleware
      ),
  });
};
