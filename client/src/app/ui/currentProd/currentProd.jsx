"use client";
import styles from "./currentProd.module.scss";
import Image from "next/image";
import { addToCart } from "@/redux/middlewares/cart";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToFavFunc } from "@/redux/middlewares/favourite";

export function CurrentProduct({
  name,
  currentPrice,
  imageUrls,
  itemNo,
  quantity,
  categories,
  date,
  hot,
  sale,
}) {
  const dispatch = useDispatch();
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
    <>
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
          onClick={() => {
            dispatch(
              addToFavFunc({
                name,
                currentPrice,
                imageUrls,
                itemNo,
                quantity,
                categories,
                date,
                hot,
                sale,
              })
            );
          }}
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
            addToCart({
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
    </>
  );
}
