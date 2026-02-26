"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-morphism py-3 shadow-md border-b border-gray-100" : "bg-transparent py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="group-hover:scale-110 transition-transform duration-300">
              <Logo className="w-12 h-12" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-black tracking-tight leading-none transition-colors ${isScrolled ? 'text-secondary' : 'text-white'}`}>
                BALAJI SALES
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-primary font-bold">
                Complete S.S. Accessories
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/#home" className={`text-sm font-bold transition-all hover:text-primary ${isScrolled ? 'text-secondary' : 'text-white/80'}`}>Home</Link>
            <Link href="/#products" className={`text-sm font-bold transition-all hover:text-primary ${isScrolled ? 'text-secondary' : 'text-white/80'}`}>Products</Link>
            <Link href="/#about" className={`text-sm font-bold transition-all hover:text-primary ${isScrolled ? 'text-secondary' : 'text-white/80'}`}>About</Link>
            <Link
              href="#contact"
              className="bg-primary text-white px-8 py-2.5 rounded-xl text-sm font-bold hover:bg-secondary transition-all hover:scale-105 shadow-lg shadow-primary/20"
            >
              Order Now
            </Link>
          </div>

          <button
            className={`md:hidden p-2 rounded-xl transition-colors ${isScrolled ? 'text-secondary' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-secondary/90 backdrop-blur-md z-[100] transition-all duration-500 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
      >
        <button
          className="absolute top-6 right-6 text-white p-2"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="h-full flex flex-col items-center justify-center gap-8">
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/" className="text-3xl font-black text-white hover:text-primary transition-colors italic">Home</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/#products" className="text-3xl font-black text-white hover:text-primary transition-colors italic">Products</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} href="/#about" className="text-3xl font-black text-white hover:text-primary transition-colors italic">About Us</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} href="#contact" className="bg-primary text-white px-12 py-5 rounded-3xl text-xl font-bold mt-4 shadow-2xl shadow-primary/30">Order Now</Link>
        </div>
      </div>
    </>
  );
}
