
import React from "react";

const CallToActionSection = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-brand-darkestGreen to-brand-darkGreen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=2000&q=80"
          alt="Wedding Call to Action"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-darkestGreen/80 to-brand-darkGreen/90"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-aboreto font-light text-brand-cream mb-8 tracking-wider">
          READY TO CREATE
          <br />
          <span className="text-brand-bronze">MEMORIES?</span>
        </h2>
        
        <p className="text-lg sm:text-xl text-brand-cream/90 mb-12 leading-relaxed font-light max-w-2xl mx-auto">
          Let us capture the magic of your special day. Every moment, every emotion, every detail - preserved forever in timeless photographs.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="bg-brand-bronze text-white px-8 py-4 rounded-full hover:bg-brand-bronze/90 transition-all duration-300 text-lg font-light tracking-wide shadow-lg">
            Book Your Session
          </button>
          <button className="bg-transparent text-brand-cream px-8 py-4 rounded-full border-2 border-brand-cream hover:bg-brand-cream hover:text-brand-darkGreen transition-all duration-300 text-lg font-light tracking-wide">
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
