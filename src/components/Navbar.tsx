
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-teal-900/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-center">
              <h1 className="text-xl sm:text-2xl font-light text-yellow-200 tracking-wider">
                SoulScript
              </h1>
              <p className="text-xs text-yellow-300/80 tracking-widest">WEDDINGS</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-yellow-200 hover:text-yellow-100 px-3 py-2 text-sm font-light tracking-wide transition-colors">
                Home
              </a>
              <a href="#portfolio" className="text-yellow-200 hover:text-yellow-100 px-3 py-2 text-sm font-light tracking-wide transition-colors">
                Portfolio
              </a>
              <a href="#services" className="text-yellow-200 hover:text-yellow-100 px-3 py-2 text-sm font-light tracking-wide transition-colors">
                Services
              </a>
              <a href="#about" className="text-yellow-200 hover:text-yellow-100 px-3 py-2 text-sm font-light tracking-wide transition-colors">
                About
              </a>
              <a href="#contact" className="text-yellow-200/70 hover:text-yellow-100 px-3 py-2 text-sm font-light tracking-wide italic transition-colors">
                Inquire
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-yellow-200 hover:text-yellow-100 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-teal-900/95">
              <a href="#home" className="text-yellow-200 hover:text-yellow-100 block px-3 py-2 text-sm font-light tracking-wide">
                Home
              </a>
              <a href="#portfolio" className="text-yellow-200 hover:text-yellow-100 block px-3 py-2 text-sm font-light tracking-wide">
                Portfolio
              </a>
              <a href="#services" className="text-yellow-200 hover:text-yellow-100 block px-3 py-2 text-sm font-light tracking-wide">
                Services
              </a>
              <a href="#about" className="text-yellow-200 hover:text-yellow-100 block px-3 py-2 text-sm font-light tracking-wide">
                About
              </a>
              <a href="#contact" className="text-yellow-200/70 hover:text-yellow-100 block px-3 py-2 text-sm font-light tracking-wide italic">
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
