import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { TiTick } from "react-icons/ti";

const cards = [
  {
    title: 'sara gujjar',
    description: 'sara gujjar powerful JavaScript library for building user interfaces efficiently using components. It enables dynamic content rendering, promotes reusability, and improves development speed. With state management, hooks, and a virtual DOM, React simplifies front-end development.',
  },
  {
    title: 'ali jutt',
    description: 'ali jutt combines images, typography, and color to communicate ideas visually. Designers use tools like Adobe Photoshop and Illustrator to create logos, posters, and digital art. Good design balances aesthetics and functionality. It plays a crucial role in branding, marketing, and user experience across both digital and print media',
  },
  {
    title: 'ayesha khan',
    description: 'ayesha khan is an electronic device that processes data and performs tasks based on instructions. It consists of hardware components like the CPU, memory, and storage, along with software that manages operations. Computers are used in almost every field today, from education and healthcare to business, engineering, and communication.',
  },
  {
    title: 'haroon shah',
    description: 'haroon shah is the process of attracting and converting potential customers into leads who show interest in a product or service. It involves strategies like email marketing, content creation, SEO, and paid advertising. Effective lead generation boosts sales pipelines and helps businesses grow by reaching the right target audience.',
  },
];

const HappyCustomers = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 30,
    },
  });

  return (
    <div className="relative max-w-6xl mx-auto px-4 py-10">
      {/* Heading + Arrows Row */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-[#09090b]">OUR HAPPY CUSTOMERS</h2>
        <div className="flex gap-3">
          <button
            onClick={() => instanceRef.current?.prev()}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            <FaArrowLeft className="text-xl text-[#09090b]" />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
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
            className="keen-slider__slide bg-white rounded-2xl shadow-xl p-6 flex flex-col  items-center text-center space-y-4 border border-gray-300"
          >
            {/* Stars */}
            <div className="flex justify-center gap-1">
              <FaStar className="text-xl text-yellow-500" />
              <FaStar className="text-xl text-yellow-500" />
              <FaStar className="text-xl text-yellow-500" />
              <FaStar className="text-xl text-yellow-500" />
              <FaStar className="text-xl text-yellow-500" />
            </div>

            {/* Title with Icon */}
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
