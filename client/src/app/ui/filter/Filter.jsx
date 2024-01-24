"use client";

import styles from "./filter.module.scss";
import { MenuHeader } from "../menuHeader/MenuHeader";
import { setFilter } from "@/redux/slices/filterSlice";
import { availableFiltersSelector } from "@/redux/slices/filterSlice";
import { useSelector } from "react-redux";

export function Filter() {
  const { categories } = useSelector(availableFiltersSelector);
  return (
    <div className={`${styles["filter"]}`}>
      <MenuHeader func={setFilter} />
      <div className={`${styles["filter__content"]}`}>
        <h3 className={`${styles["filter__title"]}`}>Фільтри</h3>
        <ul>
          {[...categories].map(({ name, id }) => {
            return (
              <li key={id} className={styles[`filter__variant`]}>
                <input
                  className={styles[`filter__input`]}
                  id={id}
                  type="checkbox"
                  name={id}
                  value={name}
                  // onChange={}
                  // checked={}
                />
                <label htmlFor={id} className={styles[`filter__label`]}>
                  {name}
                </label>
              </li>
            );
          })}
          <li>
            <h4>Ціна</h4>
          </li>
        </ul>
      </div>
    </div>
  );
}
