import { createSlice } from "@reduxjs/toolkit";
import { addToCartFunc } from "../middlewares/cart";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  extraReducers: (builder) => {
    builder.addCase(addToCartFunc.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
    builder.addCase(addToCartFunc.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
