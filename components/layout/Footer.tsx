"use client";

import { useForm } from 'react-hook-form';
import { Mail, MapPin, Phone, Send, MessageCircle } from 'lucide-react';

const LinkedinIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const InstagramIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

export default function Footer() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert("Mensaje enviado con éxito (Demostración)");
  };

  return (
    <footer id="contacto" className="bg-primary pt-24 pb-12 text-primary-foreground relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Hablemos hoy.</h2>
            <p className="text-primary-foreground/60 text-lg mb-12 max-w-md">
              Estamos listos para diagnosticar los desafíos de tu organización y proponer soluciones de alto impacto.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/40 uppercase font-bold tracking-widest">Ubicación</p>
                  <p className="font-medium">Caseros 4113, Córdoba, Argentina</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/40 uppercase font-bold tracking-widest">Email</p>
                  <p className="font-medium">contacto@pgconsultoria.com.ar</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/40 uppercase font-bold tracking-widest">Teléfono</p>
                  <p className="font-medium">+54 351 000 0000</p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex space-x-6">
              <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-accent hover:text-accent-foreground transition-all">
                <LinkedinIcon />
              </a>
              <a href="#" className="p-4 bg-white/5 rounded-full hover:bg-accent hover:text-accent-foreground transition-all">
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card p-8 md:p-12 rounded-[40px] border border-white/10 text-card-foreground">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest">Nombre</label>
                  <input 
                    {...register("name", { required: true })}
                    className="w-full bg-muted border border-border px-4 py-3 rounded-xl focus:outline-none focus:border-accent transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest">Empresa</label>
                  <input 
                    {...register("company")}
                    className="w-full bg-muted border border-border px-4 py-3 rounded-xl focus:outline-none focus:border-accent transition-colors"
                    placeholder="Tu empresa"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest">Email</label>
                <input 
                  {...register("email", { required: true })}
                  type="email"
                  className="w-full bg-muted border border-border px-4 py-3 rounded-xl focus:outline-none focus:border-accent transition-colors"
                  placeholder="hola@empresa.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest">Mensaje</label>
                <textarea 
                  {...register("message", { required: true })}
                  rows={4}
                  className="w-full bg-muted border border-border px-4 py-3 rounded-xl focus:outline-none focus:border-accent transition-colors"
                  placeholder="¿Cómo podemos ayudarte?"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-accent text-accent-foreground rounded-xl font-bold flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
              >
                <span>Enviar consulta</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:row justify-between items-center text-sm text-primary-foreground/40">
          <p>© {new Date().getFullYear()} P&G Consultoría & Innovación. Todos los derechos reservados.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent">Aviso Legal</a>
            <a href="#" className="hover:text-accent">Privacidad</a>
          </div>
        </div>
      </div>

      {/* WhatsApp Float */}
      <a 
        href="https://wa.me/5493510000000" 
        target="_blank" 
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50 animate-bounce"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
      </a>
    </footer>
  );
}
