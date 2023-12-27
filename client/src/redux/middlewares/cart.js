import { createAsyncThunk } from "@reduxjs/toolkit";

export const addToCart = createAsyncThunk(
  "cart/addToCart",
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
export const delFromCart = createAsyncThunk(
  "cart/delFromCart",
  ({ itemNo }, { dispatch, rejectWithValue, getState }) => {
    try {
      const state = getState();
      const newArr = state.cart.cart.filter(
        (product) => product.itemNo !== itemNo
      );
      return newArr;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
