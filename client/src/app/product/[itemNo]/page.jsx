"use client";
import { useRouter } from "next/navigation";
import styles from "./itemNo.module.scss";
import Image from "next/image";
export default function CurrentProduct({ searchParams }) {
  const { name, currentPrice, imageUrls, itemNo, quantity } = searchParams;

  return (
    <div className={styles[`current-product`]}>
      <h3 className={styles[`current-product__title`]}>{name}</h3>
      {quantity > 0 && <p className={styles[`current-product__quantity`]}>Є</p>}
      <p className={styles[`current-product__item-no`]}>{itemNo}</p>
      <p className={styles[`current-product__img-container`]}>
        <Image
          className={styles[`current-product__fav`]}
          src="/imgs/add-to-fav.png"
          width={45}
          height={45}
          alt="to-fav"
        />
        <Image
          className={styles[`current-product__img`]}
          src={imageUrls}
          width={320}
          height={320}
          alt={name}
        />
      </p>
      <p className={styles[`current-product__price`]}>{currentPrice} грн</p>
    </div>
  );
}
