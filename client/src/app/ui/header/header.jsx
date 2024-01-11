"use client";

import styles from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import BurgerMenu from "../burgerMenu/BurgerMenu.jsx";
import { useSelector, useDispatch } from "react-redux";
import { setBurger } from "@/redux/slices/burgerSlice";
import { cartTotalCountSelector } from "@/redux/slices/cartSlice";
import { favouriteSelector } from "@/redux/slices/favouriteSlice";
import { burgerIsOpenSelector } from "@/redux/slices/burgerSlice";

export default function Header() {
  const dispatch = useDispatch();
  const burger = useSelector(burgerIsOpenSelector);
  const totalCount = useSelector(cartTotalCountSelector);
  const totalInFav = useSelector(favouriteSelector);
  return (
    <>
      <header className={`${styles["header"]} ${styles["header--find"]}`}>
        <ul className={`${styles["header__list"]}`}>
          <li>
            <Link href="/">
              <Image
                src="/imgs/logo.png"
                width={50}
                height={50}
                alt="logo"
                priority
              />
            </Link>
          </li>
          <li className={`${styles["header__fav"]}`}>
            <Link href="/fav">
              <Image
                src="/imgs/fav.png"
                width={25}
                height={25}
                alt="fav"
                priority
              />
              <div className={`${styles["header__badge"]}`}>
                {totalInFav.length}
              </div>
            </Link>
          </li>
          <li className={`${styles["header__cart"]}`}>
            <Link href="/cart">
              <Image
                src="/imgs/cart.png"
                width={25}
                height={25}
                alt="cart"
                priority
              />
              <div className={`${styles["header__badge"]}`}>{totalCount}</div>
            </Link>
          </li>
          <li>
            <button
              className={`${styles["header__burger"]}`}
              onClick={() => {
                dispatch(setBurger());
              }}
            >
              <Image
                src="/imgs/burger.png"
                width={25}
                height={25}
                alt="burger"
                priority
              />
            </button>
          </li>
        </ul>
      </header>
      {burger && <BurgerMenu />}
    </>
  );
}
