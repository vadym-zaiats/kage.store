import { createAsyncThunk } from "@reduxjs/toolkit";
import { addToCart } from "../slices/cartSlice";

export const addToCartFunc = createAsyncThunk(
  "cart/addToCartFunc",
  (
    {
      name,
      currentPrice,
      imageUrls,
      itemNo,
      quantity,
      categories,
      date,
      hot,
      sale,
      count,
    },
    { dispatch, rejectWithValue, getState }
  ) => {
    let cart = [...getState().cart.cart];
    for (let product of cart) {
      if (product.itemNo === itemNo) {
        return { ...product, count: product.count + 1 };
      }
    }
    cart.push({
      name,
      currentPrice,
      imageUrls,
      itemNo,
      quantity,
      categories,
      date,
      hot,
      sale,
      count,
    });
    return cart;
  }
);
