'use client'

import About from '@/components/About';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import TeamCard from '@/components/TeamCard';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900">
      <div className="flex-grow">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <Navbar />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 md:px-6 lg:px-8"
        >
          <About />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-24 bg-neutral-100"
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-bold text-4xl md:text-5xl mb-16 text-center">
            meet the team
          </h2>
          <TeamCard />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-neutral-900 text-white"
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="font-bold text-4xl md:text-5xl mb-8">
            ready to create something amazing?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            let&apos;s turn your vision into reality with designs that captivate and
            convert.
          </p>
          <a
            href="/contacts"
            className="inline-block px-8 py-4 bg-white text-neutral-900 font-medium rounded-full hover:bg-neutral-200 transition-colors"
          >
            get in touch
          </a>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}
