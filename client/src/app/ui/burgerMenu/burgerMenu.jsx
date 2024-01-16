"use client";

import styles from "./burgerMenu.module.scss";
import { useSelector } from "react-redux";
import { mainBurgerMenuSelector } from "@/redux/slices/burgerSlice";
import BurgerMenuCatalog from "./burgerMenuCatalog/burgerMenuCatalog";
import BurgerMenuMain from "./burgerMenuMain/burgerMenuMain";
import { MenuHeader } from "../menuHeader/MenuHeader";
import { setBurger } from "@/redux/slices/burgerSlice";

export function BurgerMenu() {
  const mainMenu = useSelector(mainBurgerMenuSelector);

  return (
    <div className={`${styles["burger-menu"]}`}>
      <MenuHeader func={setBurger} />
      {mainMenu && <BurgerMenuMain />}
      {!mainMenu && <BurgerMenuCatalog />}
    </div>
  );
}
