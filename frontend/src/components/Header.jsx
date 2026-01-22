import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, companyInfo } from '../data/mock';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white tracking-tight">
              Strata<span className="text-[#00FFD1]">shield</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.href)}
                className="text-[#4D4D4D] hover:text-white text-lg font-normal transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('#contacto')}
              className="bg-[#00FFD1] text-black px-6 py-3 text-lg font-medium hover:bg-[#00FFD1]/10 hover:text-[#00FFD1] transition-all duration-400"
            >
              Comenzar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.href)}
                  className="text-[#4D4D4D] hover:text-white text-lg font-normal transition-colors duration-300 text-left py-2"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#contacto')}
                className="bg-[#00FFD1] text-black px-6 py-3 text-lg font-medium hover:bg-[#00FFD1]/10 hover:text-[#00FFD1] transition-all duration-400 mt-2"
              >
                Comenzar
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
