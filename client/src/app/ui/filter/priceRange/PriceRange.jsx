"use client";

import styles from "./priceRange.module.scss";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { minPriceSelector, maxPriceSelector } from "@/redux/slices/filterSlice";
import {
  setMaxPrice,
  setMinPrice,
  resetFilters,
} from "@/redux/slices/filterSlice";
export function PriceRange() {
  const dispatch = useDispatch();
  const min = useSelector(minPriceSelector);
  const max = useSelector(maxPriceSelector);
  const [minPriceFilter, setMinPriceFilter] = useState();
  const [maxPriceFilter, setMaxPriceFilter] = useState();

  const handleMinPriceFilter = (e) => {
    setMinPriceFilter(e.target.value);
  };
  const handleMaxPriceFilter = (e) => {
    setMaxPriceFilter(e.target.value);
  };
  const handleAprovePriceFilter = () => {
    dispatch(setMinPrice(+minPriceFilter));
    dispatch(setMaxPrice(+maxPriceFilter));
  };
  const handleResetFilter = (e) => {
    dispatch(resetFilters());
  };

  return (
    <div className={`${styles["price-range"]}`}>
      <div className={`${styles["price-range__min"]}`}>
        <input
          className={styles[`price-range__min-input`]}
          type="tel"
          id="min"
          name="min"
          placeholder={min}
          onChange={handleMinPriceFilter}
        />
        <label className={`${styles["price-range__min-label"]}`}>від</label>
      </div>
      <div className={`${styles["price-range__max"]}`}>
        <input
          className={styles[`price-range__max-input`]}
          type="tel"
          id="max"
          name="max"
          placeholder={max}
          onChange={handleMaxPriceFilter}
        />
        <label className={`${styles["price-range__max-label"]}`}>до</label>
      </div>
      <button
        className={`${styles["price-range__button"]}`}
        onClick={handleAprovePriceFilter}
      >
        Ok
      </button>
      <button
        className={`${styles["price-range__button"]}`}
        onClick={handleResetFilter}
      >
        Скинути
      </button>
    </div>
  );
}
