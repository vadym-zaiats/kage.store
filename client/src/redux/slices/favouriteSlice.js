import { createSlice } from "@reduxjs/toolkit";
import { addToFavFunc } from "../middlewares/favourite";

const initialState = {
  favourite: [],
};
const selectors = {
  favouriteSelector: (state) => state.favourite,
};

const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  selectors,
  extraReducers: (builder) => {
    builder.addCase(addToFavFunc.fulfilled, (state, action) => {
      state.favourite = action.payload;
    });
    builder.addCase(addToFavFunc.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export default favouriteSlice.reducer;
export const { favouriteSelector } = favouriteSlice.selectors;
