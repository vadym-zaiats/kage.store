"use client";

import { useState } from "react";
import { Card } from "../card/Сard";
import styles from "./productsBlock.module.scss";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setFilter } from "@/redux/slices/filterSlice";

export function ProductsBlock({ title, products, num }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(num);
  const handleLoadMore = () => {
    setCount((prevState) => prevState + num);
  };

  return (
    <section className={styles[`block`]}>
      <h2 className={styles[`block__title`]}>{title}</h2>
      <ul className={styles[`block__list`]}>
        {title === "Усі товари" && (
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
            <li className={styles[`block__button`]}>За замовчуванням</li>
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
