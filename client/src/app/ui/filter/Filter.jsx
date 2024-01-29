"use client";

import styles from "./filter.module.scss";
import { MenuHeader } from "../menuHeader/MenuHeader";
import { PriceRange } from "./priceRange/PriceRange";
import { setFilter, categoriesSelector } from "@/redux/slices/filterSlice";
import {
  availableFiltersSelector,
  addCategory,
  removeCategory,
} from "@/redux/slices/filterSlice";
import { useSelector, useDispatch } from "react-redux";

export function Filter() {
  const dispatch = useDispatch();
  const { categories } = useSelector(availableFiltersSelector);
  const selectedCategories = useSelector(categoriesSelector);

  const toggleCategory = ({ target }) => {
    const { checked, name } = target;
    if (checked) {
      dispatch(addCategory(name));
    } else {
      dispatch(removeCategory(name));
    }
  };

  return (
    <div className={`${styles["filter"]}`}>
      <MenuHeader func={setFilter} loginButton={false} />
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
                  checked={selectedCategories.includes(id)}
                />
                <label htmlFor={id} className={styles[`filter__label`]}>
                  {name}
                </label>
              </li>
            );
          })}
          <li className={styles[`filter__variant`]}>
            <h5>Ціна</h5>
            <PriceRange />
          </li>
        </ul>
      </div>
    </div>
  );
}
