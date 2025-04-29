import React from "react";
import { useGetMyOrdersQuery } from "../components/features/ordersApi";

const statusColors = {
  PreparingPackage: "bg-yellow-100 text-yellow-800",
  ReadyToShip: "bg-red-100 text-red-800",
  Delivered: "bg-green-100 text-green-800",
};

export default function ProductOrders() {
  const { data: orders = [], isLoading, isError } = useGetMyOrdersQuery();

  console.log(orders);

  if (isLoading) {
    return (
      <div className="text-center py-16 text-lg font-medium text-dark-color animate-pulse">
        Loading your orders...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-16 text-lg font-medium text-red-500">
        Failed to load your orders. Please try again later.
      </div>
    );
  }

  const hasOrders =
    orders.length > 0 && orders.some((order) => order.items.length > 0);

  if (!hasOrders) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 h-20 text-gray-400 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 3h18v4H3V3zm0 6h18v12H3V9zm3 3h3m4 0h4"
          />
        </svg>
        <h3 className="text-xl font-semibold text-dark-color mb-2">
          No Orders Available
        </h3>
        <p className="text-gray-500 max-w-sm">
          Once you place an order, it will appear here. Start shopping now!
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-dark-color text-center">
        Order Product List
      </h2>
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full bg-white border border-gray-200 text-sm sm:text-base">
          <thead>
            <tr className="bg-medium-color text-white text-center text-nowrap">
              <th className="p-2 sm:p-3">Image</th>
              <th className="p-2 sm:p-3">Product Name</th>
              <th className="p-2 sm:p-3">Quantity</th>
              <th className="p-2 sm:p-3">Price</th>
              <th className="p-2 sm:p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) =>
              order.items.map((item, index) => (
                <tr
                  key={`${order._id}-${index}`}
                  className="border-t border-gray-200 text-center text-nowrap hover:bg-gray-50 transition"
                >
                  <td className="p-2 sm:p-3 flex justify-center items-center">
                    <img
                      src={item.product?.image || "/placeholder.jpg"}
                      alt={item.product?.name || "Product"}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover"
                    />
                  </td>
                  <td className="p-2 sm:p-3 font-medium">
                    {item.product?.name || "Unknown"}
                  </td>
                  <td className="p-2 sm:p-3">{item.quantity}</td>
                  <td className="p-2 sm:p-3">
                    ${order.totalPrice.toFixed(2) || "N/A"}
                  </td>
                  <td className="p-2 sm:p-3 cursor-pointer">
                    <span
                      className={`px-2 py-1 rounded-full text-xs sm:text-sm font-medium ${
                        order.status == "Preparing Package"
                          ? statusColors["PreparingPackage"]
                          : order.status == "Ready To Ship"
                          ? statusColors["ReadyToShip"]
                          : statusColors["Delivered"]
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
