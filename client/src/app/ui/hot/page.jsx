"use client";

import { useState, useEffect } from "react";
import { Card } from "../card/card";
import styles from "./hot.module.scss";
import { setHotProducts } from "@/redux/slices/hotProducts";
import { useDispatch, useSelector } from "react-redux";

export function Hot() {
  const hotProducts = useSelector((state) => state.hotProducts.hotProducts);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setHotProducts());
  // }, [dispatch]);

  const handleLoadMore = () => {};

  return (
    <div>
      <div className={styles[`hot-wrapper`]}>
        {hotProducts && Array.isArray(hotProducts) && hotProducts.length > 0 ? (
          hotProducts.map(({ name, currentPrice, imageUrls, _id }) => (
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

      <button onClick={handleLoadMore}>Показати ще</button>
    </div>
  );
}
