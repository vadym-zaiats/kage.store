"use client";

import styles from "./filter.module.scss";
import { MenuHeader } from "../menuHeader/MenuHeader";
import { setFilter } from "@/redux/slices/filterSlice";

export function Filter() {
  return (
    <div className={`${styles["filter"]}`}>
      <MenuHeader func={setFilter} />
      <h2 className={`${styles["filter__title"]}`}>Фільтри</h2>
    </div>
  );
}
