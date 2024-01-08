"use client";

import styles from "./allProducts.module.scss";
import { ProductsBlock } from "../productsBlock/ProductsBlock";
import { useSelector } from "react-redux";

export function AllProducts() {
  const allProducts = useSelector((state) => state.allProducts.allProducts);
  return <ProductsBlock title="Усі товари" products={allProducts} num={4} />;
}
