"use client";

import styles from "./pillows.module.scss";
import { ProductsBlock } from "../productsBlock/ProductsBlock";
import { useSelector } from "react-redux";
import { pillowsSelector } from "@/redux/slices/productsSlice";

export function Pillows() {
  const products = useSelector(pillowsSelector);
  console.log(products);
  return <ProductsBlock title="Подушки" products={products} num={4} />;
}
