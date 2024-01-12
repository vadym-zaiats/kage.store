import styles from "../burgerMenu.module.scss";
import { setBurger } from "@/redux/slices/burgerSlice";
import Link from "next/link";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { setMainMenu } from "@/redux/slices/burgerSlice";

export default function BurgerMenuCatalog() {
  const dispatch = useDispatch();

  return (
    <div className={`${styles["burger-menu__content"]}`}>
      <div className={`${styles["burger-menu__title-block"]}`}>
        <h3 className={`${styles["burger-menu__title"]}`}>Каталог</h3>
        <Image
          onClick={() => {
            dispatch(setMainMenu());
          }}
          className={`${styles["burger-menu__arrow-back"]}`}
          src="/imgs/arrow.svg"
          width={25}
          height={25}
          alt="master-card"
          priority
        />
      </div>
      <ul className={`${styles["burger-menu__list"]}`}>
        <li className={`${styles["burger-menu__item"]}`}>
          <Link
            href="/products"
            onClick={() => {
              dispatch(setBurger());
            }}
          >
            Усі товари
          </Link>
        </li>
        <li className={`${styles["burger-menu__item"]}`}>
          <Link
            href="/products/t-shirts"
            onClick={() => {
              dispatch(setBurger());
            }}
          >
            Футболки
          </Link>
        </li>
        <li className={`${styles["burger-menu__item"]}`}>
          <Link
            href="/products/hoodies"
            onClick={() => {
              dispatch(setBurger());
            }}
          >
            Худі
          </Link>
        </li>
        <li className={`${styles["burger-menu__item"]}`}>
          <Link
            href="/products/pillows"
            onClick={() => {
              dispatch(setBurger());
            }}
          >
            Подушки
          </Link>
        </li>
      </ul>
    </div>
  );
}
