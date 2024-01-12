"use client";

import styles from "./burgerMenu.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setBurger } from "@/redux/slices/burgerSlice";
import Image from "next/image";
import { mainBurgerMenuSelector } from "@/redux/slices/burgerSlice";
import BurgerMenuCatalog from "./burgerMenuCatalog/burgerMenuCatalog";
import BurgerMenuMain from "./burgerMenuMain/burgerMenuMain";

export default function BurgerMenu() {
  const dispatch = useDispatch();
  const mainMenu = useSelector(mainBurgerMenuSelector);

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
      {mainMenu && <BurgerMenuMain />}
      {!mainMenu && <BurgerMenuCatalog />}
    </div>
  );
}
