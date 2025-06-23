
import React from 'react';
import { ChevronLeft } from 'lucide-react';

const India = () => {
  const indianProjects = [
    {
      title: "Traditional Kerala Wedding",
      location: "Backwaters, Kerala",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Royal Rajasthan Celebration",
      location: "Udaipur Palace",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Garden Wedding",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Mountain Destination Wedding",
      location: "Himachal Pradesh",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Beach Wedding",
      location: "Goa",
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Heritage Wedding",
      location: "Jaipur",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80"
    }
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
            
            <div className="w-24"></div> {/* Spacer for center alignment */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-6xl font-aboreto font-light text-center text-brand-cream tracking-wider mb-8">
            INDIA
          </h1>
          <p className="text-xl text-center text-brand-cream/80 mb-16 max-w-3xl mx-auto font-light">
            Celebrating the rich traditions and vibrant culture of Indian weddings across the subcontinent
          </p>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {indianProjects.map((project, index) => (
              <div key={index} className="group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden rounded-lg shadow-2xl bg-brand-darkGreen h-96">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-darkestGreen/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-light tracking-wide mb-2">{project.title}</h3>
                    <p className="text-brand-bronze text-sm tracking-wider">{project.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <h3 className="text-2xl font-light text-brand-cream tracking-wider mb-6">
              Ready to capture your Indian wedding story?
            </h3>
            <button className="bg-brand-bronze/10 text-brand-bronze px-8 py-3 rounded-full border border-brand-bronze/30 hover:bg-brand-bronze/20 transition-colors tracking-wide">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default India;
