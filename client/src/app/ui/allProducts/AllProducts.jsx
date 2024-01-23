"use client";

import styles from "./allProducts.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { ProductsBlock } from "../productsBlock/ProductsBlock";
import {
  allProductsSelector,
  filteredProductsSelector,
} from "@/redux/slices/productsSlice";
import { fetchFilteredProducts } from "@/redux/middlewares/filteredProducts";
import { useEffect, useState } from "react";

export function AllProducts({ searchParams }) {
  const dispatch = useDispatch();

  const filteredProds = useSelector(filteredProductsSelector);
  const url = new URLSearchParams(searchParams).toString();

  useEffect(() => {
    dispatch(fetchFilteredProducts(url));
  }, [filteredProds]);

  return <ProductsBlock title="Усі вироби" products={filteredProds} num={4} />;
}
