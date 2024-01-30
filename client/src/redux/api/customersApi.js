import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const customerApi = createApi({
  reducerPath: "customerApi",
  tagTypes: ["Customers"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/",
  }),
  endpoints: (builder) => ({
    createCustomer: builder.mutation({
      query: ({
        firstName,
        lastName,
        login,
        email,
        password,
        telephone,
        ...rest
      }) => ({
        url: "api/customers/",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          login,
          email,
          password,
          telephone,
          ...rest,
        }),
      }),
      invalidatesTags: ["Customers"],
    }),
    // deleteProduct: builder.mutation<IProduct[], any>({
    //   query: (id) => ({
    //     url: `api/products/${id}`,
    //     method: "DELETE"
    //   }),
    //   invalidatesTags: ["Products"],
    // }),
  }),
});

export const { useCreateCustomerMutation } = customerApi;
