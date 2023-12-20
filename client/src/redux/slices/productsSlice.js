import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "allProducts",
  initialState: {
    allProducts: [],
    hotProducts: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setAllProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(setAllProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allProducts = action.payload;
      state.hotProducts = action.payload.filter((obj) => {
        return obj.hot === true;
      });
    });
    builder.addCase(setAllProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});
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

export default productsSlice.reducer;
export const {} = productsSlice.actions;
