"use client";

import "./allProducts.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { ProductsBlock } from "../productsBlock/ProductsBlock";
import {
  sortFilter,
  addCategory,
  setMinPrice,
  setMaxPrice,
  categoriesSelector,
  selectedMinPriceSelector,
  selectedMaxPriceSelector,
  sortSelector,
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
  const sort = useSelector(sortSelector);

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
    // sort
    let sortOrder;
    if (sort === "currentPrice") {
      sortOrder = "&sort=currentPrice";
    } else if (sort === "-currentPrice") {
      sortOrder = "&sort=-currentPrice";
    } else if (sort === "date") {
      sortOrder = "&sort=date";
    } else sortOrder = "";
    console.log(sortOrder);
    // full link
    const fullFilterURL = categoryFilter + priceFilter + sortOrder;
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
    // sort
    const sortInUrl = searchParams.get("sort");
    if (sortInUrl) {
      dispatch(sortFilter(sortInUrl));
    }
  };

  useEffect(() => {
    filterLinkConstructor();
  }, [minPrice, maxPrice, selectedCategories, sort]);

  useEffect(() => {
    setFiltersByUrl();
  }, [searchParams]);

  return (
    <ProductsBlock title="Усі вироби" searchParams={searchParams} num={4} />
  );
}
