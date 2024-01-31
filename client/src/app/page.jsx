"use client";

import styles from "./page.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { ProductsBlock } from "./ui/productsBlock/ProductsBlock";
import { Loader } from "./ui/loader/Loader";
import { Slider } from "./ui/slider/Slider";
import { About } from "./ui/about/About";
import {
  hotProductsSelector,
  newProductsSelector,
  saleProductsSelector,
  isLoadingSelector,
} from "@/redux/slices/productsSlice";
import UserInit from "./ui/userInit/UserInit";

export default function Home() {
  const isLoading = useSelector(isLoadingSelector);
  const hotProducts = useSelector(hotProductsSelector);
  const newProducts = useSelector(newProductsSelector);
  const saleProducts = useSelector(saleProductsSelector);

  return (
    <main className={styles.main}>
      <UserInit />
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
