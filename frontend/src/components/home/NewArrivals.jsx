import React from "react";
import { FaStar } from "react-icons/fa6";

const products = [
    {
        id: 1,
        name: "Casual Green Bomber Jacket",
        price: "$240",
        originalPrice: "$300",
        rating: 4.8,
        image: "/newarrivels/1.png",
        off: "20%"
    },
    {
        id: 2,
        name: "Gray Slim-Fit Jogger Pants",
        price: "$144.5",
        originalPrice: "$170",
        rating: 4.6,
        image: "/newarrivels/2.png",
        off: "40%"
    },
    {
        id: 3,
        name: "Sleeve Stripe T-Shirt",
        price: "$78",
        originalPrice: "$130",
        rating: 4.3,
        image: "/newarrivels/3.png",
        off: "60%"
    },
    {
        id: 4,
        name: "Vertical Striped Shirt",
        price: "$114.5",
        originalPrice: "$229",
        rating: 4.5,
        image: "/newarrivels/4.png",
        off: "80%"
    }
];

export default function NewArrivals() {
    return (
        <section className="mt-20 max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="text-2xl md:text-4xl font-bold text-[#09090b] mb-10">NEW ARRIVALS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {products.map((product, index) => {
                    const skewClasses = [
                        "hover:skew-x-6",
                        "hover:-skew-y-3",
                        "hover:skew-y-6",
                        "hover:-skew-x-3"
                    ];
                    const skew = skewClasses[index % skewClasses.length];

                    return (
                        <div
                            key={product.id}
                            className={`hover:shadow-md rounded-xl cursor-pointer overflow-hidden transition-transform duration-300 ${skew}`}
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-64 "
                            />
                            <div className="p-4">
                                <h3 className="md:text-2xl font-bold text-[#09090b] mb-1">{product.name}</h3>
                                <div className="text-yellow-500 text-sm flex justify-start items-center gap-1">
                                    <FaStar /> <FaStar /> <FaStar /> {product.rating}
                                </div>
                                <div className="flex items-center space-x-2 mb-2">
                                    <span className="md:text-2xl font-bold text-[#09090b]">{product.price}</span>
                                    <span className="line-through md:text-xl font-bold text-gray-500">{product.originalPrice}</span>
                                    <span className="md:text-lg bg-[#ffeaea] px-2 py-1 rounded-full text-[#ff5b5b]">
                                        {product.off}
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-center mt-8">
                <button className="cursor-pointer px-10 py-4 bg-gray-200 text-gray-800 rounded-full hover:bg-[#09090b] hover:text-white transition">
                    View all
                </button>
            </div>
        </section>
    );
}
