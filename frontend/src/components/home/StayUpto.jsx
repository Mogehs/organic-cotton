import React from 'react';

const StayUpto = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-8 bg-[#09090b] rounded-lg">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center md:text-left">
          STAY UPTO DATE ABOUT
        </h2>
        <button className="bg-[#f0f0f0] cursor-pointer text-black px-8 py-3 rounded-full hover:text-white hover:bg-[#09090b] transition w-full md:w-auto">
          Enter Email Address
        </button>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center md:text-left">
          OUR LATEST OFFERS
        </h2>
        <button className="bg-[#f0f0f0] cursor-pointer text-black px-8 py-3 rounded-full hover:text-white hover:bg-[#09090b] transition w-full md:w-auto">
          Subscribe to Newsletter
        </button>
      </div>
    </div>
  );
};

export default StayUpto;
