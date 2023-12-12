"use client";

import { useState } from "react";
import { Card } from "../card/card";
import styles from "./hot.module.scss";
import { useGetProductsQuery } from "@/redux/api/productsApi";

export function Hot() {
  const { data, isLoading } = useGetProductsQuery(null);
  console.log(data);
  const [numElements, setNumElements] = useState(4);
  const handleLoadMore = () => {
    setNumElements((prevNumElements) => prevNumElements + 4);
  };

  return (
    <div>
      <div className={styles[`hot-wrapper`]}>
        {!isLoading && Array.isArray(data) && data.length > 0 ? (
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
