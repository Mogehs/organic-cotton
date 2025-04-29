import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextSlide, prevSlide } from "../../features/slider/sliderSlice";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { Link } from "react-router-dom";

const slides = [
  {
    image: "/banner/img2.png",
    text: "Discover the Latest Trends – Style That Speaks for You!",
  },
  {
    image: "/banner/img2.png",
    text: "New Season, New Style – Elevate Your Wardrobe!",
  },
  {
    image: "/banner/img2.png",
    text: "Bold, Beautiful, and Unapologetically You!",
  },
];

const ShopBanner = () => {
  const index = useSelector((state) => state.slider.index);
  const dispatch = useDispatch();

  const handlers = useSwipeable({
    onSwipedLeft: () => dispatch(nextSlide()),
    onSwipedRight: () => dispatch(prevSlide()),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(nextSlide());
    }, 5000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div
      {...handlers}
      className="relative w-full h-[310px] md:h-[550px] overflow-hidden bg-light-color"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="w-full h-full flex items-center justify-center text-center px-4 md:px-24 bg-no-repeat rounded-[10px]"
          style={{
            backgroundImage: `url(${slides[index].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-full md:max-w-xl rounded-md space-y-4">
            <motion.h1
              className="text-2xl md:text-[36px] font-bold text-dark-color leading-snug"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {slides[index].text}
            </motion.h1>

            <Link to="/products">
              <motion.button
                className="text-[12px] px-8 py-4 border border-dark-color text-black hover:bg-dark-color hover:text-white transition duration-300 rounded"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                SHOP NOW
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <motion.div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-dark-color scale-125" : "bg-gray-400"
            } transition-transform`}
            onClick={() => dispatch({ type: "slider/setIndex", payload: i })}
            whileHover={{ scale: 1.3 }}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopBanner;
