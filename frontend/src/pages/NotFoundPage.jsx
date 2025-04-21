import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3ede3] text-[#4C3C2A] px-4">
      <div className="text-center border-2 border-[#4C3C2A] p-10 rounded-lg shadow-lg bg-[#fff8f0] max-w-xl w-full">
        <h1 className="text-7xl font-extrabold mb-2 font-[Cinzel]">404</h1>
        <h2 className="text-2xl font-semibold mb-4 font-[Playfair]">
          Page Not Found
        </h2>
        <p className="text-lg text-[#6c5844] mb-6 font-[Playfair]">
          Looks like this page has been lost to time. Let’s take you back home.
        </p>
        <Link
          to="/home"
          className="inline-block bg-[#4C3C2A] hover:bg-[#6d5843] text-white px-6 py-2 rounded transition font-semibold font-[Playfair]"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
