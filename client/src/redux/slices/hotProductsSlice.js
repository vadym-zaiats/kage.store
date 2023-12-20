import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const hotProductsSlice = createSlice({
  name: "hotProducts",
  initialState: {
    hotProducts: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setHotProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(setHotProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.hotProducts = action.payload;
    });
    builder.addCase(setHotProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});
export const setHotProducts = createAsyncThunk(
  "hotProducts/setHotProducts",
  async (_, { dispatch, rejectWithValue }) => {
    const data = await fetch("http://localhost:4000/api/products/").then(
      (res) => res.json()
    );
    return data;
  }
);

export default hotProductsSlice.reducer;
export const {} = hotProductsSlice.actions;
