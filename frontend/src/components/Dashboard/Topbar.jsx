import React from "react";
import { useNavigate } from "react-router-dom";
import { UserCircle } from "lucide-react"; // Optional icon for style

const Topbar = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-20 h-16 w-full bg-dark-color text-white shadow-md px-6 flex items-center justify-between border-b border-gray-700">
      <h2
        className="text-2xl font-Fredoka font-semibold text-highlight hover:opacity-90 transition-opacity duration-200 cursor-pointer"
        onClick={() => navigate("/dashboard")}
      >
        Dashboard
      </h2>

      <div className="hidden md:flex items-center space-x-2 text-sm text-gray-200">
        <UserCircle className="w-5 h-5 text-highlight" />
        <span>Welcome back, Admin!</span>
      </div>
    </header>
  );
};

export default Topbar;
