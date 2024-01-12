import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  mainBurgerMenu: true,
};

const selectors = {
  burgerIsOpenSelector: (state) => state.isOpen,
  mainBurgerMenuSelector: (state) => state.mainBurgerMenu,
};

const burgerSlice = createSlice({
  name: "burger",
  initialState,
  selectors,
  reducers: (create) => ({
    setBurger: create.reducer((state) => {
      state.isOpen = !state.isOpen;
    }),
    setMainMenu: create.reducer((state) => {
      state.mainBurgerMenu = !state.mainBurgerMenu;
    }),
  }),
});

export default burgerSlice.reducer;
export const { setBurger, setMainMenu } = burgerSlice.actions;
export const { burgerIsOpenSelector, mainBurgerMenuSelector } =
  burgerSlice.selectors;
