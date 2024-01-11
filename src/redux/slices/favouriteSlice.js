import { createSlice } from "@reduxjs/toolkit";
import { addToFavFunc } from "../middlewares/favourite";

const initialState = {
  favourite: [],
  inProcess: false,
};
const selectors = {
  favouriteSelector: (state) => state.favourite,
};

const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  selectors,
  extraReducers: (builder) => {
    builder.addCase(addToFavFunc.pending, (state) => {
      state.inProcess = true;
    });
    builder.addCase(addToFavFunc.fulfilled, (state, action) => {
      state.favourite = action.payload;
      state.inProcess = false;
    });
    builder.addCase(addToFavFunc.rejected, (state, action) => {
      state.error = action.payload;
      state.inProcess = false;
    });
  },
});

export default favouriteSlice.reducer;
export const { favouriteSelector } = favouriteSlice.selectors;
