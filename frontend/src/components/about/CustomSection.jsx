import React from "react";
import { TiTick } from "react-icons/ti";

const CustomSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-start gap-10 px-12 py-24">
      {/* Left Side */}
      <div className="flex-1 mt-8">
        <button className="text-sm bg-dark-color text-white hover:hover:bg-[#5a4732] rounded-full font-light uppercase inline-block px-4 py-2 cursor-pointer">
          Smart Itinerary
        </button>
        <h2 className="text-2xl md:text-3xl text-[#0c1c26] font-bold mt-5">
          Delivering Smart, Personalized Fun for Every Curious Child
        </h2>
        <p className="text-gray-800 text-xl mt-3 md:mt-6">
          Our innovative kids’ platform leverages cutting-edge technology,
          real-time data, and intelligent automation to deliver
          hyper-personalized shopping experiences tailored to every child’s
          unique preferences and developmental needs. From curated product
          recommendations to seamless navigation, we make discovering the
          perfect items delightful and stress-free for parents.
        </p>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex flex-col items-center">
        <img
          src="./about/about.avif"
          alt="Image"
          className="mb-4 rounded-2xl shadow hover:scale-103 transition-transform duration-300"
        />
        <div className="flex flex-wrap justify-start gap-4 md:gap-8 text-xl text-[#0c1c26]">
          {["Little Explorers'", "Journey Engine", "Curiosity"].map(
            (item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="border border-dark-color p-1 rounded-full text-dark-color text-lg">
                  <TiTick />
                </div>
                <span>{item}</span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default CustomSection;
