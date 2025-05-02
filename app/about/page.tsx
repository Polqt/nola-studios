'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import TeamCard from '@/components/TeamCard';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import BackgroundAnimation from '@/components/BackgroundAnimation';

export default function AboutPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

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

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      opacity: 0.5,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      opacity: 0.1,
      mix: 'difference',
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 overflow-hidden relative">
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-[#FFDF1E] z-50 pointer-events-none hidden md:block"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />

      <BackgroundAnimation />

      <div className="absolute -top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-r from-[#FFDF1E]/10 to-[#FFDF1E]/5 blur-3xl" />
      <div className="absolute bottom-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-l from-[#FFDF1E]/10 to-[#FFDF1E]/5 blur-3xl" />

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
            <motion.h1
              className="font-bold text-6xl md:text-7xl mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              onMouseEnter={() => setCursorVariant('text')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              we are
            </motion.h1>
            <motion.h1
              className="font-bold text-6xl md:text-7xl mb-12 text-[#FFDF1E]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onMouseEnter={() => setCursorVariant('text')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              nola studios
            </motion.h1>
            <motion.p
              className="text-xl max-w-xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Crafting digital experiences that inspire, engage, and elevate
              brands to new heights.
            </motion.p>
          </div>
        </motion.div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="py-12 md:py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <About />
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-white relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-neutral-50 to-transparent" />

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="font-bold text-4xl md:text-5xl mb-4"
              onMouseEnter={() => setCursorVariant('text')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              meet the <span className="text-[#FFDF1E]">team</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              The creative minds and skilled professionals behind our success
            </p>
          </motion.div>

          <TeamCard />
        </div>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-neutral-900 to-transparent" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-neutral-900 text-white relative overflow-hidden"
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2"
            >
              <h2
                className="font-bold text-4xl md:text-5xl mb-6"
                onMouseEnter={() => setCursorVariant('text')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                let&apos;s create something{' '}
                <span className="text-[#FFDF1E]">extraordinary</span>
              </h2>

              <p className="text-xl mb-8">
                Ready to bring your vision to life? We combine strategic
                thinking with creative execution to deliver results that exceed
                expectations.
              </p>

              <motion.a
                href="/contacts"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 bg-[#FFDF1E] text-neutral-900 font-medium rounded-full hover:bg-[#FFDF1E]/90 transition-colors"
              >
                start a project
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-1/2"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
                  <h3 className="font-bold text-xl mb-3 text-[#FFDF1E]">
                    Innovation
                  </h3>
                  <p>
                    We push boundaries to create unique digital solutions that
                    set your brand apart.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
                  <h3 className="font-bold text-xl mb-3 text-[#FFDF1E]">
                    Collaboration
                  </h3>
                  <p>
                    Your vision combined with our expertise creates
                    extraordinary results.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
                  <h3 className="font-bold text-xl mb-3 text-[#FFDF1E]">
                    Excellence
                  </h3>
                  <p>
                    We deliver high-quality work that exceeds expectations every
                    time.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
                  <h3 className="font-bold text-xl mb-3 text-[#FFDF1E]">
                    Impact
                  </h3>
                  <p>
                    Creating digital experiences that drive real business
                    results.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute top-[10%] left-[5%] w-16 h-16 rounded-full bg-white/5" />
        <div className="absolute top-[40%] right-[10%] w-24 h-24 rounded-full bg-white/5" />
        <div className="absolute bottom-[10%] left-[20%] w-20 h-20 rounded-full bg-white/5" />
        <div className="absolute -bottom-10 right-[30%] w-40 h-40 rounded-full bg-[#FFDF1E]/10" />
      </motion.div>

      <Footer />
    </div>
  );
}
