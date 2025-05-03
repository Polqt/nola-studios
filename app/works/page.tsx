'use client';

import BackgroundParticles from '@/components/BackgroundParticles';
import CustomCursor from '@/components/CustomCursor';
import FeaturedWorks from '@/components/FeaturedWorks';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SectionDivider from '@/components/SectionDivider';
import WorkCTA from '@/components/WorkCTA';
import WorkHero from '@/components/WorkHero';
import { useEffect, useState } from 'react';

export default function WorkPage() {
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

        <WorkHero 
          textHoverEnter={textHoverEnter}
          textHoverLeave={textHoverLeave}
        />

        <SectionDivider />

        <FeaturedWorks 
          textHoverEnter={textHoverEnter}
          textHoverLeave={textHoverLeave}
        />

        <SectionDivider />

        <WorkCTA
          textHoverEnter={textHoverEnter}
          textHoverLeave={textHoverLeave}
        />
      </div>

      <Footer />
    </div>
  );
}