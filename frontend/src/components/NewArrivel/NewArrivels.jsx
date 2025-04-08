import React from "react";
import { FaStar } from "react-icons/fa6";

const products = [
  {
    id: 1,
    name: "Casual Green Bomber Jacket",
    price: "$240",
    originalPrice: "$300",
    rating: 4.8,
    image: "/newarrivels/1.png",
    off: "10%",
  },
  {
    id: 2,
    name: "Gray Slim-Fit Jogger Pants",
    price: "$144.5",
    originalPrice: "$170",
    rating: 4.6,
    image: "/newarrivels/2.png",
    off: "20%",
  },
  {
    id: 3,
    name: "Sleeve Stripe T-Shirt",
    price: "$78",
    originalPrice: "$130",
    rating: 4.3,
    image: "/newarrivels/3.png",
    off: "27%",
  },
  {
    id: 4,
    name: "Vertical Striped Shirt",
    price: "$114.5",
    originalPrice: "$229",
    rating: 4.5,
    image: "/newarrivels/4.png",
    off: "33%",
  },
  {
    id: 5,
    name: "Beige Slim-Fit Jogger Pants",
    price: "$114.5",
    originalPrice: "$229",
    rating: 4.5,
    image: "/newarrivels/5.png",
    off: "40%",
  },
  {
    id: 6,
    name: "Classic Polo Shirt ",
    price: "$114.5",
    originalPrice: "$229",
    rating: 4.5,
    image: "/newarrivels/6.png",
  },
  {
    id: 7,
    name: "Gradient Graphic T-shirt",
    price: "$114.5",
    originalPrice: "$229",
    rating: 4.5,
    image: "/newarrivels/7.png",
  },
  {
    id: 8,
    name: "Checkered Shirt",
    price: "$114.5",
    originalPrice: "$229",
    rating: 4.5,
    image: "/newarrivels/8.png",
  },
  {
    id: 9,
    name: "Black Athletic Jogger Pants with Side Stripes",
    price: "$114.5",
    originalPrice: "$229",
    rating: 4.5,
    image: "/newarrivels/9.jpg",
  },
  {
    id: 10,
    name: "Classic Black Long Sleeve Button-Down Shirt",
    price: "$114.5",
    originalPrice: "$229",
    rating: 4.5,
    image: "/newarrivels/10.jpg",
  },
  {
    id: 11,
    name: "Skinny Fit Jeans",
    price: "$114.5",
    originalPrice: "$229",
    rating: 4.5,
    image: "/newarrivels/11.png",
  },
];

export default function NewArrivels() {
  return (
    <section className="mt-20 max-w-7xl mx-auto px-6 md:px-12">
      <h2 className="text-2xl md:text-4xl font-bold text-[#09090b] mb-10">
        NEW ARRIVALS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => {
          const skewAnimations = [
            "hover:skew-x-3",
            "hover:-skew-x-3",
            "hover:skew-y-3",
            "hover:-skew-y-3",
            "hover:skew-x-6",
            "hover:-skew-x-6",
            "hover:skew-y-6",
            "hover:-skew-y-6",
          ];

          const skewClass = skewAnimations[index % skewAnimations.length];

          return (
            <div
              key={product.id}
              className={`bg-white rounded-xl cursor-pointer overflow-hidden shadow hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-105 ${skewClass}`}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-lg md:text-xl font-bold text-[#09090b]">
                  {product.name}
                </h3>

                <div className="flex items-center text-yellow-500 text-sm gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
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

      <div className="flex justify-center mt-10">
        <button className="px-10 py-4 bg-gray-200 text-gray-800 rounded-full hover:bg-[#09090b] hover:text-white transition">
          View all
        </button>
      </div>
    </section>
  );
}
