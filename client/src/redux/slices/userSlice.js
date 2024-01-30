import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const selectors = {
  userSelector: (state) => state.user,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  selectors,
  extraReducers: (builder) => {
    // builder.addCase(postOrder.pending, (state) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(postOrder.fulfilled, (state, action) => {
    //   state.isLoading = false;
    // });
    // builder.addCase(postOrder.rejected, (state) => {
    //   state.isLoading = false;
    // });
  },
});

export default userSlice.reducer;
// export const {  } = orderSlice.actions;
export const { userSelector } = userSlice.selectors;
