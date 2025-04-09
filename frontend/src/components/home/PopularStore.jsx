import React from "react";

const products = [
  { id: 1, name: "Skywinder Toy", price: "$250.00", image: "/home/P1.jpg" },
  { id: 2, name: "Excavator Toy", price: "$122.00", image: "/home/P2.jpg" },
  { id: 3, name: "Dolls Trailer", price: "$320.00", image: "/home/P3.jpg" },
  { id: 4, name: "Cutie Girl Doll", price: "$150.00", image: "/home/P4.jpg" },
  { id: 5, name: "Genius Tray", price: "$100.00", image: "/home/P5.jpg" },
  { id: 6, name: "Doctor Doll", price: "$122.00", image: "/home/P6.jpg" },
  { id: 7, name: "Cartoon Kit", price: "$90.00", image: "/home/P7.jpg" },
  { id: 8, name: "Blocks Build Toy", price: "$322.00", image: "/home/P8.jpg" },
];

export default function PopularStore() {
  return (
    <section className="bg-[#fdf6f2] py-16 px-6">
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
        {products.map((product) => (
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
