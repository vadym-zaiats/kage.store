import { createSlice } from "@reduxjs/toolkit";
import { postOrder } from "../middlewares/postOrder";

const initialState = {
  error: null,
  isLoading: null,
};

const selectors = {};

const orderSlice = createSlice({
  name: "order",
  initialState,
  selectors,
  extraReducers: (builder) => {
    builder.addCase(postOrder.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postOrder.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(postOrder.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

// export const {  } = orderSlice.actions;

export default orderSlice.reducer;
