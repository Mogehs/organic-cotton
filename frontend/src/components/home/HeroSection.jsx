import React from "react";
import { FaStar } from "react-icons/fa6";


export default function HeroSection() {
  return (
    <section className="bg-[#f0f0f0] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#09090b]">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-gray-600 font-base">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className="bg-black cursor-pointer text-white px-12 py-3 rounded-full font-medium hover:bg-gray-800 transition duration-300">
            Shop Now
          </button>

          <div className="flex space-x-6 pt-6 sm:ml-20">
            <div className="text-start">
              <p className="text-2xl font-bold text-[#09090b]">200+</p>
              <p className="text-gray-600 text-sm">International Brands</p>
            </div>
            <div className="text-start">
              <p className="text-2xl font-bold text-[#09090b]">2,000+</p>
              <p className="text-gray-600 text-sm">High-Quality Products</p>
            </div>
            <div className="text-start">
              <p className="text-2xl font-bold text-[#09090b]">30,000+</p>
              <p className="text-gray-600 text-sm">Happy Customers</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src="/home/hero.webp"
            alt="Fashion Models"
            className="w-full h-auto object-cover rounded-xl"
          />
          <div className="absolute top-0 text-4xl right-0 w-6 h-6 transform translate-x-2 -translate-y-2 spin-slow rounded-sm">
            <FaStar />
          </div>


        </div>
      </div>
    </section>
  );
}

