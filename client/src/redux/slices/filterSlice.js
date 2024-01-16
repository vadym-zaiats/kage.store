import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const selectors = {
  filterIsOpenSelector: (state) => state.isOpen,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  selectors,
  reducers: (create) => ({
    setFilter: create.reducer((state) => {
      state.isOpen = !state.isOpen;
    }),
  }),
});

export default filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
export const { filterIsOpenSelector } = filterSlice.selectors;
