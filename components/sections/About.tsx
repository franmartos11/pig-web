"use client";

import { motion } from 'framer-motion';
import { Quote, Linkedin, ExternalLink } from 'lucide-react';

const LinkedinIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-primary border border-white/5 rounded-[40px] overflow-hidden"
        >
          {/* Subtle Accent Background */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Image Column */}
            <div className="lg:col-span-5 relative min-h-[400px] lg:min-h-full">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1974" 
                alt="Pablo Gabriel Gil"
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent lg:hidden" />
              
              <a 
                href="#" 
                className="absolute bottom-6 left-6 flex items-center space-x-2 px-4 py-2 bg-accent text-accent-foreground rounded-xl font-bold text-sm shadow-xl hover:scale-105 transition-transform"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn Profile</span>
              </a>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 p-8 lg:p-16 flex flex-col justify-center text-primary-foreground">
              <div className="mb-6 inline-flex items-center space-x-2 text-accent">
                <Quote className="w-8 h-8 opacity-50 fill-current" />
                <span className="text-xs font-black uppercase tracking-[0.3em]">Perfil del Director</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-2">Pablo Gabriel Gil</h2>
              <p className="text-accent font-bold uppercase tracking-widest text-sm mb-8">Director de Estrategia & Innovación</p>
              
              <div className="space-y-6 text-primary-foreground/70 text-lg leading-relaxed max-w-2xl">
                <p>
                  Con más de <span className="text-primary-foreground font-bold italic">40 años de trayectoria</span> en el sector industrial y tecnológico, mi enfoque se centra en la profesionalización de empresas familiares y el fortalecimiento de sus capacidades organizativas.
                </p>
                <p className="hidden md:block">
                  Entendemos que la evolución empresarial hoy requiere una fusión indisoluble entre la arquitectura administrativa sólida y la soberanía tecnológica. No solo implementamos herramientas; diseñamos el futuro operativo de su organización.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {["Estratega de Negocios", "Especialista en IA", "Desarrollador de Talentos"].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-primary-foreground/60 hover:border-accent/40 hover:text-accent transition-colors">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-accent tracking-tighter">P&G</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-40">Consultoría Estratégica</span>
                </div>
                <button className="flex items-center space-x-2 text-sm font-bold hover:text-accent transition-colors">
                  <span>Agendar Entrevista</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
