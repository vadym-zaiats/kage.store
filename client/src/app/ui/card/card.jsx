import Image from "next/image";
import styles from "./card.module.scss";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { addToFavFunc } from "@/redux/middlewares/favourite";
import { addToCartFunc } from "@/redux/middlewares/cart";

export function Card({
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

  return (
    <div className={styles[`card-wrapper`]}>
      <button className={styles[`card-wrapper__to-fav`]}>
        <Image
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
          src="/imgs/add-to-fav.png"
          width={25}
          height={25}
          alt="to-fav"
          priority
        />
      </button>
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
      <button className={styles[`card-wrapper__to-cart`]}>
        <Image
          onClick={() => {
            dispatch(
              addToCartFunc({
                name,
                currentPrice,
                imageUrls,
                itemNo,
                quantity,
                categories,
                date,
                hot,
                sale,
                count: 1,
              })
            );
          }}
          src="/imgs/add-to-cart.png"
          width={25}
          height={25}
          alt="to-cart"
          priority
        />
      </button>
    </div>
  );
}
