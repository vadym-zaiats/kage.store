import { createAsyncThunk } from "@reduxjs/toolkit";
import { setFilteredProducts } from "../slices/productsSlice";

export const fetchFilteredProducts = createAsyncThunk(
  "products/fetchFilteredProducts",
  async (url, { dispatch, rejectWithValue }) => {
    try {
      const res = await fetch(
        `http://localhost:4000/api/products/filter?${url}`
      );
      if (!res.ok) {
        throw new Error("Server error");
      }
      const data = await res.json();
      return dispatch(setFilteredProducts(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
