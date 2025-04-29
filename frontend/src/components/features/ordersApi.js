import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: "include",
  }),
  tagTypes: ["Orders", "MyOrders", "Order"],
  endpoints: (builder) => ({
    // POST: Create new order
    createOrder: builder.mutation({
      query: (orderData) => ({
        url: "/orders",
        method: "POST",
        body: orderData,
      }),
      invalidatesTags: ["Orders", "MyOrders"],
    }),

    // GET: All orders (admin)
    getAllOrders: builder.query({
      query: () => "/orders",
      providesTags: ["Orders"],
    }),

    // GET: Orders of logged-in user
    getMyOrders: builder.query({
      query: () => "/orders/my-orders",
      providesTags: ["MyOrders"],
    }),

    // GET: Single order by ID
    getOrderById: builder.query({
      query: (id) => `/orders/${id}`,
      providesTags: (result, error, id) => [{ type: "Order", id }],
    }),

    // PUT: Update order status (admin)
    updateOrderStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/orders/${id}/status`,
        method: "PUT",
        body: { status },
      }),
      invalidatesTags: (result, error, { id }) => [
        "Orders",
        { type: "Order", id },
      ],
    }),

    // PUT: Mark order as paid
    markOrderAsPaid: builder.mutation({
      query: (paymentData) => ({
        url: "/orders/mark-paid",
        method: "PUT",
        body: paymentData,
      }),
      invalidatesTags: ["Orders", "MyOrders"],
    }),
  }),
});

// Hooks
export const {
  useCreateOrderMutation,
  useGetAllOrdersQuery,
  useGetMyOrdersQuery,
  useGetOrderByIdQuery,
  useUpdateOrderStatusMutation,
  useMarkOrderAsPaidMutation,
} = orderApi;
