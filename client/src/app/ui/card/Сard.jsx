import Image from "next/image";
import styles from "./card.module.scss";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToFavFunc } from "@/redux/middlewares/favourite";
import { addToCart, delFromCart } from "@/redux/middlewares/cart";

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
  count,
}) {
  const dispatch = useDispatch();

  return (
    <li className={styles[`card-wrapper`]}>
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
      <Link href={`/products/${itemNo}`}>
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
          {!count ? `${currentPrice} грн` : `${currentPrice * count} грн`}
        </div>
      </Link>
      {count && (
        <button className={styles[`card-wrapper__delete`]}>
          <Image
            onClick={() => {
              dispatch(delFromCart({ itemNo }));
            }}
            src="/imgs/bin.png"
            width={25}
            height={25}
            alt="bin"
            priority
          />
        </button>
      )}
      {!count ? (
        <button className={styles[`card-wrapper__to-cart`]}>
          <Image
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
      ) : (
        <div className={styles[`card-wrapper__to-cart`]}>
          <button
            disabled={count === 1}
            className={styles[`card-wrapper__decrease`]}
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
                  count: -1,
                })
              );
            }}
            src="/imgs/add-to-cart.png"
            width={25}
            height={25}
            alt="to-cart"
          >
            -
          </button>
          <span className={styles[`card-wrapper__number`]}>{count}</span>
          <button
            disabled={count === quantity}
            className={styles[`card-wrapper__increase`]}
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
                  count: 1,
                })
              );
            }}
          >
            +
          </button>
        </div>
      )}
    </li>
  );
}
