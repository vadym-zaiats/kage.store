"use client";

import styles from "./cartList.module.scss";
import { useSelector } from "react-redux";
import { Card } from "../card/Сard";
import { cartSelector, cartTotalSumSelector } from "@/redux/slices/cartSlice";

export function CartList() {
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
          <button className={styles["card-list__buy-button"]}>
            Замовити {totalSum}
          </button>
        </>
      )}
      {prodsInCart.length === 0 && (
        <div className={styles["card-list"]}>No prods in cart</div>
      )}
    </>
  );
}
