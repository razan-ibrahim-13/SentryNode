
import React from 'react';
import { ChevronLeft } from 'lucide-react';

const UsUk = () => {
  const westernProjects = [
    {
      title: "Countryside Manor Wedding",
      location: "Cotswolds, UK",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Modern City Wedding",
      location: "New York, USA",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Castle Wedding",
      location: "Scotland, UK",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Beach Resort Wedding",
      location: "California, USA",
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Vineyard Wedding",
      location: "Tuscany, Italy",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Historic Estate Wedding",
      location: "London, UK",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-900 to-slate-900">
      {/* Header */}
      <div className="bg-teal-900/90 backdrop-blur-sm py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a 
              href="/" 
              className="flex items-center space-x-2 text-yellow-200 hover:text-yellow-100 transition-colors"
            >
              <ChevronLeft size={24} />
              <span className="font-light tracking-wide">Back to Home</span>
            </a>
            
            <div className="text-center">
              <h1 className="text-2xl font-light text-yellow-200 tracking-wider">SoulScript</h1>
              <p className="text-xs text-yellow-300/80 tracking-widest">WEDDINGS</p>
            </div>
            
            <div className="w-24"></div> {/* Spacer for center alignment */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-6xl font-light text-center text-yellow-200 tracking-wider mb-8">
            US & UK
          </h1>
          <p className="text-xl text-center text-yellow-100/80 mb-16 max-w-3xl mx-auto font-light">
            Elegant and timeless weddings across the United States and United Kingdom
          </p>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {westernProjects.map((project, index) => (
              <div key={index} className="group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden rounded-lg shadow-2xl bg-teal-700 h-96">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-light tracking-wide mb-2">{project.title}</h3>
                    <p className="text-yellow-200/80 text-sm tracking-wider">{project.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <h3 className="text-2xl font-light text-yellow-200 tracking-wider mb-6">
              Planning a destination wedding in the US or UK?
            </h3>
            <button className="bg-yellow-200/10 text-yellow-200 px-8 py-3 rounded-full border border-yellow-200/30 hover:bg-yellow-200/20 transition-colors tracking-wide">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsUk;
