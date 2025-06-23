
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-darkestGreen/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Navigation */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              <a href="#home" className="group relative text-brand-cream hover:text-brand-bronze px-3 py-2 text-sm font-light tracking-wide transition-colors">
                Home
                <span className="absolute bottom-0 left-0 h-0.5 bg-brand-bronze w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
              </a>
              <a href="#portfolio" className="group relative text-brand-cream hover:text-brand-bronze px-3 py-2 text-sm font-light tracking-wide transition-colors">
                Portfolio
                <span className="absolute bottom-0 left-0 h-0.5 bg-brand-bronze w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
              </a>
            </div>
          </div>

          {/* Logo - Centered */}
          <div className="flex-shrink-0 absolute left-1/2 transform -translate-x-1/2">
            <div className="text-center">
              <h1 className="text-xl sm:text-2xl font-century-gothic text-brand-cream tracking-wider">
                SoulScript
              </h1>
              <p className="text-xs text-brand-bronze tracking-widest">WEDDINGS</p>
            </div>
          </div>

          {/* Right Navigation */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              <a href="#services" className="group relative text-brand-cream hover:text-brand-bronze px-3 py-2 text-sm font-light tracking-wide transition-colors">
                Services
                <span className="absolute bottom-0 left-0 h-0.5 bg-brand-bronze w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
              </a>
              <a href="#about" className="group relative text-brand-cream hover:text-brand-bronze px-3 py-2 text-sm font-light tracking-wide transition-colors">
                About
                <span className="absolute bottom-0 left-0 h-0.5 bg-brand-bronze w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
              </a>
              <a href="#contact" className="group relative text-brand-bronze/70 hover:text-brand-bronze px-3 py-2 text-sm font-light tracking-wide italic transition-colors">
                Inquire
                <span className="absolute bottom-0 left-0 h-0.5 bg-brand-bronze w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-cream hover:text-brand-bronze p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-brand-darkestGreen/95">
              <a href="#home" className="text-brand-cream hover:text-brand-bronze block px-3 py-2 text-sm font-light tracking-wide">
                Home
              </a>
              <a href="#portfolio" className="text-brand-cream hover:text-brand-bronze block px-3 py-2 text-sm font-light tracking-wide">
                Portfolio
              </a>
              <a href="#services" className="text-brand-cream hover:text-brand-bronze block px-3 py-2 text-sm font-light tracking-wide">
                Services
              </a>
              <a href="#about" className="text-brand-cream hover:text-brand-bronze block px-3 py-2 text-sm font-light tracking-wide">
                About
              </a>
              <a href="#contact" className="text-brand-bronze/70 hover:text-brand-bronze block px-3 py-2 text-sm font-light tracking-wide italic">
                Inquire
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
