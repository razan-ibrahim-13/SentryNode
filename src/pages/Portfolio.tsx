
import React from 'react';
import { ChevronLeft } from 'lucide-react';

const Portfolio = () => {
  const portfolioImages = [
    "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-darkGreen to-brand-darkestGreen">
      {/* Header */}
      <div className="bg-brand-darkGreen/90 backdrop-blur-sm py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a 
              href="/" 
              className="flex items-center space-x-2 text-brand-cream hover:text-brand-bronze transition-colors"
            >
              <ChevronLeft size={24} />
              <span className="font-light tracking-wide">Back to Home</span>
            </a>
            
            <div className="text-center">
              <h1 className="text-2xl font-light text-brand-cream tracking-wider">SoulScript</h1>
              <p className="text-xs text-brand-bronze tracking-widest">WEDDINGS</p>
            </div>
            
            <div className="w-24"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Text */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-aboreto font-light text-brand-cream tracking-wider mb-6">
              OUR <span className="text-brand-bronze">PORTFOLIO</span>
            </h1>
            <p className="text-lg text-brand-cream/80 max-w-4xl mx-auto leading-relaxed">
              A collection of our finest work capturing love stories, emotions, and unforgettable moments. 
              Each photograph tells a unique story of romance and celebration.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioImages.map((image, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
                  <img
                    src={image}
                    alt={`Portfolio ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-brand-cream/80 mb-8 text-lg">
              Interested in working with us?
            </p>
            <a 
              href="/contact"
              className="bg-brand-bronze text-white px-8 py-4 rounded-full hover:bg-brand-bronze/90 transition-all duration-300 text-lg font-light tracking-wide shadow-lg"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
