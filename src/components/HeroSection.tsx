
import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=2000&q=80"
          alt="Wedding Photography"
          className="w-full h-full object-cover"
        />
        {/* Translucent Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/70 via-teal-800/60 to-teal-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          {/* Logo Circle */}
          <div className="mx-auto mb-8 w-32 h-32 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-300 flex items-center justify-center shadow-2xl">
            <div className="w-20 h-20 rounded-full bg-purple-600 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">H</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-yellow-200 mb-6 tracking-wider">
            SoulScript
          </h1>
          <p className="text-lg sm:text-xl text-yellow-300/90 mb-8 tracking-widest font-light">
            WEDDINGS
          </p>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-base sm:text-lg text-yellow-100/80 leading-relaxed font-light">
              Capturing the essence of your love story through timeless photography. 
              Where emotions meet artistry, creating memories that last forever.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-200/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-200/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
