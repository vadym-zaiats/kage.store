"use client";

import styles from "./allProducts.module.scss";
import { useSelector } from "react-redux";
import { ProductsBlock } from "../productsBlock/ProductsBlock";
import { allProductsSelector } from "@/redux/slices/productsSlice";

export function AllProducts() {
  const prods = useSelector(allProductsSelector);

  return <ProductsBlock title="Усі товари" products={prods} num={4} />;
}
