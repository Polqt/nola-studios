'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import BackgroundParticles from '@/components/BackgroundParticles';
import SectionDivider from '@/components/SectionDivider';
import CustomCursor from '@/components/CustomCursor';
import SectionHeader from '@/components/SectionHeader';

export default function ContactPage() {
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

      <div className="absolute -top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-r from-[#FFDF1E]/5 to-transparent blur-3xl" />
      <div className="absolute top-[60%] -right-[10%] w-[30%] h-[30%] rounded-full bg-gradient-to-l from-[#FFDF1E]/5 to-transparent blur-3xl" />

      <div className="flex-grow relative z-10">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <Navbar />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 md:px-6 lg:px-8"
        >
          <div className="py-16 md:py-20">
            <motion.div
              className="flex flex-col items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-4 mb-2">
                <div className="h-px w-12 bg-[#FFDF1E]" />
                <span className="text-[#FFDF1E] uppercase text-sm tracking-widest font-medium">
                  Get in touch
                </span>
              </div>
              <motion.h1
                className="font-bold text-6xl md:text-7xl mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                onMouseEnter={textHoverEnter}
                onMouseLeave={textHoverLeave}
              >
                let&apos;s create
              </motion.h1>
              <motion.h1
                className="font-bold text-6xl md:text-7xl mb-12 text-[#FFDF1E]"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                onMouseEnter={textHoverEnter}
                onMouseLeave={textHoverLeave}
              >
                together
              </motion.h1>

              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.div
                  className="absolute -left-4 top-0 h-full w-px bg-gradient-to-b from-[#FFDF1E] to-transparent"
                  initial={{ height: 0 }}
                  animate={{ height: '100%' }}
                  transition={{ duration: 1.5 }}
                />
                <div className="space-y-6 pl-6">
                  <p className="text-xl max-w-xl text-neutral-300 lowercase">
                    have a project in mind? we&apos;d love to hear about it.
                    drop us a message and let&apos;s start a conversation.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="py-12 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-white/5 shadow-xl shadow-black/30"
              >
                <ContactForm />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <ContactInfo />

                <motion.div
                  className="mt-16"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-6 lowercase">find us</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-black/30 p-6 rounded-lg border border-white/5 hover:border-[#FFDF1E]/20 shadow-lg hover:shadow-[#FFDF1E]/5 transition-all duration-300">
                      <h4 className="font-medium text-lg mb-2 lowercase">
                        bacolod
                      </h4>
                      <p className="text-neutral-400">
                        Village of Angels Street
                        <br />
                        Bacolod City, Philippines
                      </p>
                    </div>
                    <div className="bg-black/30 p-6 rounded-lg border border-white/5 hover:border-[#FFDF1E]/20 shadow-lg hover:shadow-[#FFDF1E]/5 transition-all duration-300">
                      <h4 className="font-medium text-lg mb-2 lowercase">
                        online
                      </h4>
                      <p className="text-neutral-400">
                        hello@nolastudios.ph
                        <br />
                        +63 (0) 916 123 4567
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        <SectionDivider />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-24 relative overflow-hidden"
        >
          <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <SectionHeader
              subtitle="let's work together"
              title="ready to make something amazing?"
              center={true}
            />

            <div className="text-center">
              <p className="text-xl mb-12 max-w-2xl mx-auto text-neutral-300">
                let&apos;s turn your vision into reality with designs that
                captivate and convert.
              </p>
              <motion.a
                href="/works"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 bg-[#FFDF1E] text-neutral-900 font-medium rounded-full hover:bg-[#FFDF1E]/90 transition-colors"
                onMouseEnter={textHoverEnter}
                onMouseLeave={textHoverLeave}
              >
                see our work
              </motion.a>
            </div>
          </div>

          <div className="absolute top-[10%] left-[5%] w-16 h-16 rounded-full bg-white/5" />
          <div className="absolute top-[40%] right-[10%] w-24 h-24 rounded-full bg-white/5" />
          <div className="absolute bottom-[10%] left-[20%] w-20 h-20 rounded-full bg-white/5" />
          <div className="absolute -bottom-10 right-[30%] w-40 h-40 rounded-full bg-[#FFDF1E]/10" />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
