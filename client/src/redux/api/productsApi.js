import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

function isHydrateAction(action) {
  return action.type === HYDRATE;
}

export const productsApi = createApi({
  reducerPath: "productsApi",
  tagTypes: ["Products"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/",
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (isHydrateAction(action)) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "api/products",
      providesTags: () => [{ type: "Products" }],
    }),
    // createProduct: builder.mutation({
    //   query: (product) => ({
    //     url: 'api/products/',
    //     method: "POST",
    //     body: product
    //   }),
    //   invalidatesTags: ["Products"],
    // }),
    // deleteProduct: builder.mutation<IProduct[], any>({
    //   query: (id) => ({
    //     url: `api/products/${id}`,
    //     method: "DELETE"
    //   }),
    //   invalidatesTags: ["Products"],
    // }),
  }),
});

export const { useGetProductsQuery } = productsApi;
