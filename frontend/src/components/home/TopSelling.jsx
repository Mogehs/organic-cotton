import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function TopSelling() {
  const products = useSelector((state) => state.shop.filteredProducts);
  const navigate = useNavigate();
  const handleclick = (productId) => {
    navigate(`/cart/${productId}`);
  };
  return (
    <div className="border-t-2 border-gray-100 mt-20">
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-dark-color)] mb-14 text-center">
          TOP SELLING
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.slice(0, 4).map((product) => (
            <div
              key={product.id}
              onClick={() => {
                handleclick(product.id);
              }}
              className="bg-white border border-[var(--color-light-color)] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-contain bg-[var(--color-light-color)] p-4"
              />
              <div className="p-5 text-nowrap">
                <h3 className="text-xl md:text-xl font-bold text-[var(--color-dark-color)] mb-2">
                  {product.title}
                </h3>

                {/* <div className="flex items-center text-[var(--color-medium-color)] mb-2 gap-1 text-sm">
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
                </div> */}

                <div className="flex items-center flex-wrap gap-3">
                  <span className="text-xl md:text-2xl font-bold text-[var(--color-dark-color)]">
                    ${product.price}
                  </span>
                  <span className="line-through text-gray-500 text-lg">
                    ${product.originalPrice}
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
          <Link to="/shop">
            <button className="px-10 py-4 bg-[var(--color-dark-color)] text-white rounded-full font-medium hover:bg-[var(--color-medium-color)] transition duration-300 shadow hover:shadow-md">
              View all
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
