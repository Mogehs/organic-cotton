import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
const cards = [
  {
    title: "Isabella Hartman",
    description:
      "Working with this team was a fantastic experience. They delivered exactly what I needed, on time and with great attention to detail.",
  },
  {
    title: "Liam Bennett",
    description:
      "I was impressed by their professionalism and communication throughout the project. Highly recommend for anyone looking for quality work.",
  },
  {
    title: "Ava Sinclair",
    description:
      "They truly understood our vision and brought it to life beautifully. Every step of the process was smooth and efficient.",
  },
  {
    title: "Noah Fischer",
    description:
      "Exceptional service and support! Their dedication and technical expertise exceeded all expectations.",
  },
];

const HappyCustomers = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 24 },
      },
    },
    slides: { perView: 1, spacing: 16 },
  });

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-[#09090b] mb-4 md:mb-0">
          Our Happy Customers
        </h2>
        <div className="flex gap-3">
          <button
            onClick={() => instanceRef.current?.prev()}
            className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
          >
            <FaArrowLeft className="text-lg text-[#09090b]" />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
          >
            <FaArrowRight className="text-lg text-[#09090b]" />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div ref={sliderRef} className="keen-slider">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="keen-slider__slide bg-white rounded-2xl shadow-md p-6 flex flex-col gap-3 items-center text-center border border-gray-200 transition hover:shadow-xl"
          >
            {/* Stars */}
            <div className="flex justify-center gap-1 text-yellow-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className="text-base" />
              ))}
            </div>

            {/* Title */}
            <h3 className="text-lg md:text-xl font-semibold flex items-center gap-2 text-[#09090b]">
              {card.title}
              <TiTick className="bg-green-600 text-white rounded-full p-1 text-sm" />
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HappyCustomers;
