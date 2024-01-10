import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const selectors = {
  burgerIsOpenSelector: (state) => state.isOpen,
};

const burgerSlice = createSlice({
  name: "burger",
  initialState,
  selectors,
  reducers: {
    setBurger: (state, action) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export default burgerSlice.reducer;
export const { setBurger } = burgerSlice.actions;
export const { burgerIsOpenSelector } = burgerSlice.selectors;
