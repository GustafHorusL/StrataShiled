import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';
import { companyInfo } from '../data/mock';

export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector('#servicios');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen bg-black flex items-center justify-center pt-20 relative overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, #fff 1px, transparent 1px),
              linear-gradient(to bottom, #fff 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00FFD1]/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 mb-8">
            <Shield className="w-4 h-4 text-[#00FFD1]" />
            <span className="text-white/80 text-sm font-medium">
              Seguridad de nivel empresarial
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-semibold text-white leading-tight mb-6 tracking-tight">
            {companyInfo.tagline.split(' ').map((word, index) => (
              <span
                key={index}
                className={word === 'límites' || word === 'digital' ? 'text-[#00FFD1]' : ''}
              >
                {word}{' '}
              </span>
            ))}
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            {companyInfo.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToContact}
              className="group bg-[#00FFD1] text-black px-8 py-4 text-lg font-medium hover:bg-[#00FFD1]/10 hover:text-[#00FFD1] transition-all duration-400 flex items-center gap-3 min-w-[200px] justify-center"
            >
              Solicitar Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollToServices}
              className="bg-white/10 text-white px-8 py-4 text-lg font-medium hover:bg-white hover:text-black transition-all duration-400 min-w-[200px] justify-center"
            >
              Ver Servicios
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-white/40 text-sm mb-4">Certificaciones y estándares</p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-white/30">
              <span className="text-lg font-medium">ISO 27001</span>
              <span className="text-lg font-medium">SOC 2</span>
              <span className="text-lg font-medium">GDPR</span>
              <span className="text-lg font-medium">PCI DSS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
