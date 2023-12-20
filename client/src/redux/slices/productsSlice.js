import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const allProductsSlice = createSlice({
  name: "allProducts",
  initialState: {
    allProducts: [],
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
    const data = await fetch("http://localhost:4000/api/products").then((res) =>
      res.json()
    );
    return data;
  }
);

export default allProductsSlice.reducer;
export const {} = allProductsSlice.actions;
