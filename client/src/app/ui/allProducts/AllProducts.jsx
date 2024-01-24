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
  categoriesSelector,
  selectedMinPriceSelector,
  selectedMaxPriceSelector,
} from "@/redux/slices/filterSlice";
import { useEffect } from "react";

export function AllProducts({ searchParams }) {
  const dispatch = useDispatch();

  const filteredProds = useSelector(filteredProductsSelector);
  // const url = new URLSearchParams(searchParams).toString();

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
    // sort
    // let sortOrder;
    // if (sort === "currentPrice") {
    //   sortOrder = "&sort=currentPrice";
    // } else if (sort === "-currentPrice") {
    //   sortOrder = "&sort=-currentPrice";
    // } else sortOrder = "";

    // full link

    const fullFilterURL = categoryFilter + priceFilter;
    console.log(fullFilterURL);
    if (fullFilterURL.size !== 0) {
      dispatch(fetchFilteredProducts(fullFilterURL));
      // setSearchParams(fullFilterURL);
    } else {
      dispatch(fetchFilteredProducts({}));
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
    filterLinkConstructor();
  }, [minPrice, maxPrice, selectedCategories]);

  // console.log(url);

  return <ProductsBlock title="Усі вироби" products={filteredProds} num={4} />;
}
