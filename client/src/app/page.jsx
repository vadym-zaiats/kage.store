"use client";

import styles from "./page.module.scss";
import { useSelector } from "react-redux";
import { ProductsBlock } from "./ui/productsBlock/ProductsBlock";
import { Loader } from "./ui/loader/Loader";
import { Slider } from "./ui/slider/Slider";
import { About } from "./ui/about/About";
// import { useGetProductsQuery } from "@/redux/api/productsApi";

export default function Home() {
  const isLoading = useSelector((state) => state.allProducts.isLoading);
  const hotProducts = useSelector((state) => state.allProducts.hotProducts);
  const newProducts = useSelector((state) => state.allProducts.newProducts);
  const saleProducts = useSelector((state) => state.allProducts.saleProducts);

  // const { data, error, isLoading } = useGetProductsQuery();
  // console.log(data);

  return (
    <main className={styles.main}>
      {isLoading && <Loader />}
      <Slider products={saleProducts} />
      {!isLoading && (
        <ProductsBlock
          title="Гарячі пропозиції"
          products={hotProducts}
          num={2}
        />
      )}
      {!isLoading && (
        <ProductsBlock title="Новинки" products={newProducts} num={2} />
      )}
      <About />
    </main>
  );
}
