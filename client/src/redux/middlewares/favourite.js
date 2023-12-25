import { createAsyncThunk } from "@reduxjs/toolkit";
import { toggleFav } from "../slices/favouriteSlice";

export const addToFavFunc = createAsyncThunk(
  "favourite/addToFavFunc",
  (
    {
      name,
      currentPrice,
      imageUrls,
      itemNo,
      quantity,
      categories,
      date,
      hot,
      sale,
    },
    { dispatch, rejectWithValue, getState }
  ) => {
    let favourite = [...getState().favourite.favourite];
    for (let product of favourite) {
      if (product.itemNo === itemNo) {
        favourite = favourite.filter((product) => product.itemNo !== itemNo);

        return dispatch(toggleFav(favourite));
      }
    }
    favourite.push({
      name,
      currentPrice,
      imageUrls,
      itemNo,
      quantity,
      categories,
      date,
      hot,
      sale,
    });
    return dispatch(toggleFav(favourite));
  }
);
