
import React from 'react';

const PortfolioCarousel = () => {
  const images = [
    "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-teal-900 to-teal-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-center text-yellow-200 tracking-wider mb-4">
          PORTFOLIO
        </h2>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative">
        <div className="flex animate-scroll-left">
          {/* First set of images */}
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 mx-4">
              <div className="w-80 h-96 bg-teal-700 rounded-lg overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300">
                <img
                  src={image}
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* Image placeholder icon */}
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-yellow-200/20 rounded flex items-center justify-center">
                  <div className="w-4 h-4 bg-yellow-200/60 rounded"></div>
                </div>
              </div>
            </div>
          ))}
          {/* Duplicate set for infinite scroll */}
          {images.map((image, index) => (
            <div key={`duplicate-${index}`} className="flex-shrink-0 mx-4">
              <div className="w-80 h-96 bg-teal-700 rounded-lg overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300">
                <img
                  src={image}
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-yellow-200/20 rounded flex items-center justify-center">
                  <div className="w-4 h-4 bg-yellow-200/60 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-16">
        <button className="bg-yellow-200/10 text-yellow-200 px-8 py-3 rounded-full border border-yellow-200/30 hover:bg-yellow-200/20 transition-colors tracking-wide">
          Discover More!
        </button>
      </div>
    </section>
  );
};

export default PortfolioCarousel;
