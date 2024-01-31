"use client";

import styles from "./page.module.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductsBlock } from "./ui/productsBlock/ProductsBlock";
import { Loader } from "./ui/loader/Loader";
import { Slider } from "./ui/slider/Slider";
import { About } from "./ui/about/About";
import { useGetCustomerInfoMutation } from "@/redux/api/customersApi";
import { setUser } from "@/redux/slices/userSlice";
import {
  hotProductsSelector,
  newProductsSelector,
  saleProductsSelector,
  isLoadingSelector,
} from "@/redux/slices/productsSlice";

export default function Home() {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);
  const hotProducts = useSelector(hotProductsSelector);
  const newProducts = useSelector(newProductsSelector);
  const saleProducts = useSelector(saleProductsSelector);

  const [getCustomerInfo, { data }] = useGetCustomerInfoMutation();

  const setUserInfo = async () => {
    try {
      const res = await getCustomerInfo().unwrap();
      dispatch(setUser(res));
    } catch (err) {
      console.error("Помилка:", err);
    }
  };

  useEffect(() => {
    setUserInfo();
  }, []);

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
