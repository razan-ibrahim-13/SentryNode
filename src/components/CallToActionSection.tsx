
import React from "react";
import { useNavigate } from "react-router-dom";

const CallToActionSection = () => {
  const navigate = useNavigate();

  const handleBookSession = () => {
    navigate('/contact');
  };

  const handleViewPortfolio = () => {
    navigate('/portfolio');
  };

  return (
    <section className="h-screen bg-gradient-to-b from-brand-darkestGreen to-brand-darkGreen flex items-center justify-center relative overflow-hidden">
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
          <button 
            onClick={handleBookSession}
            className="bg-brand-bronze text-white px-8 py-4 rounded-full hover:bg-brand-bronze/90 transition-all duration-300 text-lg font-light tracking-wide shadow-lg"
          >
            Book Your Session
          </button>
          <button 
            onClick={handleViewPortfolio}
            className="bg-transparent text-brand-cream px-8 py-4 rounded-full border-2 border-brand-cream hover:bg-brand-cream hover:text-brand-darkGreen transition-all duration-300 text-lg font-light tracking-wide"
          >
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
