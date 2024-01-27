import styles from "../burgerMenu.module.scss";
import { setBurger } from "@/redux/slices/burgerSlice";
import Link from "next/link";
import { setMainMenu } from "@/redux/slices/burgerSlice";
import { useDispatch } from "react-redux";

export default function BurgerMenuMain() {
  const dispatch = useDispatch();

  return (
    <div className={`${styles["burger-menu__content"]}`}>
      <ul>
        <li className={`${styles["burger-menu__item"]}`}>
          <Link
            href="/news"
            onClick={() => {
              dispatch(setBurger());
            }}
          >
            Новини
          </Link>
        </li>
        <li
          className={`${styles["burger-menu__item"]}`}
          onClick={() => {
            dispatch(setMainMenu());
          }}
        >
          Каталог
        </li>
        <li className={`${styles["burger-menu__item"]}`}>
          <Link
            href="/contacts"
            onClick={() => {
              dispatch(setBurger());
            }}
          >
            Контакти
          </Link>
        </li>
        <li className={`${styles["burger-menu__item"]}`}>
          <Link
            href="/my-order"
            onClick={() => {
              dispatch(setBurger());
            }}
          >
            Де моє замовлення
          </Link>
        </li>
        <li className={`${styles["burger-menu__item"]}`}>
          <Link
            href="/delivery"
            onClick={() => {
              dispatch(setBurger());
            }}
          >
            Доставка та оплата
          </Link>
        </li>
        <li className={`${styles["burger-menu__item"]}`}>
          <Link
            href="/returning"
            onClick={() => {
              dispatch(setBurger());
            }}
          >
            Обмін так повернення
          </Link>
        </li>
      </ul>
    </div>
  );
}
