import React from "react";
import { FaStar } from "react-icons/fa6";

const products = [
  {
    id: 1,
    name: "Est luctus facilisi himen",
    price: "$240",
    originalPrice: "$300",
    rating: 4.8,
    image: "/newarrivels/12.webp",
    off: "",
  },
  {
    id: 2,
    name: "Integer tortor eros nas",
    price: "$144.5",
    originalPrice: "$170",
    rating: 4.6,
    image: "/newarrivels/9.png",
    off: "40%",
  },
  {
    id: 3,
    name: "Similique sunt in culpa",
    price: "$78",
    originalPrice: "$130",
    rating: 4.3,
    image: "/newarrivels/10.png",
    off: "60%",
  },
  {
    id: 4,
    name: "Piece Neon Striped Dress",
    price: "$114.5",
    originalPrice: "$229",
    rating: 4.5,
    image: "/newarrivels/11.png",
    off: "80%",
  },
];

export default function TopSelling() {
  return (
    <div className="border-t-2 border-gray-100 mt-20">
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-dark-color)] mb-14 text-center">
          TOP SELLING
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-[var(--color-light-color)] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-contain bg-[var(--color-light-color)] p-4"
              />
              <div className="p-5">
                <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-dark-color)] mb-2">
                  {product.name}
                </h3>

                <div className="flex items-center text-[var(--color-medium-color)] mb-2 gap-1 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${
                        i < Math.round(product.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2">{product.rating}</span>
                </div>

                <div className="flex items-center flex-wrap gap-3">
                  <span className="text-xl md:text-2xl font-bold text-[var(--color-dark-color)]">
                    {product.price}
                  </span>
                  <span className="line-through text-gray-500 text-lg">
                    {product.originalPrice}
                  </span>
                  {product.off && (
                    <span className="text-sm bg-[#ffeded] text-[#ff4b4b] px-3 py-1 rounded-full font-medium">
                      {product.off} OFF
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <button className="px-10 py-4 bg-[var(--color-dark-color)] text-white rounded-full font-medium hover:bg-[var(--color-medium-color)] transition duration-300 shadow hover:shadow-md">
            View all
          </button>
        </div>
      </section>
    </div>
  );
}
