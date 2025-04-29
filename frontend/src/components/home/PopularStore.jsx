import React from "react";
import { useGetProductsQuery } from "../features/productsApi";

export default function PopularStore() {
  const { data: products } = useGetProductsQuery();
  return (
    <section className="bg-[#fdf6f2] py-24 px-6">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-sm md:text-lg font-semibold text-[#ff5b5b] uppercase mb-2 tracking-widest">
          Shop Juno Toys & Games
        </h2>
        <h1 className="text-3xl md:text-5xl font-bold text-[#09090b]">
          Popular in Store
        </h1>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {products?.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 cursor-pointer"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-[#09090b] mb-1">
                {product.name}
              </h3>
              <p className="text-md font-semibold text-gray-700">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
