"use client";

import styles from "./TShirts.module.scss";
import { ProductsBlock } from "../productsBlock/ProductsBlock";
import { useSelector } from "react-redux";
import { tShirtsSelector } from "@/redux/slices/productsSlice";

export function TShirts() {
  const products = useSelector(tShirtsSelector);

  return <ProductsBlock title="Футболки" products={products} num={4} />;
}
