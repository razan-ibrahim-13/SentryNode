
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  
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
    }, 5000);

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

  const handleBookSession = () => {
    navigate('/contact');
  };

  const handleViewPortfolio = () => {
    navigate('/portfolio');
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
          
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-base sm:text-lg text-brand-cream/80 leading-relaxed font-light">
              Capturing the essence of your love story through timeless photography. 
              Where emotions meet artistry, creating memories that last forever.
            </p>
          </div>

          {/* Modern CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={handleBookSession}
              className="group relative overflow-hidden bg-brand-bronze text-white px-8 py-4 rounded-full hover:bg-brand-bronze/90 transition-all duration-300 text-lg font-light tracking-wide shadow-lg transform hover:scale-105"
            >
              <span className="relative z-10">Book Your Session</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
            <button 
              onClick={handleViewPortfolio}
              className="group relative overflow-hidden bg-transparent text-brand-cream px-8 py-4 rounded-full border-2 border-brand-cream hover:bg-brand-cream hover:text-brand-darkGreen transition-all duration-300 text-lg font-light tracking-wide transform hover:scale-105"
            >
              <span className="relative z-10">View Portfolio</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-cream/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Simple Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-6">
          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="p-3 rounded-full bg-brand-darkGreen/30 text-brand-cream hover:bg-brand-darkGreen/50 transition-all duration-300 backdrop-blur-sm border border-brand-cream/20"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="p-3 rounded-full bg-brand-darkGreen/30 text-brand-cream hover:bg-brand-darkGreen/50 transition-all duration-300 backdrop-blur-sm border border-brand-cream/20"
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
