"use client";

import styles from "./cartList.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "../card/Сard";
import { ModalCart } from "./ModalCart/ModalCart";
import {
  cartSelector,
  cartTotalSumSelector,
  setModal,
} from "@/redux/slices/cartSlice";

export function CartList() {
  const dispatch = useDispatch();
  const prodsInCart = useSelector(cartSelector);
  const totalSum = useSelector(cartTotalSumSelector);

  return (
    <>
      {prodsInCart.length > 0 && (
        <>
          <div className={styles["card-list"]}>
            {prodsInCart.map(
              ({
                name,
                currentPrice,
                imageUrls,
                itemNo,
                quantity,
                categories,
                date,
                hot,
                sale,
                count,
              }) => {
                return (
                  <Card
                    key={itemNo}
                    name={name}
                    currentPrice={currentPrice}
                    imageUrls={imageUrls}
                    itemNo={itemNo}
                    quantity={quantity}
                    categories={categories}
                    date={date}
                    hot={hot}
                    sale={sale}
                    count={count}
                  />
                );
              }
            )}
          </div>
          <button
            className={styles["card-list__buy-button"]}
            onClick={() => {
              dispatch(setModal());
            }}
          >
            Замовити на {totalSum} грн.
          </button>
        </>
      )}
      {prodsInCart.length === 0 && (
        <div className={styles["card-list"]}>No prods in cart</div>
      )}
      <ModalCart />
    </>
  );
}
