"use client";

import { useState } from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import BurgerMenu from "../burgerMenu/page";
import { useSelector, useDispatch } from "react-redux";
import { setBurger } from "@/redux/slices/burgerSlice";

export default function Header() {
  const dispatch = useDispatch();
  const burger = useSelector((state) => state.burger.isOpen);
  return (
    <>
      <header className={`${styles["header"]} ${styles["header--find"]}`}>
        <ul className={`${styles["header__list"]}`}>
          <li>
            <Link href="/">
              <Image src="/imgs/logo.jpg" width={50} height={50} alt="logo" />
            </Link>
          </li>
          <li className={`${styles["header__fav"]}`}>
            <Link href="/fav">
              <Image src="/imgs/fav.png" width={25} height={25} alt="fav" />
              <div className={`${styles["header__badge"]}`}>0</div>
            </Link>
          </li>
          <li className={`${styles["header__cart"]}`}>
            <Link href="/cart">
              <Image src="/imgs/cart.png" width={25} height={25} alt="cart" />
              <div className={`${styles["header__badge"]}`}>0</div>
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
              />
            </button>
          </li>
        </ul>
      </header>
      {burger && <BurgerMenu />}
    </>
  );
}
