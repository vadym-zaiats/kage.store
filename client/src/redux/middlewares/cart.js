import { createAsyncThunk } from "@reduxjs/toolkit";
import { addToCart } from "../slices/cartSlice";

export const addToCartFunc = createAsyncThunk(
  "cart/addToCartFunc",
  (itemData, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const existingItem = state.cart.cart.find(
        (item) => item.itemNo === itemData.itemNo
      );
      if (existingItem) {
        if (existingItem.count < itemData.quantity) {
          const updatedItem = {
            ...existingItem,
            count: existingItem.count + 1,
          };
          return updatedItem;
        } else {
          return existingItem;
        }
      } else {
        return itemData;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
