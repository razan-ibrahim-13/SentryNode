
import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=2000&q=80"
          alt="Wedding Photography"
          className="w-full h-full object-cover grayscale"
        />
        {/* Translucent Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-darkestGreen/70 via-brand-darkGreen/60 to-brand-darkestGreen/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-century-gothic text-brand-cream mb-6 tracking-wider">
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-brand-cream/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand-cream/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
