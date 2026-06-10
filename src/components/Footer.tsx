import React from 'react';
import { cafeInfo } from '../data/cafeInfo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f0905] pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-16 border-b border-espresso/50 pb-16">
        
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-serif text-cream mb-4 tracking-widest">{cafeInfo.name}</h2>
          <p className="text-offwhite/50 font-light italic max-w-xs">{cafeInfo.tagline}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-20 text-center md:text-left">
          <div>
            <h4 className="text-caramel text-sm uppercase tracking-widest font-medium mb-6">Explore</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-cream/60 hover:text-cream transition-colors text-sm">About</a></li>
              <li><a href="#menu" className="text-cream/60 hover:text-cream transition-colors text-sm">Menu</a></li>
              <li><a href="#gallery" className="text-cream/60 hover:text-cream transition-colors text-sm">Ambiance</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-caramel text-sm uppercase tracking-widest font-medium mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-cream/60 hover:text-cream transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-cream/60 hover:text-cream transition-colors text-sm">Terms of Service</a></li>
            </ul>
          </div>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-offwhite/30 text-xs tracking-wider">
          &copy; {new Date().getFullYear()} {cafeInfo.name}. All rights reserved.
        </p>
        <p className="text-offwhite/30 text-xs tracking-wider">
          Designed for excellence.
        </p>
      </div>
    </footer>
  );
};
