import React from "react";

const products = [
  {
    id: 1,
    image: "/order/P1.jpg",
    name: "Toy Car",
    quantity: 2,
    price: "$15",
    status: "Pending",
  },
  {
    id: 2,
    image: "/order/p2.jpg",
    name: "Drawing Kit",
    quantity: 1,
    price: "$25",
    status: "Delivered",
  },
  {
    id: 3,
    image: "/order/P3.jpg",
    name: "Lego Set",
    quantity: 3,
    price: "$45",
    status: "Canceled",
  },
];

const statusColors = {
  Pending: "bg-yellow-100 text-yellow-800",
  Delivered: "bg-green-100 text-green-800",
  Canceled: "bg-red-100 text-red-800",
};

export default function ProductOrders() {
  const handleTrackOrder = (productName) => {
    alert(`Tracking order for: ${productName}`);
  };

  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-dark-color text-center">
        Order Product List
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg text-sm sm:text-base">
          <thead>
            <tr className="bg-medium-color text-center text-white text-nowrap">
              <th className="p-2 sm:p-3">Image</th>
              <th className="p-2 sm:p-3">Product Name</th>
              <th className="p-2 sm:p-3">Quantity</th>
              <th className="p-2 sm:p-3">Price</th>
              <th className="p-2 sm:p-3">Status</th>
              <th className="p-2 sm:p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t border-gray-200 text-center text-nowrap">
                <td className="p-2 sm:p-3 flex justify-center items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover"
                  />
                </td>

                <td className="p-2 sm:p-3 font-medium">{product.name}</td>
                <td className="p-2 sm:p-3">{product.quantity}</td>
                <td className="p-2 sm:p-3">{product.price}</td>
                <td className="p-2 sm:p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs sm:text-sm font-medium ${statusColors[product.status]}`}
                  >
                    {product.status}
                  </span>
                </td>
                <td className="p-2 sm:p-3">
                  {product.status === "Pending" && (
                    <button
                      onClick={() => handleTrackOrder(product.name)}
                      className="bg-dark-color text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-[#5a4732] text-xs sm:text-sm"
                    >
                      Cancel Order
                    </button>
                  )}
                  {product.status === "Delivered" && (
                    <span className="text-green-600 font-semibold text-xs sm:text-sm">
                      Your order is delivered
                    </span>
                  )}
                  {product.status === "Canceled" && (
                    <span className="text-red-600 font-semibold text-xs sm:text-sm">
                      Your order is canceled
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
