import React from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="bg-[#f5f1e6] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-[#3e3a33] leading-tight tracking-wide font-serif">
            FIND CLOTHES THAT MATCH YOUR STYLE
          </h1>

          <p className="text-[#5a5445] text-base leading-relaxed font-light">
            Browse through our handpicked selection of timeless garments,
            crafted to express your personality and capture the charm of classic
            fashion.
          </p>

          <button className="bg-[#3e3a33] text-[#f5f1e6] px-10 py-3 rounded-full hover:bg-[#574f3d] transition duration-300 font-medium tracking-wider">
            <Link to="/shop"> Shop Now</Link>
          </button>

          {/* Stats */}
          <div className="flex space-x-6 pt-6 md:ml-10">
            <div className="text-start">
              <p className="text-2xl font-bold text-[#3e3a33]">200+</p>
              <p className="text-sm text-[#766f61]">International Brands</p>
            </div>
            <div className="text-start">
              <p className="text-2xl font-bold text-[#3e3a33]">2,000+</p>
              <p className="text-sm text-[#766f61]">Premium Products</p>
            </div>
            <div className="text-start">
              <p className="text-2xl font-bold text-[#3e3a33]">30,000+</p>
              <p className="text-sm text-[#766f61]">Happy Customers</p>
            </div>
          </div>
        </div>

        {/* Right Side: Image + Star Icon */}
        <div className="relative">
          <img
            src="/home/hero.png"
            alt="Vintage Fashion"
            className="w-full h-auto object-cover rounded-2xl border border-[#d3c7b3] shadow-lg"
          />
          <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 text-[#c2a76f] animate-spin-slow">
            <FaStar className="text-4xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
