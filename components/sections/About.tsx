"use client";

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const LinkedinIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="bg-primary rounded-[60px] p-12 lg:p-24 relative">
          {/* Background decoration */}
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-[4/5] rounded-3xl overflow-hidden grayscale border-4 border-accent/20"
              >
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1974" 
                  alt="Pablo Gabriel Gil"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute -bottom-6 -right-6 bg-accent p-6 rounded-2xl">
                <LinkedinIcon className="w-8 h-8 text-accent-foreground" />
              </div>
            </div>

            <div className="lg:col-span-7 text-primary-foreground">
              <Quote className="w-12 h-12 text-accent mb-8 opacity-50" />
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Pablo Gabriel Gil</h2>
              <p className="text-xl font-bold text-accent mb-8 tracking-widest uppercase">Director</p>
              
              <div className="space-y-6 text-primary-foreground/70 text-lg leading-relaxed">
                <p>
                  Con más de 15 años de trayectoria en el sector industrial y tecnológico, mi enfoque se centra en la profesionalización de empresas familiares y el fortalecimiento de sus capacidades organizativas.
                </p>
                <p>
                  Entendemos que la evolución empresarial hoy requiere una fusión indisoluble entre la arquitectura administrativa sólida y la soberanía tecnológica. No solo implementamos herramientas; diseñamos el futuro operativo de su organización.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap gap-4">
                <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-bold">
                  Estratega de Negocios
                </div>
                <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-bold">
                  Especialista en IA
                </div>
                <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-bold">
                  Desarrollador de Talentos
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
