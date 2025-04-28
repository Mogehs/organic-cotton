import React, { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaBars, FaTimes } from "react-icons/fa";
import { useGetProductsQuery } from "../features/productsApi";
import { setCategory, setPrice } from "../../features/productsSlice";
const Sidebar = () => {
  const dispatch = useDispatch();
  const { data: products = [] } = useGetProductsQuery();
  const latestProducts = [...products]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 4);
  const [price, setPricing] = useState(20);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const categoryCounts = useMemo(() => {
    const counts = {};
    products.forEach((product) => {
      const cat = product.category || "Uncategorized";
      counts[cat] = (counts[cat] || 0) + 1;
    });
    return counts;
  }, [products]);

  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setPricing(value);
    dispatch(setPrice([14, value]));
  };

  const categories = useMemo(
    () => Object.keys(categoryCounts),
    [categoryCounts]
  );

  const allCategories = ["All", ...categories];

  return (
    <>
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-5 right-5 z-50 text-dark-color p-2 rounded transition md:hidden mt-1"
      >
        {isSidebarOpen ? (
          <FaTimes className="text-2xl" />
        ) : (
          <FaBars className="text-2xl" />
        )}
      </button>

      <div
        className={`z-40 p-4 overflow-y-auto h-full w-80 fixed md:static top-0 left-0 transform transition-transform duration-300 ease-in-out
          ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 
          ${
            isSidebarOpen ? "bg-white shadow-lg" : ""
          } md:bg-transparent md:shadow-none ml-[5px]`}
      >
        <div className="space-y-6 text-gray-500 ">
          <div className="border border-dark-color rounded p-4">
            <h2
              className="font-semibold text-2xl mb-3 border-b border-dark-color pb-2 text-dark-color"
              style={{ fontFamily: "Fredoka, sans-serif" }}
            >
              Categories
            </h2>
            <div className="space-y-2">
              {allCategories.map((cat, idx) => (
                <label
                  key={idx}
                  className="flex justify-between text-medium-color items-center"
                >
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      className="appearance-none w-4 h-4 border border-medium-color rounded-sm mr-2 checked:border-4 checked:border-dark-color checked:ring-1 checked:ring-medium-color"
                      onChange={() => dispatch(setCategory(cat))}
                    />
                    <span className="capitalize">{cat}</span>
                  </div>
                  <span className="text-sm">
                    ({categoryCounts[cat] || products?.length})
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="border border-dark-color rounded p-4">
            <h2
              className="font-semibold text-md mb-3 border-b border-dark-color pb-2 text-dark-color font-Fredoka text-2xl"
              style={{ fontFamily: "Fredoka, sans-serif" }}
            >
              Filter By Price
            </h2>
            <input
              type="range"
              min="10"
              max="1000"
              value={price}
              onChange={handlePriceChange}
              className="w-full accent-light-color mb-2"
            />
            <div className="flex justify-between text-sm mb-3">
              <span className="border border-dark-color px-2 py-1 rounded-md text-dark-color">
                $10.00
              </span>
              <span className="border border-dark-color px-2 py-1 rounded-md text-dark-color">
                ${price}.00
              </span>
            </div>
            <button className="bg-dark-color text-white w-full py-1.5 rounded-full text-sm font-medium hover:bg-medium-color">
              FILTER
            </button>
          </div>

          <div className="border border-dark-color rounded-xl p-4">
            <h2
              className="font-semibold text-md mb-3 border-b border-dark-color pb-2 text-black font-Fredoka text-2xl"
              style={{ fontFamily: "Fredoka, sans-serif" }}
            >
              Latest Products
            </h2>
            {latestProducts.map((product, index) => (
              <div key={index} className="mb-3 flex items-center space-x-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 object-cover rounded"
                />
                <div>
                  <p className="text-sm font-medium truncate text-dark-color">
                    {product.name}
                  </p>
                  <p className="text-sm font-semibold text-medium-color">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
