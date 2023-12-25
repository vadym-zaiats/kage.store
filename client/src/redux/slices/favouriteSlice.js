import { createSlice } from "@reduxjs/toolkit";
import { addToFavFunc } from "../middlewares/favourite";

const favouriteSlice = createSlice({
  name: "favourite",
  initialState: {
    favourite: [],
  },
  reducers: {
    toggleFav: (state, action) => {
      state.favourite = action.payload;
    },
  },
});

export default favouriteSlice.reducer;
export const { toggleFav } = favouriteSlice.actions;
