"use client";

import { useRef } from "react";
import { makeStore } from "@/redux/store";
import { Provider } from "react-redux";
import { setProducts } from "@/redux/slices/productsSlice";
export const StoreProvider = ({ products, children }) => {
  const storeRef = useRef();
  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(setProducts(products));
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
};
