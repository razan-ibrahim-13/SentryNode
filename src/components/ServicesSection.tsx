
import React from 'react';

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-teal-800 to-teal-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-center text-yellow-200 tracking-wider mb-16">
          OUR SERVICES
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* India Services */}
          <a href="/india" className="group block">
            <div className="relative overflow-hidden rounded-lg shadow-2xl h-80 bg-teal-700">
              <img
                src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=800&q=80"
                alt="India Wedding Services"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-teal-900/40 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-4xl sm:text-5xl font-light text-yellow-200 tracking-wider group-hover:scale-105 transition-transform duration-300">
                  INDIA
                </h3>
              </div>
            </div>
          </a>

          {/* US & UK Services */}
          <a href="/us-uk" className="group block">
            <div className="relative overflow-hidden rounded-lg shadow-2xl h-80 bg-teal-700">
              <img
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80"
                alt="US & UK Wedding Services"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-teal-900/40 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-4xl sm:text-5xl font-light text-yellow-200 tracking-wider group-hover:scale-105 transition-transform duration-300">
                  US & UK
                </h3>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
