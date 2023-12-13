"use client";

import { useState, useEffect } from "react";
import { Card } from "../card/card";
import styles from "./hot.module.scss";
import { setProducts } from "@/redux/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";

export function Hot() {
  const data = useSelector((state) => state.allProducts.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts());
  }, [dispatch]);

  const [numElements, setNumElements] = useState(4);
  const handleLoadMore = () => {
    setNumElements((prevNumElements) => prevNumElements + 4);
  };

  return (
    <div>
      <div className={styles[`hot-wrapper`]}>
        {data && Array.isArray(data) && data.length > 0 ? (
          data
            .slice(0, numElements)
            .map(({ name, currentPrice, imageUrls, _id, hot }) =>
              hot ? (
                <Card
                  key={_id}
                  name={name}
                  currentPrice={currentPrice}
                  imageUrls={imageUrls}
                />
              ) : null
            )
        ) : (
          <p>No data available</p>
        )}
      </div>
      {data && data.length > numElements && (
        <button onClick={handleLoadMore}>Показати ще</button>
      )}
    </div>
  );
}
