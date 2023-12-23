"use client";

import styles from "./page.module.scss";
import { setAllProducts } from "@/redux/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ProductsBlock } from "./ui/productsBlock/ProductsBlock";
import { Loader } from "./ui/loader/Loader";
import { Slider } from "./ui/slider/Slider";
import { Instagram } from "./ui/instagram/instagram";

export default function Home() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.allProducts.isLoading);
  const hotProducts = useSelector((state) => state.allProducts.hotProducts);
  const newProducts = useSelector((state) => state.allProducts.newProducts);
  const saleProducts = useSelector((state) => state.allProducts.saleProducts);
  useEffect(() => {
    dispatch(setAllProducts());
  }, [dispatch]);

  return (
    <main className={styles[`main`]}>
      {/* {isLoading && <Loader />}
      <Slider products={saleProducts} />
      {!isLoading && (
        <ProductsBlock title="Гарячі пропозиції" products={hotProducts} />
      )}
      {!isLoading && <ProductsBlock title="Новинки" products={newProducts} />} */}
      {/* <Instagram /> */}
    </main>
  );
}
