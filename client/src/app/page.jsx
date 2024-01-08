"use client";

import styles from "./page.module.scss";
import { setAllProducts } from "@/redux/middlewares/products";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ProductsBlock } from "./ui/productsBlock/ProductsBlock";
import { Loader } from "./ui/loader/Loader";
import { Slider } from "./ui/slider/Slider";
import { About } from "./ui/about/About";
// import { useGetProductsQuery } from "@/redux/api/productsApi";

// async function getData() {
//   try {
//     const res = await fetch(`http://localhost:4000/api/products`);

//     if (!res.ok) {
//       throw new Error("Server error");
//     }

//     const data = await res.json();
//     return data;
//   } catch (error) {
//     return console.log(error.massage);
//   }
// }

export default function Home() {
  // const data = await getData();
  // console.log(data);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.allProducts.isLoading);
  const hotProducts = useSelector((state) => state.allProducts.hotProducts);
  const newProducts = useSelector((state) => state.allProducts.newProducts);
  const saleProducts = useSelector((state) => state.allProducts.saleProducts);

  // useEffect(() => {
  //   dispatch(setAllProducts());
  // }, [dispatch]);

  // const { data, error, isLoading } = useGetProductsQuery();
  // console.log(data);

  return (
    <main className={styles.main}>
      {isLoading && <Loader />}
      <Slider products={saleProducts} />
      {!isLoading && (
        <ProductsBlock title="Гарячі пропозиції" products={hotProducts} />
      )}
      {!isLoading && <ProductsBlock title="Новинки" products={newProducts} />}
      <About />
    </main>
  );
}
