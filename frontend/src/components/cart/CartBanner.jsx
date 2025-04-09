import React from 'react';

const CartBanner = () => {
  return (
    <div
      className="relative w-full h-64 bg-cover bg-center"
      style={{
        backgroundImage: "url('/banner/img2.png')", 
      }}
    >
      <div className="absolute inset-0  bg-opacity-50 flex justify-center items-center">
        <h1 className="text-dark-color text-4xl font-bold transform transition-transform duration-500 ease-in-out hover:scale-110 hover:text-yellow-400 font-Fredoka">
          Cart
        </h1>
      </div>
    </div>
  );
};

export default CartBanner;
