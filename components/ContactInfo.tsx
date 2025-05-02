'use client';

import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Pin,
  Instagram,
  Twitter,
  Linkedin,
  ArrowUpRight,
} from 'lucide-react';

export default function ContactInfo() {
  const contactItems = [
    {
      icon: <Mail className="text-[#FFDF1E]" />,
      label: 'email',
      value: 'hello@nolastudios.ph',
      delay: 0.1,
    },
    {
      icon: <Phone className="text-[#FFDF1E]" />,
      label: 'phone',
      value: '+63 (0) 916 123 4567',
      delay: 0.2,
    },
    {
      icon: <Pin className="text-[#FFDF1E]" />,
      label: 'location',
      value: 'Bacolod, Philippines',
      delay: 0.3,
    },
  ];

  const socialItems = [
    {
      icon: <Instagram size={20} />,
      url: 'https://instagram.com/nolastudios',
      label: 'Instagram',
      delay: 0.1,
    },
    {
      icon: <Twitter size={20} />,
      url: 'https://twitter.com/nolastudios',
      label: 'Twitter',
      delay: 0.2,
    },
    {
      icon: <Linkedin size={20} />,
      url: 'https://linkedin.com/company/nolastudios',
      label: 'LinkedIn',
      delay: 0.3,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="space-y-12">
      <div className="flex items-center space-x-4 mb-2">
        <div className="h-8 w-1 bg-[#FFDF1E]" />
        <span className="text-[#FFDF1E] font-bold text-2xl lowercase">
          let&apos;s connect
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative">
          <motion.div
            className="absolute -left-4 top-0 h-full w-px"
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 1.5 }}
          />
          <div className="space-y-6 pl-6">
            <p className="text-lg text-neutral-300 lowercase">
              whether you&apos;re looking to build a brand from scratch, refresh
              your visuals, or launch a campaign that actually gets
              noticed—we&apos;d love to be part of your journey.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="space-y-8">
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="flex items-start space-x-4 group"
          >
            <div className="p-3 bg-black/50 rounded-lg border border-white/5 group-hover:border-[#FFDF1E]/30 transition-colors">
              {item.icon}
            </div>
            <div>
              <p className="text-sm text-neutral-500">{item.label}</p>
              <p className="text-lg font-medium text-white">{item.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4 lowercase">follow us</h3>
        <div className="flex space-x-4">
          {socialItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: item.delay }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-black/50 hover:bg-[#FFDF1E]/80 rounded-full border border-white/5 hover:border-transparent transition-colors group"
              aria-label={item.label}
            >
              <span className="text-white group-hover:text-black transition-colors">
                {item.icon}
              </span>
            </motion.a>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        className="transition-all duration-300"
      >
        <div className="p-6 bg-gradient-to-br from-[#FFDF1E]/20 to-transparent rounded-lg border border-[#FFDF1E]/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
          <div className="relative z-10">
            <p className="text-lg mb-3 lowercase">
              at nola studios philippines, we believe the best projects start
              with real conversations. no complicated jargon, no pressure — just
              honest, creative collaboration.
            </p>
            <div className="flex items-center justify-between mt-4">
              <p className="font-medium text-[#FFDF1E]">
                big plans or baby steps, we&apos;re here for it.
              </p>
              <ArrowUpRight className="text-[#FFDF1E]" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
