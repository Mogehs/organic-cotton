import React from 'react';
import { MdOutlineArrowCircleRight } from "react-icons/md";

// Image data array
const images = [
    { src: '/about/ch1.jpg', alt: 'Image 1' },
    { src: '/about/ch3.avif', alt: 'Image 2' },
    { src: '/about/ch2.avif', alt: 'Image 3' },
    { src: '/about/ch4.jpg', alt: 'Image 4' },
];

const EnjoyAble = () => {
    return (
        <section className="flex flex-col md:flex-row items-start gap-10 p-4 md:p-12 mt-8 bg-medium-color">
            {/* Left Side (Mapped Images Grid) */}
            <div className="flex-1 grid grid-cols-2 gap-4 mt-8 md:mt-0">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img.src}
                        alt={img.alt}
                        className="rounded-2xl shadow-xl w-full h-[30vh] hover:scale-105 transition-transform duration-300 object-cover"
                    />
                ))}
            </div>

            {/* Right Side */}
            <div className="flex-1 flex flex-col items-start mt:6 md:mt-14 ">
                <button className="text-sm bg-dark-color text-white hover:hover:bg-[#5a4732] rounded-full font-light uppercase inline-block px-4 py-2 cursor-pointer">
                    Market Child
                </button>
                <h2 className="text-4xl text-dark-color font-bold mt-5">Joyful Learning Engine</h2>
                <p className="text-white text-xl mt-5">
                Kids' e-commerce solutions use smart tech to enhance shopping—offering personalized recommendations, inventory tools, and data-driven insights. From playful UX to seamless checkout, we simplify every parent’s buying journey.
                </p>
            </div>
        </section>
    );
};

export default EnjoyAble;
