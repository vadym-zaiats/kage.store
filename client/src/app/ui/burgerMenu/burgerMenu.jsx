"use client";

import styles from "./burgerMenu.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setBurger } from "@/redux/slices/burgerSlice";
import Image from "next/image";

export default function BurgerMenu() {
  const dispatch = useDispatch();
  const burger = useSelector((state) => state.burger.isOpen);
  return (
    <div className={`${styles["burger-menu"]} ${styles["qwe"]}`}>
      <ul className={`${styles["burger-menu__head"]} ${styles["qwe"]}`}>
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
    </div>
  );
}
