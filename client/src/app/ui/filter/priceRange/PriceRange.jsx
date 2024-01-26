"use client";

import styles from "./priceRange.module.scss";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { minPriceSelector, maxPriceSelector } from "@/redux/slices/filterSlice";
import {
  setMaxPrice,
  setMinPrice,
  resetFilters,
  selectedMinPriceSelector,
  selectedMaxPriceSelector,
} from "@/redux/slices/filterSlice";

export function PriceRange() {
  const dispatch = useDispatch();
  const min = useSelector(minPriceSelector);
  const max = useSelector(maxPriceSelector);
  const minPrice = useSelector(selectedMinPriceSelector);
  const maxPrice = useSelector(selectedMaxPriceSelector);
  const [minPriceFilter, setMinPriceFilter] = useState(minPrice);
  const [maxPriceFilter, setMaxPriceFilter] = useState(maxPrice);

  const handleMinPriceFilter = (e) => {
    setMinPriceFilter(e.target.value);
  };
  const handleMaxPriceFilter = (e) => {
    setMaxPriceFilter(e.target.value);
  };
  const handleAprovePriceFilter = () => {
    dispatch(setMinPrice(minPriceFilter));
    dispatch(setMaxPrice(maxPriceFilter));
  };
  const handleResetFilter = () => {
    dispatch(resetFilters());
    setMinPriceFilter(null);
    setMaxPriceFilter(null);
  };

  return (
    <div className={`${styles["price-range"]}`}>
      <div className={`${styles["price-range__min"]}`}>
        <input
          className={styles[`price-range__min-input`]}
          type="number"
          id="min"
          name="min"
          placeholder={min}
          value={minPriceFilter !== null && minPriceFilter}
          onChange={handleMinPriceFilter}
        />
        <label className={`${styles["price-range__min-label"]}`}>від</label>
      </div>
      <div className={`${styles["price-range__max"]}`}>
        <input
          className={styles[`price-range__max-input`]}
          type="number"
          id="max"
          name="max"
          placeholder={max}
          value={maxPriceFilter !== null && maxPriceFilter}
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
