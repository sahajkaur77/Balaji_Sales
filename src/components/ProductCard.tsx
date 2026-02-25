"use client";

import Image from "next/image";

interface ProductProps {
    id: string;
    name: string;
    description: string;
    image: string;
    category: string;
    onOrder: (productName: string) => void;
}

export default function ProductCard({
    name,
    description,
    image,
    category,
    onOrder,
}: ProductProps) {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover group h-full flex flex-col">
            <div className="relative h-56 w-full overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                    <span className="bg-primary/90 backdrop-blur-md text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full shadow-sm">
                        {category}
                    </span>
                </div>
                <div className="w-full h-full bg-gray-100 flex items-center justify-center relative">
                    {/* Placeholder for real images */}
                    <div className="text-gray-300 transform group-hover:scale-110 transition-transform duration-500">
                        {/* Using a Div instead of Image for now since I don't have real assets yet */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-20 h-20">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                    {name}
                </h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">
                    {description}
                </p>

                <div className="mt-auto grid grid-cols-2 gap-3">
                    <a
                        href="tel:+918109169000"
                        className="flex items-center justify-center gap-2 border border-primary text-primary px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-primary/5 transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-3.5 h-3.5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                            />
                        </svg>
                        Call
                    </a>
                    <button
                        onClick={() => onOrder(name)}
                        className="bg-secondary text-white px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-primary transition-all shadow-lg shadow-black/5 active:scale-95"
                    >
                        Order
                    </button>
                </div>
            </div>
        </div>
    );
}
