"use client";

import { useState } from "react";
import { Card } from "../card/Сard";
import styles from "./productsBlock.module.scss";

export function ProductsBlock({ title, products, num }) {
  const [count, setCount] = useState(num);
  const handleLoadMore = () => {
    setCount((prevState) => prevState + num);
  };

  return (
    <section className={styles[`block`]}>
      <h2 className={styles[`block__title`]}>{title}</h2>
      <ul className={styles[`block__list`]}>
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
