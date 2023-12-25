import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    setCart: (state, action) => {
      state.cart = "";
    },
  },
});

export default cartSlice.reducer;
export const { setCart } = cartSlice.actions;
