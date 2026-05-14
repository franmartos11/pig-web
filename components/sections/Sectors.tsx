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
  // Double the sectors for seamless scroll
  const scrollSectors = [...sectors, ...sectors];

  return (
    <section id="sectores" className="py-24 bg-muted/30 border-y border-border overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-[0.2em] text-muted-foreground/50">
          Experiencia Multisectorial
        </h2>
      </div>

      <div className="relative flex overflow-hidden group">
        <div className="flex animate-infinite-scroll whitespace-nowrap py-4">
          {scrollSectors.map((sector, index) => {
            const Icon = sectorIcons[sector] || Briefcase;
            return (
              <div 
                key={`${sector}-${index}`}
                className="flex items-center space-x-4 mx-12 text-muted-foreground hover:text-accent transition-colors cursor-default"
              >
                <Icon className="w-8 h-8 opacity-40 group-hover:opacity-100 transition-opacity" />
                <span className="text-2xl font-bold tracking-tight uppercase">
                  {sector}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
