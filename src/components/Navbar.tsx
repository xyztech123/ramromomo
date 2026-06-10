import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { cafeInfo } from '../data/cafeInfo';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Ambiance', href: '#gallery' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-espresso/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="font-serif text-2xl font-bold tracking-wider text-cream">
          {cafeInfo.name}
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-cream/80 hover:text-caramel transition-colors text-sm uppercase tracking-widest font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-cream"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-espresso border-t border-espresso/50 transition-all duration-300 origin-top ${
          mobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-cream hover:text-caramel transition-colors text-lg font-serif"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
