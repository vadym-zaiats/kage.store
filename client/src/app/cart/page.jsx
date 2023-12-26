"use client";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import styles from "./cart.module.scss";
import { StoreProvider } from "@/redux/slices/StoreProvider";

export default function Cart() {
  const prodsInCart = useSelector((state) => state.cart.cart);
  console.log(prodsInCart);
  return (
    <Provider store={store}>
      <div className={styles[`cart`]}>CART PAGE</div>
    </Provider>
  );
}
