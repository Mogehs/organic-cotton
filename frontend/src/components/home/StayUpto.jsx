import React from 'react';

const StayUpto = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-8 bg-[#09090b] rounded-lg">
      {/* Top Row */}
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-bold text-white">STAY UPTO DATE ABOUT 
        </h2>
        <button className="bg-[#f0f0f0] text-black px-12 py-3 rounded-full hover:text-white hover:bg-[#09090b] transition">
        Enter Email Address
        </button>
      </div>

      {/* Bottom Row */}
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-bold text-white">OUR LATEST OFFERS</h2>
        <button className="bg-[#f0f0f0] text-black px-12 py-3 rounded-full hover:text-white hover:bg-[#09090b] transition">
        Subscribe to NewLetter
        </button>
      </div>
    </div>
  );
};

export default StayUpto;


