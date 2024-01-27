"use client";

import { useEffect, useState } from "react";
import { Card } from "../card/Сard";
import styles from "./productsBlock.module.scss";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, sortFilter } from "@/redux/slices/filterSlice";
import { fetchFilteredProducts } from "@/redux/middlewares/filteredProducts";
import { filteredProductsSelector } from "@/redux/slices/productsSlice";

export function ProductsBlock({ title, searchParams, num }) {
  const [count, setCount] = useState(num);
  const [sortOptions, setSortOptions] = useState(false);
  const [optionType, setOptionType] = useState("За замовчуванням");

  const dispatch = useDispatch();
  const products = useSelector(filteredProductsSelector);
  const url = new URLSearchParams(searchParams).toString();

  const handleLoadMore = () => {
    setCount((prevState) => prevState + num);
  };

  useEffect(() => {
    dispatch(fetchFilteredProducts(url));
  }, [url]);

  const handleSort = (e) => {
    dispatch(sortFilter(e.target.getAttribute("data-option-type")));
    setOptionType(e.target.getAttribute("data-option-text"));
    setSortOptions(!sortOptions);
  };

  return (
    <section className={styles[`block`]}>
      <h2 className={styles[`block__title`]}>{title}</h2>
      <ul className={styles[`block__list`]}>
        {title === "Усі вироби" && (
          <>
            <li className={styles[`block__button`]}>
              <button
                className={styles[`block__filter`]}
                onClick={() => {
                  dispatch(setFilter());
                }}
              >
                <Image
                  src="/imgs/filter.png"
                  width={20}
                  height={20}
                  alt="to-fav"
                  priority
                />
                <span className={styles[`block__filter--text`]}>Фільтри</span>
              </button>
            </li>
            <li
              className={`${styles[`block__button`]} ${
                sortOptions && styles[`block__button--sort`]
              }`}
            >
              <span
                className={styles[`block__sort-type`]}
                onClick={() => {
                  setSortOptions(!sortOptions);
                }}
              >
                {optionType}
              </span>
              <ul
                className={`${styles["block__sort-options"]} ${
                  sortOptions && styles["block__sort-options--open"]
                }`}
              >
                <li
                  data-option-type="date"
                  data-option-text="Найновіші"
                  onClick={handleSort}
                >
                  Найновіші
                </li>
                <li
                  data-option-type="false"
                  data-option-text="За замовчуванням"
                  onClick={handleSort}
                >
                  За замовчуванням
                </li>
                <li
                  data-option-type="currentPrice"
                  data-option-text="Від найменшої ціни"
                  onClick={handleSort}
                >
                  Від найменшої ціни
                </li>
                <li
                  data-option-type="-currentPrice"
                  data-option-text="Від найбільшої ціни"
                  onClick={handleSort}
                >
                  Від найбільшої ціни
                </li>
              </ul>
            </li>
          </>
        )}
        {products &&
          Array.isArray(products) &&
          products.length > 0 &&
          products
            .slice(0, count)
            .map(({ _id, ...productProps }) => (
              <Card key={_id} {...productProps} />
            ))}
      </ul>
      {count < products.length && (
        <button className={styles[`block__show-more`]} onClick={handleLoadMore}>
          Показати ще
        </button>
      )}
    </section>
  );
}
