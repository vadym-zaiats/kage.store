"use client";

import styles from "./cartList.module.scss";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import { Card } from "../card/Сard";

export function CartList() {
  const prodsInCart = useSelector((state) => state.cart.cart);

  return (
    <Provider store={store}>
      <div>
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
    </Provider>
  );
}
