import { createAsyncThunk } from "@reduxjs/toolkit";

export const setAllProducts = createAsyncThunk(
  "allProducts/setAllProducts",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const res = await fetch(`http://localhost:4000/api/products`);
      if (!res.ok) {
        throw new Error("Server error");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.massage);
    }
  }
);
