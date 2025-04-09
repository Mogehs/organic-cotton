import React from "react";

const StayUpto = () => {
  return (
    <div className="bg-[#09090b] py-14 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* First Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center md:text-left">
            STAY UPTO DATE ABOUT
          </h2>
          <div className="w-full md:w-auto flex items-center gap-2 bg-[#f0f0f0] rounded-full px-4 py-2 shadow-md">
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-transparent text-black placeholder-gray-500 text-sm px-2 py-2 focus:outline-none w-full"
            />
            <button className="bg-black text-white text-sm px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all">
              Submit
            </button>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center md:text-left">
            OUR LATEST OFFERS
          </h2>
          <button className="bg-[#f0f0f0] text-black px-8 py-3 rounded-full hover:bg-transparent hover:text-white hover:border-white border border-transparent transition-all w-full md:w-auto">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  );
};

export default StayUpto;
