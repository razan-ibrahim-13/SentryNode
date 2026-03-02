
import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-brand-darkGreen to-brand-darkestGreen flex items-center justify-center z-50">
      <div className="text-center">
        {/* Logo/Brand */}
        <div className="mb-12">
          <h1 className="text-4xl font-aboreto font-light text-brand-cream tracking-wider mb-2">
            SoulScript
          </h1>
          <p className="text-xs text-brand-bronze tracking-widest">WEDDINGS</p>
        </div>
        
        {/* Modern Loading Animation */}
        <div className="relative w-20 h-20 mx-auto mb-8">
          <div className="absolute inset-0 border-4 border-brand-cream/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-brand-bronze rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-2 border-transparent border-t-brand-cream rounded-full animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}></div>
        </div>
        
        {/* Loading Text */}
        <div className="flex items-center justify-center space-x-1">
          <span className="text-brand-cream/60 text-sm tracking-wider">Loading</span>
          <div className="flex space-x-1">
            <div className="w-1 h-1 bg-brand-bronze rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-1 h-1 bg-brand-bronze rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-1 h-1 bg-brand-bronze rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
