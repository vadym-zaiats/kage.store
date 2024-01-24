"use client";

import styles from "./filter.module.scss";
import { MenuHeader } from "../menuHeader/MenuHeader";
import { setFilter } from "@/redux/slices/filterSlice";
import {
  availableFiltersSelector,
  addCategory,
} from "@/redux/slices/filterSlice";
import { useSelector, useDispatch } from "react-redux";

export function Filter() {
  const dispatch = useDispatch();
  const { categories } = useSelector(availableFiltersSelector);

  const toggleCategory = ({ target }) => {
    const { checked, name } = target;
    if (checked) {
      dispatch(addCategory(name));
    } else {
      console.log("Видалити категорію");
      // dispatch(removeCategory(name));
    }
  };

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
                  onChange={toggleCategory}
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
