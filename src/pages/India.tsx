
import React from 'react';
import { ChevronLeft } from 'lucide-react';

const India = () => {
  const packages = [
    {
      title: "BASIC PACKAGE",
      features: [
        "1 Photographer + 1 Videographer",
        "Wedding Day Coverage",
        "80+ Edited Photos",
        "Highlights Video",
        "Delivery via Google Drive"
      ],
      price: "$$$",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=800&q=80",
      position: "right"
    },
    {
      title: "STANDARD PACKAGE",
      features: [
        "2 Photographers + 1 Videographer",
        "Pre-Wedding Shoot + Engagement + Wedding Day",
        "200+ Edited Photos",
        "Full Cinematic Highlight (7-10 Minutes)",
        "Instagram Reels & Teaser",
        "Delivery via Custom Google Drive Folder"
      ],
      price: "$$$",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
      position: "left"
    },
    {
      title: "PREMIUM PACKAGE",
      features: [
        "2 Photographers + 2 Videographers + 1 Candid Photographer",
        "Complete Event Coverage: Haldi, Mehandi, Wedding, Reception",
        "300+ Edited Photos",
        "Cinematic film (15-25 Minutes)",
        "Instagram Reels + Insta Story Highlights",
        "Premium Album (30-40 leaf) + Framed Print",
        "Custom Pen Drive Delivery"
      ],
      price: "$$$",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
      position: "right"
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
            
            <div className="w-24"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-aboreto font-light text-center text-brand-cream tracking-wider mb-4">
              OUR <em className="text-brand-bronze">Services</em>
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-aboreto font-light text-center text-brand-bronze tracking-wider">
              in INDIA
            </h2>
            <div className="w-24 h-px bg-brand-bronze mx-auto mt-8"></div>
          </div>

          {/* Packages */}
          <div className="space-y-16">
            {packages.map((pkg, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${pkg.position === 'left' ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Package Details */}
                  <div className={`${pkg.position === 'left' ? 'lg:order-2' : ''}`}>
                    <h3 className="text-3xl sm:text-4xl font-aboreto font-light text-brand-bronze tracking-wider mb-8">
                      {pkg.title}
                    </h3>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="text-brand-cream/90 text-lg leading-relaxed flex items-start">
                          <span className="text-brand-bronze mr-3">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="text-4xl font-aboreto font-light text-brand-bronze tracking-wider">
                      {pkg.price}
                    </div>
                  </div>

                  {/* Package Image */}
                  <div className={`${pkg.position === 'left' ? 'lg:order-1' : ''}`}>
                    <div className="w-full h-96 bg-brand-darkGreen rounded-lg overflow-hidden shadow-2xl">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Divider */}
                {index < packages.length - 1 && (
                  <div className="w-full h-px bg-brand-bronze/30 mx-auto mt-16"></div>
                )}
              </div>
            ))}
          </div>

          {/* Hire Us Button */}
          <div className="text-center mt-20">
            <div className="flex justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center w-20 h-20 bg-brand-bronze text-white rounded-full hover:bg-brand-bronze/90 transition-all duration-300 shadow-lg group"
              >
                <span className="text-lg font-light tracking-wide group-hover:scale-110 transition-transform">
                  H
                </span>
              </a>
            </div>
            <p className="text-brand-cream/80 text-sm mt-4 tracking-wide">Hire Us!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default India;
