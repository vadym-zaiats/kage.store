import Image from "next/image";
import styles from "./card.module.scss";
import Link from "next/link";

export function Card({ name, currentPrice, imageUrls, itemNo, quantity }) {
  return (
    <div className={styles[`card-wrapper`]}>
      <Image
        className={styles[`card-wrapper__to-fav`]}
        src="/imgs/add-to-fav.png"
        width={25}
        height={25}
        alt="to-fav"
      />
      <Link
        href={{
          pathname: `/product/${itemNo}`,
          query: {
            name,
            currentPrice,
            imageUrls,
            itemNo,
            quantity,
          },
        }}
      >
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
      </Link>
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
