"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '@/data/services';

export default function Services() {
  const [activeTab, setActiveTab] = useState<'A' | 'B'>('A');

  const currentBlock = activeTab === 'A' ? services.blockA : services.blockB;

  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Nuestros Servicios</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Abordamos los desafíos de tu empresa desde dos ángulos complementarios: la solidez estratégica y la vanguardia tecnológica.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1 bg-muted rounded-2xl border border-border">
            <button
              onClick={() => setActiveTab('A')}
              className={`px-8 py-3 rounded-xl font-bold text-sm transition-all ${
                activeTab === 'A' 
                ? 'bg-accent text-accent-foreground shadow-lg' 
                : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Consultoría & Legal
            </button>
            <button
              onClick={() => setActiveTab('B')}
              className={`px-8 py-3 rounded-xl font-bold text-sm transition-all ${
                activeTab === 'B' 
                ? 'bg-accent text-accent-foreground shadow-lg' 
                : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Innovación Digital
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {currentBlock.items.map((item, index) => (
              <div 
                key={item.id}
                className="group p-8 rounded-3xl bg-card border border-border hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5 transition-all flex flex-col h-full"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
                <div className="mt-auto pt-4 border-t border-border/50 group-hover:border-accent/20">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent/60 group-hover:text-accent transition-colors">
                    Saber más
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
