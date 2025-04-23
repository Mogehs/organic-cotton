import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_API_URL;

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: "include",
  }),
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    // POST: Add product to cart
    addToCart: builder.mutation({
      query: (productData) => ({
        url: "/cart/add",
        method: "POST",
        body: productData,
      }),
      invalidatesTags: ["Cart"],
    }),

    // GET: Get current cart
    getCart: builder.query({
      query: () => "/cart",
      providesTags: ["Cart"],
    }),

    // DELETE: Remove product from cart
    removeFromCart: builder.mutation({
      query: (productId) => ({
        url: `/cart/remove/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),

    // DELETE: Clear cart
    clearCart: builder.mutation({
      query: () => ({
        url: "/cart/clear",
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const {
  useAddToCartMutation,
  useGetCartQuery,
  useRemoveFromCartMutation,
  useClearCartMutation,
} = cartApi;
