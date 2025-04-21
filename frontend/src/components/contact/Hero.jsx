import React from 'react';
import { MdCheckBox, MdHeadsetMic, MdStars } from "react-icons/md"

const Hero = () => {
  return (
    <div className="relative h-[60vh] md:h-[90vh] max-h-[600px] flex justify-center items-center z-10">
      <img
        src="/contact/bg.jpg"
        alt="Visa Consultancy & Travel Solutions"
        className="w-full h-full "
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4 text-center">
        <div className="text-white max-w-4xl space-y-4">
          <p className="border-dark-color text-white bg-dark-color hover:text-white hover:bg-[#5a4732] transition duration-300 rounded-full font-light uppercase inline-block px-4 py-2 cursor-pointer">
            Say Hello to New Destinations
          </p>
          <h1 className="text-xl md:text-5xl font-bold leading-tight">
            Ready to Explore? <br /> Contact Us!
          </h1>
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base font-light pt-4">
            <span className="flex items-center gap-2">
              <MdCheckBox className="text-lg" />
              Trusted Partner
            </span>
            <span className="flex items-center gap-2">
              <MdHeadsetMic className="text-lg" />
              24/7 Support
            </span>
            <span className="flex items-center gap-2">
              <MdStars className="text-lg" />
              Best Price Guarantee
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
