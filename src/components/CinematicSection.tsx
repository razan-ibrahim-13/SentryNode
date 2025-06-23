import React from "react";

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
          <div className="text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-4xl font-aboreto font-light text-white leading-tight mb-8 tracking-wide">
              TURNING YOUR
              <br />
              <span className="text-4xl sm:text-5xl lg:text-4xl text-brand-cream tracking-wide">
                DREAMS
              </span>
              <span className="text-lg sm:text-xl italic font-light tracking-wide">
                {" "}
                &{" "}
              </span>
              <span className="text-4xl sm:text-5xl lg:text-4xl text-brand-cream tracking-wide">
                AMBITIONS
              </span>
              <br />
              <span className="text-lg sm:text-xl italic font-light tracking-wide">
                into{" "}
              </span>
              <span className="text-4xl sm:text-5xl lg:text-4xl text-brand-cream tracking-wide">
                CINEMATIC MEMORIES
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CinematicSection;
