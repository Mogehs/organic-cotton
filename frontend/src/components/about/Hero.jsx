import React from 'react';

const Hero = () => {
  return (
    <div className="relative md:h-[100vh] h-[50vh] max-h-[80vh] flex justify-center items-center">
      <img
        src="/about/ch4.jpg"
        alt="Baby Picture"
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-4">
        <p className="text-[12px] px-8 py-4 border border-dark-color text-white bg-dark-color hover:text-white hover:bg-[#5a4732] transition duration-300 rounded-full cursor-pointer">
            About us
          </p>
        <h1 className="text-white text-md md:text-4xl font-bold leading-tight max-w-3xl mt-4 md:mt-10">
        Innovative global kids' solutions inspiring playful learning.
        </h1>
      </div>
    </div>
  );
};

export default Hero;