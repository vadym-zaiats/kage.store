import { useState } from "react";
import { Card } from "../card/Card";
import styles from "./productsBlock.module.scss";

export function ProductsBlock({ title, products }) {
  const [count, setCount] = useState(2);

  const handleLoadMore = () => {
    setCount((prevState) => prevState + 2);
  };

  return (
    <div className={styles[`block`]}>
      <h2 className={styles[`block__title`]}>{title}</h2>
      <div className={styles[`block__list`]}>
        {products &&
          Array.isArray(products) &&
          products.length > 0 &&
          products
            .slice(0, count)
            .map(({ name, currentPrice, imageUrls, _id }) => (
              <Card
                key={_id}
                name={name}
                currentPrice={currentPrice}
                imageUrls={imageUrls}
              />
            ))}
      </div>
      {count < products.length && (
        <button className={styles[`block__show-more`]} onClick={handleLoadMore}>
          Показати ще
        </button>
      )}
    </div>
  );
}
