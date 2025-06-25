
import React, { useState, useEffect } from "react";

const PortfolioCarousel = () => {
  const images = [
    "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const getVisibleImages = () => {
    const prev = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    const next = (currentIndex + 1) % images.length;
    return [prev, currentIndex, next];
  };

  const [prevIndex, centerIndex, nextIndex] = getVisibleImages();

  return (
    <section
      id="portfolio"
      className="h-screen bg-gradient-to-b from-brand-darkGreen to-brand-darkestGreen overflow-hidden relative flex flex-col justify-center"
    >
      {/* Portfolio Heading */}
      <div className="w-full flex justify-center z-20 mb-12">
        <h2 className="text-6xl sm:text-7xl lg:text-8xl font-aboreto font-light text-brand-cream tracking-wider">
          PORTFOLIO
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="relative flex items-center justify-center h-[34rem]">
        {/* Left Image */}
        <div className="flex-shrink-0 mx-1 opacity-50 transform scale-75 transition-all duration-1500 ease-in-out hover:scale-80">
          <div className="w-96 h-[28rem] bg-brand-darkGreen rounded-lg overflow-hidden shadow-xl">
            <img
              src={images[prevIndex]}
              alt={`Portfolio ${prevIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-1500 ease-in-out"
            />
          </div>
        </div>

        {/* Center Image (Highlighted) */}
        <div className="flex-shrink-0 mx-2 z-10 transform scale-100 transition-all duration-1500 ease-in-out hover:scale-105">
          <div className="w-[28rem] h-[34rem] bg-brand-darkGreen rounded-lg overflow-hidden shadow-2xl">
            <img
              src={images[centerIndex]}
              alt={`Portfolio ${centerIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-1500 ease-in-out"
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0 mx-1 opacity-50 transform scale-75 transition-all duration-1500 ease-in-out hover:scale-80">
          <div className="w-96 h-[28rem] bg-brand-darkGreen rounded-lg overflow-hidden shadow-xl">
            <img
              src={images[nextIndex]}
              alt={`Portfolio ${nextIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-1500 ease-in-out"
            />
          </div>
        </div>
      </div>

      <div className="text-center mt-16">
        <button className="bg-brand-bronze/10 text-brand-bronze px-8 py-3 rounded-full border border-brand-bronze/30 hover:bg-brand-bronze/20 transition-colors tracking-wide">
          Discover More!
        </button>
      </div>
    </section>
  );
};

export default PortfolioCarousel;
