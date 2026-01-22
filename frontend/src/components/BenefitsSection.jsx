import React from 'react';
import { benefits } from '../data/mock';

export const BenefitsSection = () => {
  return (
    <section id="beneficios" className="bg-[#121212] py-24 lg:py-32 relative">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00FFD1]/3 rounded-full blur-[180px]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#00FFD1] text-sm font-medium uppercase tracking-wider mb-4 block">
            Por qué elegirnos
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            Resultados que <span className="text-[#00FFD1]">hablan</span>
          </h2>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Números que respaldan nuestra excelencia en servicios de seguridad y cloud.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="group bg-black border border-white/10 p-8 text-center hover:border-[#00FFD1]/50 transition-all duration-400"
            >
              {/* Stat Number */}
              <div className="text-5xl md:text-6xl font-bold text-[#00FFD1] mb-4 group-hover:scale-110 transition-transform duration-400">
                {benefit.stat}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-2">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-white/50 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-black border border-white/10 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                Comprometidos con tu <span className="text-[#00FFD1]">éxito</span>
              </h3>
              <p className="text-white/60 leading-relaxed">
                En Stratashield, cada cliente es una prioridad. Nuestro equipo de expertos trabaja 24/7 para garantizar que tu infraestructura esté siempre protegida y funcionando al máximo rendimiento.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#121212] p-6 border border-white/5">
                <div className="text-3xl font-bold text-white mb-1">15+</div>
                <div className="text-white/50 text-sm">Años de experiencia</div>
              </div>
              <div className="bg-[#121212] p-6 border border-white/5">
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-white/50 text-sm">Expertos certificados</div>
              </div>
              <div className="bg-[#121212] p-6 border border-white/5">
                <div className="text-3xl font-bold text-white mb-1">10M+</div>
                <div className="text-white/50 text-sm">Amenazas bloqueadas</div>
              </div>
              <div className="bg-[#121212] p-6 border border-white/5">
                <div className="text-3xl font-bold text-white mb-1">99%</div>
                <div className="text-white/50 text-sm">Satisfacción cliente</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
