"use client";

import { sectors } from '@/data/site-content';
import { Factory, Cpu, Car, Wheat, Activity, Building, Briefcase } from 'lucide-react';

const sectorIcons: Record<string, any> = {
  "Manufactura": Factory,
  "Robótica": Cpu,
  "Automotriz": Car,
  "Agroindustria": Wheat,
  "Salud": Activity,
  "Construcción": Building,
  "Real Estate": Briefcase,
};

export default function Sectors() {
  // Triple the sectors for a much longer seamless scroll
  const scrollSectors = [...sectors, ...sectors, ...sectors];

  return (
    <section id="sectores" className="py-12 lg:py-20 bg-black border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-6xl font-bold tracking-tight mb-4">
          Liderazgo <span className="text-accent">Multisectorial</span>
        </h2>
        <div className="w-24 h-1.5 bg-accent mx-auto" />
      </div>

      {/* Infinite Scroll Container with Gradient Masks */}
      <div className="relative flex items-center">
        {/* Side Masks for Smooth Fading */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="flex animate-infinite-scroll whitespace-nowrap hover:[animation-play-state:paused] transition-all">
          {scrollSectors.map((sector, index) => {
            const Icon = sectorIcons[sector] || Briefcase;
            return (
              <div 
                key={`${sector}-${index}`}
                className="flex items-center space-x-6 mx-16 group cursor-default"
              >
                <div className="relative">
                  <Icon className="w-10 h-10 text-muted-foreground/30 group-hover:text-accent transition-all duration-500 transform group-hover:scale-110" />
                  <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-muted-foreground/20 group-hover:text-foreground transition-all duration-500">
                  {sector}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Subtle Background Text */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[5rem] lg:text-[12rem] font-black text-white/[0.02] whitespace-nowrap pointer-events-none select-none uppercase tracking-tighter">
        Experiencia · Trayectoria · Resultados
      </div>
    </section>
  );
}
