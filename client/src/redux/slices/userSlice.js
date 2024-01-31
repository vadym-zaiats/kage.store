import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
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
    clearUser: create.reducer((state) => {
      state.user = null;
    }),
  }),
});

export default userSlice.reducer;
export const { setUser, clearUser } = userSlice.actions;
export const { userSelector } = userSlice.selectors;
