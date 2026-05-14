import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Methodology from '@/components/sections/Methodology';
import Benefits from '@/components/sections/Benefits';
import Sectors from '@/components/sections/Sectors';
import About from '@/components/sections/About';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Methodology />
      <Benefits />
      <Sectors />
      <About />
      <Footer />
    </main>
  );
}
