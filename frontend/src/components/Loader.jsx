import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="relative w-24 h-24">
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-r-transparent border-l-medium-color border-b-dark-color animate-spin shadow-md" />

        {/* Middle Ring */}
        <div className="absolute inset-3 rounded-full border-4 border-b-transparent border-r-transparent border-l-dark-color border-t-medium-color animate-spin reverse-spin" />

        {/* Inner Circle */}
        <div className="absolute inset-6 bg-white rounded-full shadow-inner" />
      </div>
    </div>
  );
};

export default Loader;
