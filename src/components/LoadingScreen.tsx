
import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-brand-darkGreen to-brand-darkestGreen flex items-center justify-center z-50">
      <div className="text-center">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-4xl font-aboreto font-light text-brand-cream tracking-wider mb-2">
            SoulScript
          </h1>
          <p className="text-xs text-brand-bronze tracking-widest">WEDDINGS</p>
        </div>
        
        {/* Elegant Loading Animation */}
        <div className="flex space-x-1 justify-center items-center">
          <div className="w-2 h-2 bg-brand-bronze rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-brand-cream rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-brand-bronze rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
        
        {/* Loading Text */}
        <p className="text-brand-cream/60 text-sm tracking-wider mt-6 animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
