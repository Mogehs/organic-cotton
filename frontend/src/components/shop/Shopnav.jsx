import React, { useState } from "react";
import ProductGrid from "./ProductGrid";
import { ChevronDown, Menu } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setSortOption } from "../../features/shop/shopSlice";
import Sidebar from "./Sidebar";
import { setSideBar } from "../../features/productsSlice";

const Shopnav = () => {
  const sideBar = useSelector((state) => state.product.sideBar);
  const [showSort, setShowSort] = useState(false);
  const dispatch = useDispatch();
  const sortOption = useSelector((state) => state.shop.sortOption);

  const sortOptions = [
    "Sort by latest",
    "Sort by price: low to high",
    "Sort by price: high to low",
  ];

  return (
    <div className="w-full min-h-screen text-light-color flex justify-center items-start py-10 px-4">
      <div className="w-full max-w-7xl">
        <div className="flex justify-between items-center border border-medium-color text-dark-color px-6 py-3 mb-8 rounded shadow-md">
          <button
            onClick={() => {
              dispatch(setSideBar(!sideBar));
            }}
            className="text-sm flex items-center gap-1 border-r border-gray-300 pr-4"
          >
            {sideBar ? "Hide Sidebar" : "Show Sidebar"} <Menu size={14} />
          </button>

          <div className="relative text-sm px-4 bg-white rounded cursor-pointer">
            <button
              onClick={() => setShowSort(!showSort)}
              className="flex items-center gap-1"
            >
              {sortOption} <ChevronDown className="w-4 h-4" />
            </button>
            {showSort && (
              <ul className="absolute -left-20 top-10 w-52 bg-white shadow-lg z-10 rounded overflow-hidden">
                {sortOptions.map((option, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100"
                    onClick={() => {
                      dispatch(setSortOption(option));
                      setShowSort(false);
                    }}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="flex gap-6">
          {sideBar && <Sidebar />}
          <ProductGrid />
        </div>
      </div>
    </div>
  );
};

export default Shopnav;
