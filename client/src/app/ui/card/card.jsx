import Image from "next/image";
import styles from "./card.module.scss";

export function Card({ name, currentPrice, imageUrls }) {
  return (
    <div className={styles[`card-wrapper`]}>
      <Image
        className={styles[`card-wrapper__to-fav`]}
        src="/imgs/add-to-fav.png"
        width={25}
        height={25}
        alt="to-fav"
      />
      <Image
        className={styles[`card-wrapper__img`]}
        src={imageUrls[0]}
        width={130}
        height={130}
        alt={name}
        priority
      />
      <div className={styles[`card-wrapper__name`]}>{name}</div>
      <div className={styles[`card-wrapper__current-price`]}>
        {currentPrice} грн
      </div>
      <Image
        className={styles[`card-wrapper__to-cart`]}
        src="/imgs/add-to-cart.png"
        width={25}
        height={25}
        alt="to-cart"
      />
    </div>
  );
}
