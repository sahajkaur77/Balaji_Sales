"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";

const CATALOGUE_PAGES = Array.from({ length: 28 }, (_, i) => ({
    id: i + 1,
    url: `/catalogue/balaji sales catalogue_pages-to-jpg-${(i + 1).toString().padStart(4, '0')}.jpg`,
    title: `Catalogue Page ${i + 1}`
}));

export default function CataloguePage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Header Section */}
            <section className="pt-40 pb-20 bg-secondary text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Product Collection</span>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6">
                        Our Full <span className="text-primary italic">Catalogue</span>
                    </h1>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg">
                        Explore our complete range of high-quality stainless steel accessories, pipes, and fittings.
                        Click on any page to view it in full screen.
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-20 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {CATALOGUE_PAGES.map((page) => (
                        <div
                            key={page.id}
                            onClick={() => setSelectedImage(page.url)}
                            className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                        >
                            <div className="aspect-[3/4] relative bg-gray-100">
                                <Image
                                    src={page.url}
                                    alt={page.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/20 transition-all duration-500 flex items-center justify-center">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-secondary">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="p-5 text-center">
                                <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">{page.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Lightbox / Full Screen View */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[200] bg-secondary/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-10"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-8 right-8 text-white hover:text-primary transition-colors p-2"
                        onClick={() => setSelectedImage(null)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="relative w-full h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={selectedImage}
                            alt="Catalogue Full View"
                            fill
                            className="object-contain"
                            priority
                            sizes="100vw"
                        />
                    </div>

                    <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs font-medium">Click anywhere to close</p>
                </div>
            )}

            <Footer />
        </main>
    );
}
