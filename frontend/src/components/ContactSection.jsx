import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { companyInfo } from '../data/mock';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulated submission (mock)
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setIsLoading(false);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contacto" className="bg-black py-24 lg:py-32 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00FFD1]/3 rounded-full blur-[200px]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#00FFD1] text-sm font-medium uppercase tracking-wider mb-4 block">
            Contacto
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            ¿Listo para <span className="text-[#00FFD1]">proteger</span> tu negocio?
          </h2>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Contáctanos hoy y descubre cómo podemos fortalecer tu seguridad digital.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Información de contacto
              </h3>
              <p className="text-white/60 mb-8">
                Nuestro equipo está listo para ayudarte. Escríbenos o llámanos y te responderemos lo antes posible.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#00FFD1]/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#00FFD1]" />
                </div>
                <div>
                  <div className="text-white/50 text-sm">Email</div>
                  <a href={`mailto:${companyInfo.email}`} className="text-white hover:text-[#00FFD1] transition-colors">
                    {companyInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#00FFD1]/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#00FFD1]" />
                </div>
                <div>
                  <div className="text-white/50 text-sm">Teléfono</div>
                  <a href={`tel:${companyInfo.phone}`} className="text-white hover:text-[#00FFD1] transition-colors">
                    {companyInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#00FFD1]/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#00FFD1]" />
                </div>
                <div>
                  <div className="text-white/50 text-sm">Ubicación</div>
                  <span className="text-white">Servicio global, soporte local</span>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-white/40 text-sm mb-4">Respuesta garantizada en menos de</p>
              <div className="text-4xl font-bold text-[#00FFD1]">24 horas</div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#121212] border border-white/10 p-8">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-[#00FFD1]/20 flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-[#00FFD1]" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-white/60">
                  Nos pondremos en contacto contigo pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white/80 text-sm mb-2">Nombre completo</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                    className="bg-black border-white/20 text-white placeholder:text-white/30 focus:border-[#00FFD1] h-12"
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-sm mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                    className="bg-black border-white/20 text-white placeholder:text-white/30 focus:border-[#00FFD1] h-12"
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-sm mb-2">Empresa</label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nombre de tu empresa"
                    className="bg-black border-white/20 text-white placeholder:text-white/30 focus:border-[#00FFD1] h-12"
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-sm mb-2">Mensaje</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Cuéntanos sobre tu proyecto o necesidades..."
                    rows={4}
                    className="bg-black border-white/20 text-white placeholder:text-white/30 focus:border-[#00FFD1] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#00FFD1] text-black px-8 py-4 text-lg font-medium hover:bg-[#00FFD1]/10 hover:text-[#00FFD1] transition-all duration-400 flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {isLoading ? (
                    'Enviando...'
                  ) : (
                    <>
                      Enviar mensaje
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
