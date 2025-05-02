'use client';

import { useEffect, useState } from 'react';
import BackgroundParticles from '@/components/BackgroundParticles';
import CustomCursor from '@/components/CustomCursor';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SectionDivider from '@/components/SectionDivider';
import SectionHeader from '@/components/SectionHeader';
import Testimonials from '@/components/Testimonials';
import Main from '@/components/Main';
import CTAHome from '@/components/CTAHome';
import Services from '@/components/Services';
import ProcessSection from '@/components/ProcessSection';
import Clients from '@/components/Clients';

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState<'default' | 'text'>(
    'default',
  );

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const textHoverEnter = () => setCursorVariant('text');
  const textHoverLeave = () => setCursorVariant('default');

  return (
    <div className="min-h-screen flex flex-col bg-neutral-900 text-white overflow-hidden relative">
      <CustomCursor
        mousePosition={mousePosition}
        cursorVariant={cursorVariant}
      />
      <BackgroundParticles />

      <div className="flex-grow relative z-10">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <Navbar />
        </div>

        <Main textHoverEnter={textHoverEnter} textHoverLeave={textHoverLeave} />

        <SectionDivider />

        <Services />

        <SectionDivider />

        <ProcessSection />

        <SectionDivider />

        <div className="py-32">
          <SectionHeader
            subtitle="client feedback"
            title="what our clients say"
            titleHighlight="clients"
            center={true}
          />
          <Testimonials />
        </div>

        <SectionDivider />

        <Clients />

        <CTAHome
          textHoverEnter={textHoverEnter}
          textHoverLeave={textHoverLeave}
        />
      </div>

      <Footer />
    </div>
  );
}
