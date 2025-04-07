import React from "react";
import { FaStar } from "react-icons/fa6";

const products = [
    {
        id: 1,
        name: "Casual Green Bomber Jacket",
        price: "$240",
        originalPrice: "$300",
        rating: 4.8,
        image: "/home/hero.webp",
        off: ""
    },
    {
        id: 2,
        name: "Gray Slim-Fit Jogger Pants",
        price: "$144.5",
        originalPrice: "$170",
        rating: 4.6,
        image: "/home/hero.webp",
        off: "40%"
    },
    {
        id: 3,
        name: "Sleeve Stripe T-Shirt",
        price: "$78",
        originalPrice: "$130",
        rating: 4.3,
        image: "/home/hero.webp",
        off: "60%"
    },
    {
        id: 4,
        name: "Vertical Striped Shirt",
        price: "$114.5",
        originalPrice: "$229",
        rating: 4.5,
        image: "/home/hero.webp",
        off: "80%"
    }
];

export default function TopSelling() {
    return (
        <div className="border-t-2 border-gray-100 mt-12">
            <section className="mt-20 max-w-7xl mx-auto px-6 md:px-12">
                <h2 className="text-2xl md:text-4xl font-bold text-[#09090b] mb-10">TOP SELLING</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {products.map((product, index) => {
                        // Array of different skew hover classes
                        const skewVariants = [
                            "hover:skew-x-3",
                            "hover:-skew-y-3",
                            "hover:skew-y-2",
                            "hover:-skew-x-2"
                        ];
                        const skewClass = skewVariants[index % skewVariants.length];

                        return (
                            <div
                                key={product.id}
                                className={`bg-white hover:shadow-md rounded-xl overflow-hidden transition-transform duration-300 ${skewClass}`}
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-2xl font-bold text-[#09090b] mb-1">{product.name}</h3>
                                    <div className="text-yellow-500 text-sm flex justify-start items-center gap-1">
                                        <FaStar /> <FaStar /> <FaStar /> {product.rating}
                                    </div>
                                    <div className="flex items-center space-x-2 mb-2">
                                        <span className="text-2xl font-bold text-[#09090b]">{product.price}</span>
                                        <span className="line-through text-xl font-bold text-gray-500">{product.originalPrice}</span>
                                        {product.off && (
                                            <span className="text-lg bg-[#ffeaea] px-2 py-1 rounded-full text-[#ff5b5b]">
                                                {product.off}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="flex justify-center mt-8">
                    <button className="px-10 py-4 bg-gray-200 text-gray-800 rounded-full hover:bg-[#09090b] hover:text-white transition">
                        View all
                    </button>
                </div>
            </section>
        </div>
    );
}
