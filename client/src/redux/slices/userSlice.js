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
  reducers: (create) => ({
    setUser: create.reducer((state, action) => {
      state.user = action.payload;
    }),
  }),
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
export const { setUser } = userSlice.actions;
export const { userSelector } = userSlice.selectors;
