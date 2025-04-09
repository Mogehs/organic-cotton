import React from "react";

const DressStyle = () => {
  return (
    <div className="bg-[#f0f0f0] p-10 md:p-16 rounded-[4%] max-w-7xl mx-auto my-12">
      {/* Heading */}
      <h1 className="text-2xl md:text-4xl font-bold text-[#09090b] text-center mb-10">
        BROWSE BY DRESS STYLE
      </h1>

      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-10">
        <div className="md:col-span-2">
          <img
            src="/home/d1.png"
            alt="Dress Style 1"
            className="w-full h-full object-cover rounded-2xl shadow-md"
          />
        </div>
        <div className="md:col-span-3">
          <img
            src="/home/d2.png"
            alt="Dress Style 2"
            className="w-full h-full object-cover rounded-2xl shadow-md"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="md:col-span-3">
          <img
            src="/home/d3.png"
            alt="Dress Style 3"
            className="w-full h-full object-cover rounded-2xl shadow-md"
          />
        </div>
        <div className="md:col-span-2">
          <img
            src="/home/d4.png"
            alt="Dress Style 4"
            className="w-full h-full object-cover rounded-2xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default DressStyle;
