import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Est luctus facilisi himen",
    price: "$62.4",
    originalPrice: "$78",
    rating: 4.8,
    image: "/newarrivels/7.png",
    off: "20%",
  },
];

export default function Short() {
  return (
    <section className="mt-20 max-w-7xl mx-auto px-6 md:px-12">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-14">
        <div className="flex items-center text-gray-600 text-sm font-medium">
          <div className="flex items-center space-x-2 text-lg ">
            <span className="text-gray-500">Home</span>
            <FaChevronRight className="text-gray-400 text-xs" />
            <span className="text-gray-500">Shop</span>
            <FaChevronRight className="text-gray-400 text-xs" />
            <span className="text-black font-semibold">Short</span>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-8 justify-items-center">
        {products.map((product, index) => {
          const skewAnimations = [
            "hover:skew-y-3",
          ];
          const skewClass = skewAnimations[index % skewAnimations.length];

          return (
            <div
              key={product.id}
              className={`cursor-pointer shadow rounded-xl overflow-hidden  hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-105 ${skewClass}`}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-lg md:text-xl font-bold text-[#09090b]">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center text-yellow-500 text-lg gap-1">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < Math.floor(product.rating)
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }
                    />
                  ))}
                  <span className="text-[#09090b] ml-2">{product.rating}</span>
                </div>

                {/* Price Section */}
                <div className="flex items-center flex-wrap gap-2">
                  <span className="text-xl font-bold text-[#09090b]">
                    {product.price}
                  </span>
                  <span className="line-through text-gray-500">
                    {product.originalPrice}
                  </span>
                  {product.off && (
                    <span className="text-sm bg-[#ffeaea] px-2 py-1 rounded-full text-[#ff5b5b]">
                      {product.off}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
