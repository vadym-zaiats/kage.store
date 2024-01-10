"use client";

import styles from "./burgerMenu.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setBurger } from "@/redux/slices/burgerSlice";
import Image from "next/image";
import Link from "next/link";

export default function BurgerMenu() {
  const dispatch = useDispatch();

  return (
    <div className={`${styles["burger-menu"]}`}>
      <ul className={`${styles["burger-menu__head"]}`}>
        <li>
          <button
            className={`${styles["burger-menu__close"]}`}
            onClick={() => {
              dispatch(setBurger());
            }}
          >
            <Image
              src="/imgs/close.png"
              width={25}
              height={25}
              alt="burger"
              priority
            />
          </button>
        </li>
        <li>
          <Image
            src="/imgs/logo-removebg.png"
            width={70}
            height={70}
            alt="burger"
            priority
          />
        </li>
      </ul>
      <div className={`${styles["burger-menu__content"]}`}>
        <h3 className={`${styles["burger-menu__title"]}`}>Каталог</h3>
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
    </div>
  );
}
