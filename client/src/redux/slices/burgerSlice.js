import { createSlice } from "@reduxjs/toolkit";

const burgerSlice = createSlice({
  name: "theme",
  initialState: {
    isOpen: false,
  },
  reducers: {
    setBurger: (state, action) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export default burgerSlice.reducer;
export const { setBurger } = burgerSlice.actions;
