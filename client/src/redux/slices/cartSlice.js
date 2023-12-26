import { createSlice } from "@reduxjs/toolkit";
import { addToCartFunc, addSeveralToCart } from "../middlewares/cart";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    loading: false,
    error: null,
    totalInCart: 0,
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
      state.totalInCart = state.cart.reduce((sum, item) => item.count + sum, 0);
    });

    builder.addCase(addToCartFunc.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(addSeveralToCart.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(addSeveralToCart.fulfilled, (state, action) => {
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
      state.totalInCart = state.cart.reduce((sum, item) => item.count + sum, 0);
    });

    builder.addCase(addSeveralToCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
