"use client";
import styles from "./currentProd.module.scss";
import Image from "next/image";
import { addToCart } from "@/redux/middlewares/cart";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavFunc } from "@/redux/middlewares/favourite";
import { favouriteSelector } from "@/redux/slices/favouriteSlice";

export function CurrentProduct({
  itemNo,
  name,
  currentPrice,
  imageUrls,
  quantity,
  categories,
  date,
  hot,
  sale,
}) {
  const dispatch = useDispatch();
  const favourites = useSelector(favouriteSelector);
  const [favourite, isFavourite] = useState(false);

  const [number, setNumber] = useState(1);

  const decrease = () => {
    number !== 1 ? setNumber((prevState) => prevState - 1) : null;
  };
  const increase = () => {
    number >= 1 && quantity > number
      ? setNumber((prevState) => prevState + 1)
      : null;
  };

  useEffect(() => {
    const isFavouriteProduct = favourites.some(
      (product) => product.itemNo === itemNo
    );
    isFavourite(isFavouriteProduct);
  }, [favourites, itemNo]);

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
          src={favourite ? "/imgs/in-fav.png" : "/imgs/fav.png"}
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
          src={imageUrls[0]}
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
