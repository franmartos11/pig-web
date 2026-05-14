"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-background -z-20" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] -z-10" />
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3 h-3" />
            <span>Consultoría B2B Córdoba</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Impulsamos la <span className="text-accent">evolución</span> de tu empresa
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl">
            Soluciones integrales en gestión empresarial, legal-administrativa e innovación digital. Estrategia y tecnología al servicio de tu crecimiento.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="#contacto"
              className="px-8 py-4 bg-accent text-accent-foreground rounded-full font-bold text-lg hover:shadow-lg hover:shadow-accent/20 transition-all flex items-center justify-center group"
            >
              Primera consulta sin cargo
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#servicios"
              className="px-8 py-4 bg-transparent border border-border text-foreground rounded-full font-bold text-lg hover:bg-white/5 transition-all text-center"
            >
              Ver servicios
            </Link>
          </div>
          
          <div className="mt-12 flex items-center space-x-6 text-sm text-muted-foreground">
            <div className="flex flex-col">
              <span className="text-foreground font-bold text-xl">+15 años</span>
              <span>Experiencia</span>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="flex flex-col">
              <span className="text-foreground font-bold text-xl">Soberanía</span>
              <span>de Datos</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent pointer-events-none" />
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" 
              alt="Estrategia y Tecnología"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          {/* Decorative floating card */}
          <div className="absolute -bottom-10 -left-10 glass-effect p-6 rounded-2xl border border-white/10 shadow-xl z-20 max-w-[200px]">
            <p className="text-xs font-bold uppercase text-accent mb-2">Innovación IA</p>
            <p className="text-sm font-medium">Agentes autónomos locales para tu administración.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
