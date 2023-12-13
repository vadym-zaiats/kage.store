import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    isLoading: false,
  },
  reducers: {
    // setAllProducts: (state, action) => {
    //   state.allProducts = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(setProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(setProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allProducts = action.payload;
    });
    builder.addCase(setProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});
export const setProducts = createAsyncThunk(
  "products/setProducts",
  async (_, { dispatch, rejectWithValue }) => {
    const data = await fetch("http://localhost:4000/api/products").then((res) =>
      res.json()
    );
    return data;
    // dispatch(setAllProducts(data));
  }
);
export default productsSlice.reducer;
export const { setBurger } = productsSlice.actions;
