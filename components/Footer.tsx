'use client'

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  IconBrandBehance,
  IconBrandFacebookFilled,
  IconBrandInstagram,
} from '@tabler/icons-react';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-16 px-4 md:px-8 bg-neutral-950 text-white"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4 space-y-6">
            <Link href="/">
              <h1 className="font-bold text-4xl mb-2 cursor-pointer">
                nola<span className="text-neutral-400">.</span>
              </h1>
            </Link>
            <p className="text-lg text-neutral-300">
              building your brand, <br />
              from vision to viral
            </p>
            <div className="flex space-x-5 pt-4">
              <Link
                href={'https://www.instagram.com/nola.studios.ph/'}
                className="hover:text-neutral-300 transition-colors"
              >
                <IconBrandInstagram size={24} />
              </Link>
              <Link
                href={'https://www.facebook.com/nola.studios.ph'}
                className="hover:text-neutral-300 transition-colors"
              >
                <IconBrandFacebookFilled size={24} />
              </Link>
              <Link
                href={'https://www.behance.net/nolastudios'}
                className="hover:text-neutral-300 transition-colors"
              >
                <IconBrandBehance size={24} />
              </Link>
            </div>
          </div>

          <div className="md:col-span-4 space-y-8">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-neutral-400 mb-4">
                Location
              </h3>
              <p className="text-neutral-300">
                bacolod city, <br />
                negros occidental, <br />
                philippines
              </p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-wider text-neutral-400 mb-4">
                Contact
              </h3>
              <a
                href="mailto:contact@nolastudios.net"
                className="block text-neutral-300 hover:text-white transition-colors"
              >
                contact@nolastudios.net
              </a>
              <a
                href="tel:+639052367934"
                className="block text-neutral-300 hover:text-white transition-colors"
              >
                +63 905 236 7934
              </a>
            </div>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-sm uppercase tracking-wider text-neutral-400 mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Works', 'Contact'].map(item => (
                <li key={item}>
                  <Link
                    href={
                      item === 'Contact'
                        ? '/contacts'
                        : `/${item === 'Home' ? '' : item.toLowerCase()}`
                    }
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    {item.toLowerCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-neutral-500">© 2025 / nola studios</p>
          <p className="text-sm text-neutral-500 mt-4 md:mt-0">
            crafted with passion in the philippines
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
