import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import img1 from "../assets/hero_bg_1.jpg";
import img2 from "../assets/hero_bg_2.jpg";

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: img1,
      tag: "FOR RENT",
      address: "871 CRENSHAW BLVD",
      price: "$2,250,500",
    },
    {
      id: 2,
      image: img2,
      tag: "FOR SALE",
      address: "204 MOUNT OLIVE ROAD",
      price: "$5,350,000",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10">
        <span className="bg-lime-500 text-white text-[10px] md:text-xs font-bold px-3 py-1 uppercase tracking-widest mb-4">
          {slides[currentSlide].tag}
        </span>
        <h1 className="text-3xl md:text-6xl font-light uppercase tracking-wide mb-3">
          {slides[currentSlide].address}
        </h1>
        <p className="text-2xl md:text-4xl font-bold text-lime-400 mb-8">
          {slides[currentSlide].price}
        </p>
        <button className="border border-white/70 px-6 py-3 md:px-8 md:py-3 text-xs md:text-sm font-bold tracking-widest hover:bg-white hover:text-black transition duration-300">
          SEE DETAILS
        </button>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 p-3 rounded-full text-white transition z-20"
      >
        <ArrowLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 p-3 rounded-full text-white transition z-20"
      >
        <ArrowRight size={24} />
      </button>
    </section>
  );
};

export default Hero;
