
import React from 'react';

const CinematicSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-brand-darkestGreen to-brand-darkGreen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="w-full h-96 bg-brand-darkGreen rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80"
                alt="Wedding Photography"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Text */}
          <div className="text-right">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-brand-cream leading-tight mb-8">
              TURNING YOUR<br />
              <span className="text-brand-bronze">DREAMS</span> & <span className="text-brand-bronze">AMBITIONS</span><br />
              <span className="text-lg sm:text-xl italic font-light">into</span> <span className="text-brand-bronze">CINEMATIC MEMORIES</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CinematicSection;
