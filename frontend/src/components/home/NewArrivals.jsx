import React from "react";
import { FaStar } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../features/productsApi";

// const products = [
//   {
//     id: 1,
//     name: "Et elit vivamus nisl",
//     price: "$240",
//     originalPrice: "$300",
//     rating: 4.8,
//     image: "/newarrivels/1.png",
//     off: "20%",
//   },
//   {
//     id: 2,
//     name: "Quilted Wind Jacket",
//     price: "$144.5",
//     originalPrice: "$170",
//     rating: 4.6,
//     image: "/newarrivels/2.png",
//     off: "40%",
//   },
//   {
//     id: 3,
//     name: "Dictum dis vel platea",
//     price: "$78",
//     originalPrice: "$130",
//     rating: 4.3,
//     image: "/newarrivels/3.png",
//     off: "60%",
//   },
//   {
//     id: 4,
//     name: "Wisi enim ad minim",
//     price: "$114.5",
//     originalPrice: "$229",
//     rating: 4.5,
//     image: "/newarrivels/4.png",
//     off: "80%",
//   },
//   {
//     id: 4,
//     name: "Wisi enim ad minim",
//     price: "$114.5",
//     originalPrice: "$229",
//     rating: 4.5,
//     image: "/newarrivels/4.png",
//     off: "80%",
//   },
//   {
//     id: 4,
//     name: "Wisi enim ad minim",
//     price: "$114.5",
//     originalPrice: "$229",
//     rating: 4.5,
//     image: "/newarrivels/4.png",
//     off: "80%",
//   },
// ];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function NewArrivals() {
  // const products = useSelector((state) => state.shop.filteredProducts);
  const { data: products } = useGetProductsQuery();
  const navigate = useNavigate();
  const handleclick = (productId) => {
    navigate(`/cart/${productId}`);
  };
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 font-[var(--font-custom)]">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-[var(--color-dark-color)] mb-14">
        NEW ARRIVALS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {products?.slice(0, 5).map((product, index) => (
          <motion.div
            key={product.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.15)",
            }}
            onClick={() => {
              handleclick(product._id);
            }}
            className="bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-contain p-4"
            />
            <div className="p-5">
              <h3 className="text-xl md:text-2xl font-bold text-[var(--color-dark-color)] mb-2">
                {product.name}
              </h3>
              <div className="flex items-center gap-1 text-yellow-500 mb-3 text-sm">
                <FaStar /> <FaStar /> <FaStar />
                <FaStar />
                <span className="text-[var(--color-medium-color)] ml-1">
                  {product.rating}
                </span>
              </div>
              <div className="flex items-center flex-wrap gap-3">
                <span className="text-xl md:text-2xl font-semibold text-[var(--color-dark-color)]">
                  ${product.price}
                </span>
                <span className="line-through text-gray-500 md:text-xl">
                  $20
                </span>
                <span className="text-sm md:text-md bg-red-100 text-red-600 px-3 py-1 rounded-full font-semibold">
                  10% OFF
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="flex justify-center mt-14"
      >
        <Link to="/products">
          <button className="px-10 py-4 bg-gray-200 text-[var(--color-dark-color)] rounded-full font-medium hover:bg-[var(--color-dark-color)] hover:text-white transition-colors duration-300 shadow hover:shadow-lg">
            View all
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
