import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "api/products",
      providesTags: () => [{ type: "Products" }],
    }),
    getCurrentProduct: builder.query({
      query: (itemNo) => `api/products/${itemNo}`,
      providesTags: () => [{ type: "Products" }],
    }),
  }),
});

export const { useGetProductsQuery, useGetCurrentProductQuery } = productsApi;
