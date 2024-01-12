"use client";

import styles from "./hoodie.module.scss";
import { ProductsBlock } from "../productsBlock/ProductsBlock";
import { useSelector } from "react-redux";
import { hoodiesSelector } from "@/redux/slices/productsSlice";

export function Hoodie() {
  const products = useSelector(hoodiesSelector);
  console.log(products);
  return <ProductsBlock title="Худі" products={products} num={4} />;
}
