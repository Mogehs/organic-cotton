import React from "react";

const products = [
    {
        id: 1,
        name: "Skywinder Toy",
        price: "$250.00",
        image: "/home/P1.jpg",
    },
    {
        id: 2,
        name: "Excavator Toy",
        price: "$122.00",
        image: "/home/P2.jpg",
    },
    {
        id: 3,
        name: "Dolls Trailer",
        price: "$320.00",
        image: "/home/P3.jpg",
    },
    {
        id: 4,
        name: "Cutie Girl Doll",
        price: "$150.00",
        image: "/home/P4.jpg",
    },
    {
        id: 5,
        name: "Genius Tray",
        price: "$100.00",
        image: "/home/P5.jpg",
    },
    {
        id: 6,
        name: "Doctor Doll",
        price: "$122.00",
        image: "/home/P6.jpg",
    },
    {
        id: 7,
        name: "Cartoon Kit",
        price: "$90.00",
        image: "/home/P7.jpg",
    },
    {
        id: 8,
        name: "Blocks Build Toy",
        price: "$322.00",
        image: "/home/P8.jpg",
    }
];

export default function PopularStore() {
    return (
        <section className="mt-12 text-center bg-gray-100 p-12">
            {/* Main Title */}
            <div className="mt-6">
                <h1 className="text-sm md:text-xl font-bold text-gray-700 mb-2 uppercase">
                    Shop Juno Toys & Games
                </h1>

                {/* Sub-title */}
                <p className="text-3xl md:text-5xl text-gray-900 mb-10 font-bold">
                    Popular in Store
                </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
                {products.map((product, index) => {
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
                            className={`hover:shadow-md hover:bg-white cursor-pointer rounded-xl overflow-hidden transition-transform duration-300 ${skewClass}`}
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-4 text-center">
                                <h3 className="text-xl font-bold text-[#09090b] mb-1">
                                    {product.name}
                                </h3>
                                <div className="mb-2">
                                    <span className="text-sm font-bold text-[#09090b]">
                                        {product.price}
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
