import { configureStore } from "@reduxjs/toolkit";
import burgerSlice from "./slices/burgerSlice";
import productsSlice from "./slices/productsSlice";
import cartSlice from "./slices/cartSlice";
import favouriteSlice from "./slices/favouriteSlice";
import { productsApi } from "./api/productsApi";

export const store = configureStore({
  reducer: {
    burger: burgerSlice,
    allProducts: productsSlice,
    cart: cartSlice,
    favourite: favouriteSlice,
    [productsApi.reducerPath]: productsApi.reducer,
    // middleware: [thunk],
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

// setupListeners(store.dispatch);
