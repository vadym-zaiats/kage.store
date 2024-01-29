import { createAsyncThunk } from "@reduxjs/toolkit";

export const postOrder = createAsyncThunk(
  "order/postOrder",
  async (
    { products, email, phone: mobile, letterSubject, letterHtml },
    { dispatch, rejectWithValue }
  ) => {
    console.log(email, mobile, letterSubject, letterHtml);
    try {
      const res = await fetch("http://localhost:4000/api/orders/", {
        method: "POST",
        // headers: { Token: token },
        body: JSON.stringify({
          products,
          email,
          mobile,
          letterSubject,
          letterHtml,
        }),
      });
      if (!res.ok) {
        throw new Error("Server error");
      }
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
