import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import { productsApi } from "./api/productsApi";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import burgerSlice from "./slices/burgerSlice";
import productsSlice from "./slices/productsSlice";

const rootReducer = combineReducers({
  burger: burgerSlice,
  allProducts: productsSlice,
  // [productsApi.reducerPath]: productsApi.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["allProducts"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // ...productsApi.middleware,
});

export const persistor = persistStore(store);
export default store;
