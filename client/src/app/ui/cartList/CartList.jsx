"use client";

import styles from "./cart-list.module.scss";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import { Card } from "../card/Сard";

export function CartList() {
  const prodsInCart = useSelector((state) => state.cart.cart);
  const totalSum = useSelector((state) => state.cart.totalSum);

  return (
    <Provider store={store}>
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
    </Provider>
  );
}
