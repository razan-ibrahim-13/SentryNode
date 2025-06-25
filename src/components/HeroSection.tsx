
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const backgroundImages = [
    "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=2000&q=80"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImages[currentImageIndex]}
          alt="Wedding Photography"
          className="w-full h-full object-cover grayscale transition-all duration-1000 ease-in-out"
        />
        {/* Translucent Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-darkestGreen/70 via-brand-darkGreen/60 to-brand-darkestGreen/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-century-gothic font-light text-brand-cream mb-6 tracking-wider">
            SoulScript
          </h1>
          <p className="text-lg sm:text-xl text-brand-bronze mb-8 tracking-widest font-light">
            WEDDINGS
          </p>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-base sm:text-lg text-brand-cream/80 leading-relaxed font-light">
              Capturing the essence of your love story through timeless photography. 
              Where emotions meet artistry, creating memories that last forever.
            </p>
          </div>
        </div>
      </div>

      {/* Manual Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="p-2 rounded-full bg-brand-darkGreen/50 text-brand-cream hover:bg-brand-darkGreen/70 transition-all duration-300"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Dot Indicators */}
          <div className="flex space-x-2">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-brand-bronze' 
                    : 'bg-brand-cream/50 hover:bg-brand-cream/70'
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="p-2 rounded-full bg-brand-darkGreen/50 text-brand-cream hover:bg-brand-darkGreen/70 transition-all duration-300"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce">
        <div className="w-6 h-10 border-2 border-brand-cream/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand-cream/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
