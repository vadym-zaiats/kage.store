"use client";

import styles from "./fav-list.module.scss";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import { Card } from "../card/Сard";

export function FavList() {
  const prodsInFav = useSelector((state) => state.favourite.favourite);

  return (
    <Provider store={store}>
      {prodsInFav.length > 0 && (
        <>
          <div className={styles["fav-list"]}>
            {prodsInFav.map(
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
                    fav={true}
                  />
                );
              }
            )}
          </div>
        </>
      )}
      {prodsInFav.length === 0 && (
        <div className={styles["fav-list"]}>No prods in fav</div>
      )}
    </Provider>
  );
}
