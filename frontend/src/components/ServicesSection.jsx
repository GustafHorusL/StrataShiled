import React from 'react';
import { Shield, Cloud, Eye, Database, Users, Server } from 'lucide-react';
import { services } from '../data/mock';

const iconMap = {
  Shield: Shield,
  Cloud: Cloud,
  Eye: Eye,
  Database: Database,
  Users: Users,
  Server: Server
};

export const ServicesSection = () => {
  return (
    <section id="servicios" className="bg-black py-24 lg:py-32 relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00FFD1]/3 rounded-full blur-[150px]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#00FFD1] text-sm font-medium uppercase tracking-wider mb-4 block">
            Nuestros Servicios
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            Soluciones integrales de <span className="text-[#00FFD1]">seguridad</span>
          </h2>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Protegemos tu infraestructura digital con tecnología de vanguardia y experiencia comprobada.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group bg-[#121212] border border-white/10 p-8 hover:border-[#00FFD1]/50 transition-all duration-400 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-[#00FFD1]/10 flex items-center justify-center mb-6 group-hover:bg-[#00FFD1]/20 transition-colors duration-400">
                  <IconComponent className="w-7 h-7 text-[#00FFD1]" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-6 flex items-center text-[#00FFD1] opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <span className="text-sm font-medium">Más información</span>
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
