import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_API_URL;

export const stripeApi = createApi({
  reducerPath: "stripeApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    createCheckoutSession: builder.mutation({
      query: (sessionData) => ({
        url: "/stripe/create-checkout-session",
        method: "POST",
        body: sessionData,
      }),
    }),
  }),
});

export const { useCreateCheckoutSessionMutation } = stripeApi;
