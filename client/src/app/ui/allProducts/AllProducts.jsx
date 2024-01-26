"use client";

import styles from "./allProducts.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { ProductsBlock } from "../productsBlock/ProductsBlock";
import {
  addCategory,
  setMinPrice,
  setMaxPrice,
  categoriesSelector,
  selectedMinPriceSelector,
  selectedMaxPriceSelector,
} from "@/redux/slices/filterSlice";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function AllProducts({ searchParams }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const selectedCategories = useSelector(categoriesSelector);
  const minPrice = useSelector(selectedMinPriceSelector);
  const maxPrice = useSelector(selectedMaxPriceSelector);

  const filterLinkConstructor = () => {
    // categories;
    const categoryFilter =
      selectedCategories.length > 0
        ? `categories=${selectedCategories.join("%2C")}`
        : "";
    // price
    let priceFilter = "";
    if (minPrice !== null) priceFilter += `&minPrice=${minPrice}`;
    if (maxPrice !== null) priceFilter += `&maxPrice=${maxPrice}`;
    // full link
    const fullFilterURL = categoryFilter + priceFilter;
    console.log(fullFilterURL);
    if (fullFilterURL.size !== 0) {
      router.push("products?" + fullFilterURL);
      // dispatch(fetchFilteredProducts(fullFilterURL));
      // setSearchParams(fullFilterURL);
    } else {
      // dispatch(fetchFilteredProducts({}));
      // setSearchParams({});
    }
  };

  const setFiltersByUrl = () => {
    const categoiesInUrl = searchParams.categories;
    if (categoiesInUrl !== null) {
      const arrFromFilters = categoiesInUrl?.split(",");
      arrFromFilters?.forEach((category) => {
        dispatch(addCategory(category));
      });
    }
    //
    const minPriceInUrl = searchParams.minPrice;
    if (minPriceInUrl) {
      dispatch(setMinPrice(minPriceInUrl));
    }
    //
    const maxPriceInUrl = searchParams.maxPrice;
    if (maxPriceInUrl) {
      dispatch(setMaxPrice(maxPriceInUrl));
    }
  };

  useEffect(() => {
    // setFiltersByUrl();
    filterLinkConstructor();
  }, [minPrice, maxPrice, selectedCategories]);

  return (
    <ProductsBlock title="Усі вироби" searchParams={searchParams} num={4} />
  );
}
