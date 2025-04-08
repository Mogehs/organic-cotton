import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Sleeve Stripe T-Shirt",
    price: "$78",
    originalPrice: "$130",
    rating: 4.8,
    image: "/newarrivels/3.png",
    off: "40%",
  },
  {
    id: 2,
    name: "Classic Polo Shirt ",
    price: "$180",
    originalPrice: "",
    rating: 4.6,
    image: "/newarrivels/6.png",
    off: "",
  },
  {
    id: 3,
    name: "Gradient Graphic T-shirt",
    price: "$145.5",
    originalPrice: "",
    rating: 4.3,
    image: "/newarrivels/7.png",
    off: "",
  },
  {
    id: 4,
    name: "COURAGE GRAPHIC T-SHIRT",
    price: "$145",
    originalPrice: "",
    rating: 4.3,
    image: "/newarrivels/17.webp",
    off: "",
  },
  {
    id: 5,
    name: "Black Striped T-Shirt",
    price: "$120",
    originalPrice: "",
    rating: 4.3,
    image: "/newarrivels/18.webp",
    off: "",
  },

 
];

export default function Tshirts() {
  return (
    <section className="mt-20 max-w-7xl mx-auto px-6 md:px-12">
     <div className="max-w-7xl mx-auto px-6 md:px-12 mb-14">
      <div className="flex items-center text-gray-600 text-sm font-medium">

        {/* Breadcrumb navigation */}
        <div className="flex items-center space-x-2 text-lg ">
          <span className="text-gray-500 ">Home</span>
          <FaChevronRight className="text-gray-400 text-xs" />
          <span className="text-gray-500">Shop</span>
          <FaChevronRight className="text-gray-400 text-xs" />
          <span className="text-black font-semibold">Tshirts</span>
        </div>
      </div>
    </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => {
          const skewAnimations = [
            "hover:skew-x-3",
            "hover:skew-y-3",
            "hover:-skew-y-6",
          ];

          const skewClass = skewAnimations[index % skewAnimations.length];

          return (
            <div
              key={product.id}
              className={`cursor-pointer rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-105 ${skewClass}`}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-lg md:text-xl font-bold text-[#09090b]">
                  {product.name}
                </h3>

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
