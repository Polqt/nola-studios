'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`py-6 sticky top-0 z-50 transition-all duration-300}`}
    >
      <div className="flex justify-between items-center">
        <Link href="/">
          <h1 className="font-bold text-4xl md:text-5xl tracking-tight cursor-pointer">
            nola<span className="text-[#FFDF1E]">.</span>
          </h1>
        </Link>

        <ul className="hidden md:flex gap-12 items-center text-lg">
          {['home', 'about', 'works', 'contact us'].map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <Link
                href={
                  item === 'contact us'
                    ? '/contacts'
                    : `/${item === 'home' ? '' : item}`
                }
                className="relative font-medium py-2 px-1 transition-colors hover:text-neutral-500 group"
              >
                {item}
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-neutral-800 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </motion.li>
          ))}
        </ul>

        <button
          className="block md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-6"
        >
          <ul className="flex flex-col gap-6 text-lg">
            {['home', 'about', 'works', 'contact us'].map(item => (
              <li key={item}>
                <Link
                  href={
                    item === 'contact us'
                      ? '/contacts'
                      : `/${item === 'home' ? '' : item}`
                  }
                  className="font-medium block py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
