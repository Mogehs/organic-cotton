// components/Loader.jsx
import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="relative w-20 h-20">
        {/* Outer Spinner - Vintage Colors */}
        <div className="absolute inset-0 rounded-full border-[6px] border-t-transparent border-l-transparent border-b-[#8B5E3C] animate-spin" />

        {/* Inner Circle - Matches Background */}
        <div className="absolute inset-[6px] bg-white rounded-full" />
      </div>
    </div>
  );
};

export default Loader;
