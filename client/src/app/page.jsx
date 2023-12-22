"use client";

import styles from "./page.module.scss";
import { setAllProducts } from "@/redux/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ProductsBlock } from "./ui/productsBlock/ProductsBlock";

export default function Home() {
  const dispatch = useDispatch();
  const hotProducts = useSelector((state) => state.allProducts.hotProducts);
  useEffect(() => {
    dispatch(setAllProducts());
  }, [dispatch]);

  return (
    <main className={styles[`main`]}>
      <ProductsBlock title="Гарячі пропозиції" products={hotProducts} />
    </main>
  );
}
