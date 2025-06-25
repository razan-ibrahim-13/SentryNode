
import React from "react";

const ExperienceSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-brand-darkGreen to-brand-darkestGreen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Image - positioned higher */}
          <div className="relative -mt-8">
            <div className="w-full h-80 bg-brand-darkGreen rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=800&q=80"
                alt="Wedding Experience"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Center Text */}
          <div className="text-center px-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-aboreto font-light text-white leading-tight mb-8 tracking-wide">
              YEARS OF
              <br />
              <span className="text-brand-cream">EXPERIENCE</span>
              <br />
              <span className="text-lg sm:text-xl italic font-light tracking-wide">in </span>
              <span className="text-brand-cream">CAPTURING</span>
              <br />
              <span className="text-brand-cream">PERFECT MOMENTS</span>
            </h2>
            <p className="text-base sm:text-lg text-brand-cream/80 leading-relaxed font-light">
              With over a decade of experience in wedding photography, we have mastered the art of capturing the most precious moments of your special day. Every frame tells a story, every shot preserves a memory.
            </p>
          </div>

          {/* Right Image - positioned lower */}
          <div className="relative mt-8">
            <div className="w-full h-80 bg-brand-darkGreen rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80"
                alt="Wedding Photography"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
