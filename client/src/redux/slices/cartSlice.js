import { createSlice } from "@reduxjs/toolkit";
import { addToCart, delFromCart } from "../middlewares/cart";

const calcCartPriceSum = (productsInCart) => {
  const arrOfSums = [];
  productsInCart.map((prod) => {
    arrOfSums.push(prod.count * prod.currentPrice);
  });
  const totalSum = arrOfSums.reduce((sum, item) => item + sum, 0);
  return totalSum;
};

const initialState = {
  cart: [],
  loading: false,
  error: null,
  totalCount: 0,
  totalSum: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addToCart.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
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
      state.totalCount = state.cart.reduce((sum, item) => item.count + sum, 0);
      state.totalSum = calcCartPriceSum(state.cart);
    });
    builder.addCase(addToCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(delFromCart.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(delFromCart.fulfilled, (state, action) => {
      state.cart = action.payload;
      state.loading = false;
      state.error = null;
      state.totalCount = state.cart.reduce((sum, item) => item.count + sum, 0);
      state.totalSum = calcCartPriceSum(state.cart);
    });
    builder.addCase(delFromCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default cartSlice.reducer;
export const {} = cartSlice.actions;
