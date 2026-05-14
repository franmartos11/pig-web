import { Building2, TrendingUp, Home, Scale, Globe, Smartphone, BrainCircuit } from 'lucide-react';

export const services = {
  blockA: {
    title: "Consultoría Estratégica & Legal",
    items: [
      {
        id: "admin",
        title: "Administración y Arquitectura Organizacional",
        description: "Optimizamos la estructura de tu empresa para una gestión eficiente y escalable.",
        icon: Building2,
      },
      {
        id: "finance",
        title: "Estrategia Financiera y Valuación",
        description: "Análisis profundo para maximizar el valor de tu negocio y asegurar rentabilidad.",
        icon: TrendingUp,
      },
      {
        id: "realestate",
        title: "Real Estate y Desarrollos",
        description: "Asesoramiento integral en proyectos inmobiliarios y gestión de activos.",
        icon: Home,
      },
      {
        id: "legal",
        title: "Legal (Comercial, Societario y Laboral)",
        description: "Protección jurídica sólida para todas las operaciones de tu organización.",
        icon: Scale,
      }
    ]
  },
  blockB: {
    title: "Innovación y Transformación Digital",
    items: [
      {
        id: "web",
        title: "Desarrollo Web de alta performance",
        description: "Sitios optimizados bajo Google Web Vitals para máxima conversión y velocidad.",
        icon: Globe,
      },
      {
        id: "apps",
        title: "Ecosistemas Digitales (Apps y E-commerce)",
        description: "Soluciones robustas de venta y gestión digital centradas en el usuario.",
        icon: Smartphone,
      },
      {
        id: "ai",
        title: "Inteligencia Artificial y Agentes Autónomos",
        description: "Implementación de IA local y soberanía de datos para automatizar procesos complejos.",
        icon: BrainCircuit,
      }
    ]
  }
};
