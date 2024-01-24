"use client";

import styles from "./allProducts.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { ProductsBlock } from "../productsBlock/ProductsBlock";
import { filteredProductsSelector } from "@/redux/slices/productsSlice";
import { fetchFilteredProducts } from "@/redux/middlewares/filteredProducts";
import {
  addCategory,
  setMinPrice,
  setMaxPrice,
} from "@/redux/slices/filterSlice";
import { useEffect } from "react";

export function AllProducts({ searchParams }) {
  const dispatch = useDispatch();

  const filteredProds = useSelector(filteredProductsSelector);
  const url = new URLSearchParams(searchParams).toString();
  console.log(searchParams);
  // const filterLinkConstructor = () => {
  //   // categories;
  //   const categoryFilter =
  //     selectedCategories.length > 0
  //       ? `categories=${selectedCategories.join(",")}`
  //       : "";
  //   // price
  //   let priceFilter = "";
  //   if (minPrice !== null) priceFilter += `&minPrice=${minPrice}`;
  //   if (maxPrice !== null) priceFilter += `&maxPrice=${maxPrice}`;
  //   // sort
  //   let sortOrder;
  //   if (sort === "currentPrice") {
  //     sortOrder = "&sort=currentPrice";
  //   } else if (sort === "-currentPrice") {
  //     sortOrder = "&sort=-currentPrice";
  //   } else sortOrder = "";
  //   // full link
  //   const fullFilterURL = categoryFilter + priceFilter + sortOrder;
  //   if (fullFilterURL.size !== 0) {
  //     setSearchParams(fullFilterURL);
  //   } else {
  //     setSearchParams({});
  //   }
  // };

  const setFiltersByUrl = () => {
    const categoiesInUrl = searchParams.categories;
    if (categoiesInUrl !== null) {
      const arrFromFilters = categoiesInUrl.split(",");
      arrFromFilters.forEach((category) => {
        dispatch(addCategory(category));
      });
    }
    //
    const minPriceInUrl = searchParams.minPrice;
    if (minPriceInUrl) {
      dispatch(setMinPrice(+minPriceInUrl));
    }
    //
    const maxPriceInUrl = searchParams.maxPrice;
    if (maxPriceInUrl) {
      dispatch(setMaxPrice(+maxPriceInUrl));
    }
    //
    // const sortInUrl = searchParams.get("sort");
    // if (sortInUrl) {
    //   dispatch(sortBy(sortInUrl));
    // }
  };

  useEffect(() => {
    setFiltersByUrl();
    dispatch(fetchFilteredProducts(url));
  }, [url]);

  console.log(url);

  return <ProductsBlock title="Усі вироби" products={filteredProds} num={4} />;
}
