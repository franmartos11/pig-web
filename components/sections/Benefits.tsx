"use client";

import { motion } from 'framer-motion';
import { benefits } from '@/data/site-content';
import { CheckCircle2 } from 'lucide-react';

export default function Benefits() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">¿Por qué elegir P&G?</h2>
            <p className="text-muted-foreground text-lg mb-12">
              Transformamos la complejidad administrativa en una ventaja competitiva, asegurando que tu empresa no solo crezca, sino que evolucione con seguridad.
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={benefit.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-muted rounded-[40px] overflow-hidden border border-border">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070" 
                alt="Trabajo en equipo P&G"
                className="w-full h-full object-cover grayscale brightness-75"
              />
            </div>
            {/* Overlay stats */}
            <div className="absolute -top-6 -right-6 glass-effect p-6 rounded-2xl border border-white/10 shadow-xl hidden md:block">
              <div className="text-3xl font-bold text-accent mb-1">100%</div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Soberanía de Datos</p>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="text-3xl font-bold text-accent-foreground mb-1">ROI</div>
              <p className="text-xs font-bold uppercase tracking-widest text-accent-foreground/80">Optimizado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
