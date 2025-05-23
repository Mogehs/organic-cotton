import React from "react";
import Slider from "react-slick";
import { FaRegEye } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetProductsQuery } from "../features/productsApi";

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute top-1/2 -left-5 transform -translate-y-1/2 z-10 bg-light-color border shadow p-2 rounded-full cursor-pointer hover:bg-gray-100"
  >
    <MdChevronLeft className="text-2xl text-dark-color" />
  </div>
);

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute top-1/2 -right-5 transform -translate-y-1/2 z-10 bg-light-color border shadow p-2 rounded-full cursor-pointer hover:bg-gray-100"
  >
    <MdChevronRight className="text-2xl text-dark-color" />
  </div>
);

const ProductSlider = () => {
  const { data: products } = useGetProductsQuery();
  const navigate = useNavigate();

  // Function that handles the redirection when cart icon is clicked
  const handleCartClick = (productId) => {
    // Navigate to /cart/productId (adjust this path as needed based on your routing setup)
    navigate(`/cart/${productId}`);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4, // Default number of slides shown on larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      // Medium screens (1024px or larger)
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Show 3 slides on medium screens
        },
      },
      // Small screens (768px or larger)
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Show 2 slides on smaller screens
        },
      },
      // Extra small screens (480px or larger)
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Show 1 slide on extra small screens
        },
      },
    ],
  };

  return (
    <div className="relative px-6 py-10">
      <h1
        className="text-4xl font-semibold text-center text-dark-color mb-8"
        style={{ fontFamily: "Fredoka, sans-serif" }}
      >
        Latest Products
      </h1>

      <Slider {...settings}>
        {products?.map((product, index) => (
          <div key={index} className="px-3">
            <div className="group relative bg-white border border-[#e0e0e0] rounded-xl p-5 min-h-[41px] text-center shadow-sm hover:shadow-md transition-all duration-300">
              <div className="absolute top-3 left-3 bg-medium-color text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                NEW
              </div>

              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="mx-auto mb-3 h-[210px] w-[200px] object-contain transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300">
                  <div
                    onClick={() => handleCartClick(product._id)}
                    className="bg-medium-color p-3 rounded-md hover:bg-dark-color transition duration-300 cursor-pointer w-50"
                  >
                    <div className="flex items-center justify-center gap-2 text-white">
                      <FaRegEye />
                      <span>View Product</span>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-base font-semibold text-dark-color mt-2 mb-1 leading-tight">
                {product.name}
              </h3>

              <p className="text-medium-color font-bold text-lg">
                ${product.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
