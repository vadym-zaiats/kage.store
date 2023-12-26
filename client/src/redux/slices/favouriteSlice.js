import { createSlice } from "@reduxjs/toolkit";
import { addToFavFunc } from "../middlewares/favourite";

const favouriteSlice = createSlice({
  name: "favourite",
  initialState: {
    favourite: [],
  },
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
export const { toggleFav } = favouriteSlice.actions;
