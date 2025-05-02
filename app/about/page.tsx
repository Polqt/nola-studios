'use client';

import BackgroundParticles from '@/components/BackgroundParticles';
import CTASection from '@/components/CTASection';
import CustomCursor from '@/components/CustomCursor';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import SectionDivider from '@/components/SectionDivider';
import StorySection from '@/components/StorySection';
import TeamSection from '@/components/TeamSection';
import ValuesSection from '@/components/ValueSection';
import { useEffect, useState } from 'react';

export default function AboutPage() {
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

        <HeroSection
          textHoverEnter={textHoverEnter}
          textHoverLeave={textHoverLeave}
        />
      </div>
      <StorySection />

      <SectionDivider />

      <TeamSection />

      <SectionDivider />

      <ValuesSection />

      <CTASection
        textHoverEnter={textHoverEnter}
        textHoverLeave={textHoverLeave}
      />
      <Footer />
    </div>
  );
}
