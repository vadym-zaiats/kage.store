"use client";

import styles from "./cartList.module.scss";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
export function CartList() {
  const prodsInCart = useSelector((state) => state.cart.cart);
  console.log(prodsInCart);
  return (
    <Provider store={store}>
      <div>CART PAGE</div>
    </Provider>
  );
}
