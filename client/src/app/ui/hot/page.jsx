"use client";

import { useQuery } from "@tanstack/react-query";

export function Hot() {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("http://localhost:4000/api/products").then((res) => res.json()),
  });
  console.log(data);
  return <div>HOT PRODS</div>;
}
