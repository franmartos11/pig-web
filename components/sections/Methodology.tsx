"use client";

import { motion } from 'framer-motion';
import { methodology } from '@/data/site-content';

export default function Methodology() {
  return (
    <section id="metodologia" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 transform origin-top translate-x-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Metodología P&G</h2>
          <p className="text-primary-foreground/70 text-lg">
            Nuestro enfoque estructurado garantiza resultados medibles y una transición fluida hacia la excelencia operativa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {methodology.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="text-8xl font-black text-white/5 absolute -top-8 -left-4 pointer-events-none">
                0{item.step}
              </div>
              <div className="relative z-10">
                <div className="w-16 h-1 bg-accent mb-8" />
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-primary-foreground/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
