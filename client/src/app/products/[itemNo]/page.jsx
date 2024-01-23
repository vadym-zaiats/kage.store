"use client";
import styles from "./item-no.module.scss";
import { CurrentProduct } from "@/app/ui/currentProd/currentProd";
import { Loader } from "@/app/ui/loader/Loader";
import { useGetCurrentProductQuery } from "@/redux/api/productsApi";

export default function CurrentProductPage({ params }) {
  const { itemNo } = params;
  const { data, error, isLoading } = useGetCurrentProductQuery(itemNo);
  if (!data) {
    return (
      <main className={styles[`current-product`]}>
        <Loader />
      </main>
    );
  }

  const {
    name,
    currentPrice,
    imageUrls,
    quantity,
    categories,
    date,
    hot,
    sale,
  } = data;

  return (
    <main className={styles[`current-product`]}>
      <CurrentProduct
        itemNo={itemNo}
        name={name}
        currentPrice={currentPrice}
        imageUrls={imageUrls}
        quantity={quantity}
        categories={categories}
        date={date}
        hot={hot}
        sale={sale}
      />
    </main>
  );
}
