import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { TiTick } from "react-icons/ti";

const cards = [
  {
    title: 'sara gujjar',
    description: 'sara gujjar powerful JavaScript library for building user interfaces efficiently using components...',
  },
  {
    title: 'ali jutt',
    description: 'ali jutt combines images, typography, and color to communicate ideas visually...',
  },
  {
    title: 'ayesha khan',
    description: 'ayesha khan is an electronic device that processes data and performs tasks based on instructions...',
  },
  {
    title: 'haroon shah',
    description: 'haroon shah is the process of attracting and converting potential customers into leads...',
  },
];

const HappyCustomers = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 2, spacing: 30 }, // 2 cards for md and up
      },
    },
    slides: { perView: 1, spacing: 15 }, // 1 card for below md
  });

  return (
    <div className="relative max-w-6xl mx-auto px-4 py-10">
      {/* Heading + Arrows */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-3xl font-bold text-[#09090b]">OUR HAPPY CUSTOMERS</h2>
        <div className="flex gap-3">
          <button
            onClick={() => instanceRef.current?.prev()}
            className="bg-white p-2 cursor-pointer rounded-full shadow-md hover:bg-gray-100 transition"
          >
            <FaArrowLeft className="text-xl text-[#09090b]" />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="bg-white p-2 cursor-pointer rounded-full shadow-md hover:bg-gray-100 transition"
          >
            <FaArrowRight className="text-xl text-[#09090b]" />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div ref={sliderRef} className="keen-slider">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="keen-slider__slide bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center space-y-4 border border-gray-300"
          >
            {/* Stars */}
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-xl text-yellow-500" />
              ))}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold flex items-center justify-center gap-2">
              {card.title}
              <TiTick className="bg-green-700 text-white rounded-full p-1 text-lg" />
            </h3>

            {/* Description */}
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HappyCustomers;
