import React from 'react';

const cardData = [
  { title: "Bath Toys", image: "/home/1.jpg" },
  { title: "Figures Play", image: "/home/2.jpg" },
  { title: "Learning", image: "/home/3.jpg" },
  { title: "Muscial", image: "/home/4.jpg" },
];

const BabyCategories = () => {
  return (
    <section className="text-center py-10 bg-gray-100 mt-7">
      {/* Main Title */}
      <h1 className="text-2xl font-bold text-gray-700 mb-10 uppercase ">
        Categories
      </h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 max-w-6xl mx-auto cursor-pointer">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="relative h-48 md:h-56  rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-2xl hover:scale-105"
            style={{
              backgroundImage: `url(${card.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0  flex items-center justify-center">
              <h3 className="text-white text-lg font-semibold">{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BabyCategories;
