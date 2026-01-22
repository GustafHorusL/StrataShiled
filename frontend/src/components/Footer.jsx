import React from 'react';
import { Shield, Linkedin, Twitter, Github } from 'lucide-react';
import { navLinks, companyInfo } from '../data/mock';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#121212] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-8 h-8 text-[#00FFD1]" />
              <span className="text-2xl font-bold text-white tracking-tight">
                Strata<span className="text-[#00FFD1]">shield</span>
              </span>
            </div>
            <p className="text-white/60 max-w-md mb-6 leading-relaxed">
              Soluciones integrales de ciberseguridad y servicios cloud para empresas que exigen excelencia. Protegemos tu futuro digital.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-[#00FFD1]/20 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5 text-white/60 hover:text-[#00FFD1]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-[#00FFD1]/20 transition-colors duration-300"
              >
                <Twitter className="w-5 h-5 text-white/60 hover:text-[#00FFD1]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-[#00FFD1]/20 transition-colors duration-300"
              >
                <Github className="w-5 h-5 text-white/60 hover:text-[#00FFD1]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Enlaces rápidos</h4>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-white/50 hover:text-[#00FFD1] transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contacto</h4>
            <div className="space-y-3 text-white/50">
              <p>{companyInfo.email}</p>
              <p>{companyInfo.phone}</p>
              <p>Lun - Vie: 9:00 - 18:00</p>
              <p>Soporte 24/7 disponible</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} {companyInfo.name}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-white/40 text-sm">
            <a href="#" className="hover:text-white transition-colors">Política de privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos de servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
