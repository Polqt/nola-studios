'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import BackgroundAnimation from '@/components/BackgroundAnimation';

export default function ContactPage() {
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
      mixBlendMode: 'difference' as MixBlendMode,
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
      <div className="absolute -top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-r from-[#FFDF1E]/10 to-[#FFDF1E]/5 blur-3xl" />

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
              let&apos;s create
            </motion.h1>
            <motion.h1
              className="font-bold text-6xl md:text-7xl mb-12 text-[#FFDF1E]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onMouseEnter={() => setCursorVariant('text')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              together
            </motion.h1>
            <motion.p
              className="text-xl max-w-xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Have a project in mind? We&apos;d love to hear about it. Drop us a
              message and let&apos;s start a conversation.
            </motion.p>
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
                className="bg-white p-8 rounded-xl shadow-lg shadow-black/5"
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
                  <h3 className="text-2xl font-bold mb-6">find us</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all">
                      <h4 className="font-medium text-lg mb-2">bacolod</h4>
                      <p className="text-neutral-600">
                        Village of Angels Street
                        <br />
                        Bacolod City, Philippines
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all">
                      <h4 className="font-medium text-lg mb-2">online</h4>
                      <p className="text-neutral-600">
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
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-neutral-900 text-white relative overflow-hidden"
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-bold text-4xl md:text-5xl mb-8">
            ready to make something amazing?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            let&apos;s turn your vision into reality with designs that captivate
            and convert.
          </p>
          <motion.a
            href="/works"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-[#FFDF1E] text-neutral-900 font-medium rounded-full hover:bg-[#FFDF1E]/90 transition-colors"
          >
            see our work
          </motion.a>
        </div>

        {/* Abstract shapes in background */}
        <div className="absolute top-[10%] left-[5%] w-16 h-16 rounded-full bg-white/5" />
        <div className="absolute top-[40%] right-[10%] w-24 h-24 rounded-full bg-white/5" />
        <div className="absolute bottom-[10%] left-[20%] w-20 h-20 rounded-full bg-white/5" />
        <div className="absolute -bottom-10 right-[30%] w-40 h-40 rounded-full bg-[#FFDF1E]/10" />
      </motion.div>

      <Footer />
    </div>
  );
}
