
import React from 'react';
import { Instagram, ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-darkestGreen text-brand-cream py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <div className="mb-6">
              <h3 className="text-2xl font-century-gothic font-light tracking-wider mb-2">SoulScript</h3>
              <p className="text-brand-bronze text-sm tracking-widest">WEDDINGS</p>
            </div>
            <p className="text-brand-cream/70 leading-relaxed font-light">
              Capturing timeless moments and weaving love stories through the art of photography. 
              Your special day, our passion.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-light tracking-wider mb-6 text-brand-cream">Quick Links</h4>
            <div className="space-y-3">
              <a href="#home" className="block text-brand-cream/70 hover:text-brand-bronze transition-colors font-light">Home</a>
              <a href="#portfolio" className="block text-brand-cream/70 hover:text-brand-bronze transition-colors font-light">Portfolio</a>
              <a href="#about" className="block text-brand-cream/70 hover:text-brand-bronze transition-colors font-light">About</a>
              <a href="#services" className="block text-brand-cream/70 hover:text-brand-bronze transition-colors font-light">Services</a>
              <a href="/india" className="block text-brand-cream/70 hover:text-brand-bronze transition-colors font-light">India Projects</a>
              <a href="/us-uk" className="block text-brand-cream/70 hover:text-brand-bronze transition-colors font-light">US & UK Projects</a>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-light tracking-wider mb-6 text-brand-cream">Connect With Us</h4>
            <div className="space-y-3 mb-6">
              <p className="text-brand-cream/70 font-light">info@soulscriptweddings.com</p>
              <p className="text-brand-cream/70 font-light">+1 (555) 123-4567</p>
              <p className="text-brand-cream/70 font-light">Kerala, India | USA | UK</p>
            </div>
            
            <div className="flex justify-center md:justify-end space-x-4">
              <a 
                href="https://instagram.com/soulscriptinsta" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-bronze hover:text-brand-cream transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-cream/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-brand-cream/60 text-sm font-light mb-4 md:mb-0">
            © 2024 SoulScript Weddings. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-brand-cream hover:text-brand-bronze transition-colors"
          >
            <span className="text-sm font-light">Back to Top</span>
            <ChevronUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
