"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Card } from "../card/card";
import styles from "./hot.module.scss";

export function Hot() {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("http://localhost:4000/api/products").then((res) => res.json()),
  });

  const [numElements, setNumElements] = useState(7);
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

{
  /* 
  const mutation = useMutation({
    mutationFn: (newProduct) => {
      return axios.post("http://localhost:4000/api/products", newProduct);
    },
  });
<button
onClick={() => {
  mutation.mutate({
    enabled: true,
    imageUrls: ["/imgs/products/t-shirt/4.png"],
    quantity: 7,
    name: "Qwuie",
    currentPrice: 999,
    categories: "t-shirt",
    hot: false,
    date: new Date(),
  });
}}
>
POST new Product
</button> */
}
