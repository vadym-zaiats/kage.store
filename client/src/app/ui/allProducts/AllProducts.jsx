"use client";

import "./allProducts.module.scss";
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
import { useRouter, useSearchParams } from "next/navigation";

export function AllProducts() {
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();

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
    if (fullFilterURL.length !== 0) {
      router.push("products?" + fullFilterURL);
    } else {
      router.push("products");
    }
  };

  const setFiltersByUrl = () => {
    // categoiesInUrl parse
    const categoiesInUrl = searchParams.get("categories");
    if (categoiesInUrl !== null) {
      const arrFromFilters = categoiesInUrl?.split(",");
      arrFromFilters?.forEach((category) => {
        dispatch(addCategory(category));
      });
    }
    // minPrice parse
    const minPriceInUrl = searchParams.get("minPrice");
    if (minPriceInUrl) {
      dispatch(setMinPrice(minPriceInUrl));
    }
    // maxPrice parse
    const maxPriceInUrl = searchParams.get("maxPrice");
    if (maxPriceInUrl) {
      dispatch(setMaxPrice(maxPriceInUrl));
    }
  };

  useEffect(() => {
    filterLinkConstructor();
  }, [minPrice, maxPrice, selectedCategories]);

  useEffect(() => {
    setFiltersByUrl();
  }, [searchParams]);

  return (
    <ProductsBlock title="Усі вироби" searchParams={searchParams} num={4} />
  );
}
