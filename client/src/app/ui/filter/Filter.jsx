"use client";

import styles from "../burgerMenu/burgerMenu.module.scss";
import { MenuHeader } from "../menuHeader/MenuHeader";
import { setFilter } from "@/redux/slices/filterSlice";

export function Filter() {
  return (
    <div className={`${styles["burger-menu"]}`}>
      <MenuHeader func={setFilter} />
      <div className={`${styles["burger-menu__content"]}`}>
        <h3 className={`${styles["burger-menu__title"]}`}>Фільтри</h3>
        <ul></ul>
      </div>
    </div>
  );
}
