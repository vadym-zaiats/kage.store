"use client";

import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";

export function Hot() {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("http://localhost:4000/api/products").then((res) => res.json()),
  });
  console.log(data);

  const mutation = useMutation({
    mutationFn: (newProduct) => {
      return axios.post("http://localhost:4000/api/products", newProduct);
    },
  });

  return (
    <div>
      <h2>HOT PRODS</h2>
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
      </button>
    </div>
  );
}
