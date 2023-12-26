"use client";

import styles from "./itemNo.module.scss";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSeveralToCart } from "@/redux/middlewares/cart";

export default function CurrentProduct({ searchParams }) {
  const dispatch = useDispatch();
  const {
    name,
    currentPrice,
    imageUrls,
    itemNo,
    quantity,
    categories,
    date,
    hot,
    sale,
  } = searchParams;
  const [number, setNumber] = useState(1);
  const decrease = () => {
    number !== 1 ? setNumber((prevState) => prevState - 1) : null;
  };
  const increase = () => {
    number >= 1 && quantity > number
      ? setNumber((prevState) => prevState + 1)
      : null;
  };
  return (
    <div className={styles[`current-product`]}>
      <h3 className={styles[`current-product__title`]}>{name}</h3>
      <p className={styles[`current-product__quantity`]}>
        {quantity > 0 ? "Є" : "Немає"}
      </p>
      <p className={styles[`current-product__item-no`]}>{itemNo}</p>
      <p className={styles[`current-product__img-container`]}>
        <Image
          className={styles[`current-product__fav`]}
          src="/imgs/add-to-fav.png"
          width={45}
          height={45}
          alt="to-fav"
          priority
        />
        <Image
          className={styles[`current-product__img`]}
          src={imageUrls}
          width={320}
          height={320}
          alt={name}
          priority
        />
      </p>
      <p className={styles[`current-product__price`]}>
        {currentPrice * number} грн
      </p>
      <div className={styles[`current-product__count`]}>
        <button
          className={styles[`current-product__decrease`]}
          onClick={() => {
            decrease();
          }}
        >
          -
        </button>
        <span className={styles[`current-product__number`]}>{number}</span>
        <button
          className={styles[`current-product__increase`]}
          onClick={() => {
            increase();
          }}
        >
          +
        </button>
      </div>
      <button
        onClick={() => {
          dispatch(
            addSeveralToCart({
              name,
              currentPrice,
              imageUrls,
              itemNo,
              quantity,
              categories,
              date,
              hot,
              sale,
              count: number,
            })
          );
        }}
        className={styles[`current-product__add-to-cart`]}
      >
        Додати до корзини
      </button>
    </div>
  );
}
