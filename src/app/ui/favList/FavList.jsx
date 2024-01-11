"use client";

import styles from "./favList.module.scss";
import { useSelector } from "react-redux";
import { Card } from "../card/Сard";

export function FavList() {
  const prodsInFav = useSelector((state) => state.favourite.favourite);

  return (
    <>
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
    </>
  );
}
