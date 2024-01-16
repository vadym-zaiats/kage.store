import { productFiltersEP } from "@/api/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFilters = createAsyncThunk(
  "filter/fetchFilters",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(productFiltersEP);
      if (!res.ok) {
        throw new Error("Server error");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
