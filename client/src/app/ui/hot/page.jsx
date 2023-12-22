"use client";

import { useState, useEffect } from "react";
import { Card } from "../card/card";
import styles from "./hot.module.scss";
import { setAllProducts } from "@/redux/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";

export function Hot() {
  const hotProducts = useSelector((state) => state.allProducts.hotProducts);
  const dispatch = useDispatch();
  const [count, setCount] = useState(2);

  useEffect(() => {
    dispatch(setAllProducts());
  }, [dispatch]);

  const handleLoadMore = () => {
    setCount((prevState) => prevState + 2);
  };

  return (
    <>
      <div className={styles[`hot`]}>
        {hotProducts && Array.isArray(hotProducts) && hotProducts.length > 0 ? (
          hotProducts
            .slice(0, count)
            .map(({ name, currentPrice, imageUrls, _id }) => (
              <Card
                key={_id}
                name={name}
                currentPrice={currentPrice}
                imageUrls={imageUrls}
              />
            ))
        ) : (
          <p>No data available</p>
        )}
      </div>
      {count <= hotProducts.length && (
        <button className={styles[`hot__show-more`]} onClick={handleLoadMore}>
          Показати ще
        </button>
      )}
    </>
  );
}
