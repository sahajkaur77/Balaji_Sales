"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import OrderModal from "@/components/OrderModal";
import FloatingCall from "@/components/FloatingCall";

const PRODUCTS = [
  {
    id: "1",
    name: "Stainless Steel Pipes",
    description: "High-grade SS pipes available in various diameters and thicknesses. Ideal for industrial and architectural use.",
    image: "/pipe.jpg",
    category: "Industrial",
  },
  {
    id: "2",
    name: "S.S. Sheets",
    description: "Premium stainless steel sheets with different finishes including matte, mirror, and brushed.",
    image: "/sheet.jpg",
    category: "Raw Material",
  },
  {
    id: "3",
    name: "Steel Railing Accessories",
    description: "Complete range of railing fittings including base plates, end caps, and wall brackets.",
    image: "/railing.jpg",
    category: "Accessories",
  },
  {
    id: "4",
    name: "S.S. Rods & Flats",
    description: "Precision-engineered rods and flat bars for structural and decorative applications.",
    image: "/rods.jpg",
    category: "Construction",
  },
  {
    id: "5",
    name: "Folding Fittings",
    description: "Modern folding and moulding fittings for versatile furniture and enclosure designs.",
    image: "/fitting.jpg",
    category: "Hardware",
  },
  {
    id: "6",
    name: "Aluminium Ladders",
    description: "Lightweight and durable aluminium ladders for commercial and domestic use.",
    image: "/ladder.jpg",
    category: "Utility",
  }
];

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-[90vh] flex items-center pt-20 overflow-hidden bg-secondary">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[50%] h-full bg-primary/20 transform skew-x-12 translate-x-32" />
        </div>

        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="animate-in slide-in-from-left duration-1000">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
              Official Dealer: Balaji Sales
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
              Complete <span className="text-primary italic">Stainless Steel</span> Solutions
            </h1>
            <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
              Premium quality accessories for railings, furniture, and industrial builds.
              Get the best rates directly from the manager.
            </p>
            <div className="flex flex-wrap gap-5">
              <a
                href="#products"
                className="bg-primary hover:bg-white hover:text-secondary text-white px-10 py-4 rounded-2xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-primary/20"
              >
                Explore Catalog
              </a>
              <a
                href="tel:+918109169000"
                className="bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white hover:text-secondary px-10 py-4 rounded-2xl font-bold transition-all transform hover:scale-105"
              >
                Call for Rates
              </a>
            </div>
          </div>

          <div className="relative animate-in zoom-in duration-1000 delay-300">
            <div className="relative z-10 rounded-[3rem] overflow-hidden border-[10px] border-white/5 shadow-2xl">
              <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center p-12">
                  <div className="w-full aspect-square border-2 border-white/10 rounded-full flex items-center justify-center animate-pulse">
                    <div className="w-[80%] aspect-square border-2 border-primary/20 rounded-full flex items-center justify-center">
                      <div className="w-[60%] aspect-square bg-primary flex items-center justify-center rounded-3xl transform rotate-12 shadow-2xl">
                        <span className="text-8xl font-black text-white -rotate-12">S</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-2xl z-20 hidden md:block border border-gray-100">
              <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Trusted By</p>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black text-secondary">500+</span>
                <span className="text-xs text-gray-500 font-medium">Local<br />Businesses</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-24 container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block">Our Collection</span>
            <h2 className="text-4xl font-black text-secondary leading-tight">
              Premium Steel Accessories <br /> For Every Need
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-sm mb-2">
            Browse our extensive catalog of stainless steel products. Click 'Order' to send an inquiry directly to our manager.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onOrder={(name) => setSelectedProduct(name)}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-24 bg-gray-50 overflow-hidden relative">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="grid grid-cols-2 gap-6 relative">
            <div className="space-y-6">
              <div className="h-64 bg-white rounded-[2rem] shadow-sm border border-gray-100 flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21a3.745 3.745 0 0 1-3.296-1.593 3.745 3.745 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.745 3.745 0 0 1 3.296-1.043A3.745 3.745 0 0 1 12 3a3.745 3.745 0 0 1 3.296 1.593 3.745 3.745 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
              </div>
              <div className="h-48 bg-secondary rounded-[2rem] shadow-xl flex items-center justify-center text-white">
                <div className="text-center">
                  <p className="text-3xl font-black">20+</p>
                  <p className="text-[10px] uppercase font-bold text-primary">Years Exp.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6 pt-12">
              <div className="h-48 bg-primary rounded-[2rem] shadow-xl flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                </svg>
              </div>
              <div className="h-64 bg-white rounded-[2rem] shadow-sm border border-gray-100 flex items-center justify-center text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.129-1.125V11.25c0-.447-.251-.847-.624-1.056l-2.209-1.23a1.123 1.123 0 0 0-1.245.08l-2.613 2.086c-.11.088-.255.127-.406.127H9.75" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block">Company Profile</span>
            <h2 className="text-4xl font-black text-secondary mb-8 leading-tight">
              One Of The Finest Things <br /> In This Industry
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Balaji Sales is a leading provider of high-quality stainless steel accessories in Chhattisgarh.
              We offer a wide range of products from pipes and rods to decorative railing fittings and custom folding hardware.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-bold text-secondary text-sm mb-1">Guaranteed Quality</h5>
                  <p className="text-xs text-gray-400">Strict quality control on all S.S. grades.</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-bold text-secondary text-sm mb-1">Best Rates</h5>
                  <p className="text-xs text-gray-400">Competitive pricing for bulk and retail.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 container mx-auto px-6">
        <div className="bg-primary rounded-[3rem] p-12 lg:p-24 text-white text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <h2 className="text-4xl lg:text-6xl font-black mb-8 relative z-10 leading-tight">
            Ready to Place <br /> Your Order?
          </h2>
          <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto relative z-10">
            Don't wait for quotes. Call our manager directly for the latest rates and availability.
            We are ready to serve you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-10">
            <a
              href="tel:+918109169000"
              className="bg-white text-secondary px-10 py-5 rounded-3xl font-bold text-lg hover:bg-secondary hover:text-white transition-all transform hover:scale-105 flex items-center gap-3"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.915l-1.293.97c-.135.101-.164.249-.126.398a12.035 12.035 0 0 0 7.144 7.144c.15.038.297.009.398-.126l.97-1.293a1.875 1.875 0 0 1 1.915-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
              Call +91 81091 69000
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Order Modal */}
      <OrderModal
        isOpen={selectedProduct !== null}
        onClose={() => setSelectedProduct(null)}
        productName={selectedProduct || ""}
      />
      <FloatingCall />
    </main>
  );
}
