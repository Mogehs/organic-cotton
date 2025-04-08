import React from 'react';

const DressStyle = () => {
  return (
    <div className="p-12 max-w-7xl mx-auto bg-[#f0f0f0] rounded-[4%] my-8">
        <h1 className='text-2xl md:text-4xl font-bold text-[#09090b]'>BROWSE BY DRESS STYLE</h1>
        <div className='md:px-20 flex flex-col justify-center items-center gap-6 mt-8'>
      {/* Top Section: Two Images Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className='md:col-span-2 h-full w-full border border-gray-300 rounded-2xl'>
        <img
          src="/home/d1.png"
          alt="Left Side"
          className="rounded-2xl w-full h-full shadow-lg object-cover "
        />

        </div>
        <div className='md:col-span-3 h-full border border-gray-300 rounded-2xl'>
        <img
          src="/home/d2.png"
          alt="Right Side"
          className="rounded-2xl shadow-lg object-cover h-full"
        />

        </div>
      </div>

      {/* Bottom Section: Text Left, Image Right */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
        <div className="md:col-span-3 h-full border border-gray-300 rounded-2xl">
        <img
          src="/home/d3.png"
          alt="Left Side"
          className="h-full rounded-2xl shadow-lg object-cover"
        />
        </div>
        <div className='md:col-span-2 h-full border border-gray-300 rounded-2xl'>
        <img
          src="/home/d4.png"
          alt="Bottom Right Image"
          className="rounded-2xl shadow-lg object-cover h-full"
        />

        </div>
      </div>

        </div>
    </div>
  );
};

export default DressStyle;
