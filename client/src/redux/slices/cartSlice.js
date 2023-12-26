import { createSlice } from "@reduxjs/toolkit";
import { addToCartFunc } from "../middlewares/cart";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(addToCartFunc.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(addToCartFunc.fulfilled, (state, action) => {
      const existingProductIndex = state.cart.findIndex(
        (prod) => prod.itemNo === action.payload.itemNo
      );
      if (existingProductIndex !== -1) {
        state.cart[existingProductIndex] = action.payload;
      } else {
        state.cart.push(action.payload);
      }
      state.loading = false;
      state.error = null;
    });

    builder.addCase(addToCartFunc.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
