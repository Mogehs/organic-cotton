import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Et elit vivamus nisl",
    price: "$240",
    originalPrice: "$300",
    rating: 4.8,
    image: "/newarrivels/1.png",
    off: "20%",
  },
  {
    id: 2,
    name: "Integer tortor eros nas",
    price: "$142.3",
    originalPrice: "$170",
    rating: 4.6,
    image: "/newarrivels/6.png",
    off: "16%",
  },
  {
    id: 3,
    name: "Dictum dis vel platea",
    price: "$78",
    originalPrice: "$130",
    rating: 4.3,
    image: "/newarrivels/3.png",
    off: "40%",
  },
  {
    id: 4,
    name: "Wisi enim ad minim",
    price: "$114.5",
    originalPrice: "$229",
    rating: 4.3,
    image: "/newarrivels/4.png",
    off: "50%",
  },
  {
    id: 5,
    name: "Similique sunt in culpa",
    price: "$242.3",
    originalPrice: "$269",
    rating: 4.3,
    image: "/newarrivels/5.png",
    off: "10%",
  },
  {
    id: 6,
    name: "Piece Neon Striped Dress",
    price: "$62.4",
    originalPrice: "$78",
    rating: 4.3,
    image: "/newarrivels/11.png",
    off: "20%",
  },
  {
    id: 7,
    name: "Classic Pullover Toy",
    price: "$135",
    originalPrice: "$150",
    rating: 4.3,
    image: "/newarrivels/9.png",
    off: "10%",
  },
];

export default function OnSale() {
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
          <span className="text-black font-semibold">On Sale</span>
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
              className={`rounded-xl shadow cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-105 ${skewClass}`}
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
