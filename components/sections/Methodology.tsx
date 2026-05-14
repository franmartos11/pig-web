"use client";

import { motion } from 'framer-motion';
import { methodology } from '@/data/site-content';
import { Search, PenTool, BarChart3, ArrowRight } from 'lucide-react';

const icons = [Search, PenTool, BarChart3];

export default function Methodology() {
  return (
    <section id="metodologia" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span>Nuestro Proceso</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Metodología <span className="text-accent">P&G</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Un enfoque estructurado y riguroso diseñado para transformar la complejidad organizacional en resultados tangibles y escalables.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 -z-10" />

          {methodology.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                <div className="h-full bg-card/40 backdrop-blur-sm border border-white/5 p-8 rounded-[40px] hover:border-accent/30 hover:bg-card/60 transition-all duration-500 flex flex-col items-center text-center">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-background border border-border px-4 py-1 rounded-full text-xs font-black text-accent tracking-widest uppercase">
                    Paso 0{item.step}
                  </div>

                  {/* Icon Container */}
                  <div className="w-20 h-20 bg-primary border border-white/10 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-accent/40 group-hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] transition-all duration-500">
                    <Icon className="w-10 h-10 text-accent" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {item.description}
                  </p>

                  <div className="mt-auto flex items-center text-accent text-sm font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    Ver detalles <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>

                {/* Mobile/Tablet Arrow Decor */}
                {index < methodology.length - 1 && (
                  <div className="lg:hidden flex justify-center py-4 text-accent/20">
                    <ArrowRight className="rotate-90 w-8 h-8" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
