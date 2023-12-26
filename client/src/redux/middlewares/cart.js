import { createAsyncThunk } from "@reduxjs/toolkit";

export const addToCartFunc = createAsyncThunk(
  "cart/addToCartFunc",
  (itemData, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const existingProd = state.cart.cart.find(
        (item) => item.itemNo === itemData.itemNo
      );
      if (existingProd) {
        if (existingProd.count < itemData.quantity) {
          const updatedItem = {
            ...existingProd,
            count: existingProd.count + 1,
          };
          return updatedItem;
        } else {
          return existingProd;
        }
      } else {
        return itemData;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addSeveralToCart = createAsyncThunk(
  "cart/addSeveralToCart",
  (itemData, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const existingProd = state.cart.cart.find(
        (item) => item.itemNo === itemData.itemNo
      );
      if (existingProd) {
        if (existingProd.count + itemData.count <= itemData.quantity) {
          const updatedItem = {
            ...existingProd,
            count: existingProd.count + itemData.count,
          };
          return updatedItem;
        } else {
          return existingProd;
        }
      } else {
        return itemData;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
