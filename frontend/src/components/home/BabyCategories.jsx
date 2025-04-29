import React from "react";

const cardData = [
  { title: "Bath Toys", image: "/home/1.jpg" },
  { title: "Figures Play", image: "/home/2.jpg" },
  { title: "Learning", image: "/home/3.jpg" },
  { title: "Musical", image: "/home/4.jpg" },
];

const BabyCategories = () => {
  return (
    <section className="py-24 px-4 bg-[#fdf6f2]">
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-dark-color)] text-center uppercase mb-12">
        Categories
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="relative h-52 md:h-64 rounded-3xl shadow-md overflow-hidden group transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            style={{
              backgroundImage: `url(${card.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300 flex items-center justify-center">
              <h3 className="text-white text-xl md:text-2xl font-semibold tracking-wide drop-shadow-md">
                {card.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BabyCategories;
