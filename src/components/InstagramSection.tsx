
import React from 'react';
import { Instagram } from 'lucide-react';

const InstagramSection = () => {
  const instagramImages = [
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=400&q=80",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-brand-darkGreen to-brand-darkestGreen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-aboreto font-light text-center text-brand-cream tracking-wider mb-16">
          INSTAGRAM
        </h2>
        
        {/* Instagram Grid */}
        <div className="bg-gradient-to-br from-brand-darkGreen/50 to-brand-darkestGreen/50 rounded-3xl p-8 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {instagramImages.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                <img
                  src={image}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          {/* Instagram Handle */}
          <div className="flex items-center justify-center mt-8 space-x-3">
            <Instagram className="text-brand-bronze" size={24} />
            <a 
              href="https://instagram.com/soulscriptinsta" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-cream hover:text-brand-bronze tracking-wider font-light transition-colors"
            >
              SOULSCRIPTINSTA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
