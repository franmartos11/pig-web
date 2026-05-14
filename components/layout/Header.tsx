"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronRight, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LinkedinIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const navLinks = [
  { name: 'Servicios', href: '#servicios' },
  { name: 'Metodología', href: '#metodologia' },
  { name: 'Sectores', href: '#sectores' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold tracking-tighter">
            <span className="text-accent">P</span>
            <span className="text-muted-foreground">&</span>
            <span className="text-foreground">G</span>
          </span>
          <span className="text-xs uppercase tracking-widest font-light border-l border-border pl-2 hidden sm:inline-block">
            Consultores en<br />Gestión Empresarial
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
            </Link>
          ))}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="#contacto"
              className="px-5 py-2 bg-accent text-accent-foreground rounded-full text-sm font-semibold hover:opacity-90 transition-opacity flex items-center"
            >
              Primera consulta
              <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-background md:hidden flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter">
                  <span className="text-accent">P</span>&G
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Consultores</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2">
                <X className="w-8 h-8 text-foreground" />
              </button>
            </div>

            <nav className="flex flex-col space-y-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-bold hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto border-t border-border pt-12 pb-8">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">Conectemos</p>
              <div className="flex items-center space-x-6">
                <a href="#" className="p-4 bg-muted rounded-2xl text-accent hover:bg-accent hover:text-white transition-all">
                  <LinkedinIcon className="w-6 h-6" />
                </a>
                <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer" className="p-4 bg-accent rounded-2xl text-white shadow-lg shadow-accent/20">
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
