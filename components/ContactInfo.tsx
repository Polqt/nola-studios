'use client';

import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
} from 'lucide-react';

export default function ContactInfo() {
  const contactItems = [
    {
      icon: <Mail className="text-[#FFDF1E]" />,
      label: 'email',
      value: 'contact@nolastudios.net',
      delay: 0.1,
    },
    {
      icon: <Phone className="text-[#FFDF1E]" />,
      label: 'phone',
      value: '+63 (0) 916 123 4567',
      delay: 0.2,
    },
    {
      icon: <MapPin className="text-[#FFDF1E]" />,
      label: 'location',
      value: 'Bacolod, Philippines',
      delay: 0.3,
    },
  ];

  const socialItems = [
    {
      icon: <Instagram size={24} />,
      url: 'https://instagram.com/nolastudios',
      label: 'Instagram',
      delay: 0.1,
    },
    {
      icon: <Twitter size={24} />,
      url: 'https://twitter.com/nolastudios',
      label: 'Twitter',
      delay: 0.2,
    },
    {
      icon: <Linkedin size={24} />,
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
      <div>
        <h2 className="text-3xl font-bold mb-6">let&apos;s connect</h2>
        <p className="text-lg text-neutral-700">
          Whether you&apos;re looking to build a brand from scratch, refresh your
          visuals, or launch a campaign that actually gets noticed— we&apos;d love to
          be part of your journey.
        </p>
      </div>

      <div className="space-y-6">
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="flex items-start space-x-4"
          >
            <div className="p-3 bg-neutral-100 rounded-lg">{item.icon}</div>
            <div>
              <p className="text-sm text-neutral-500">{item.label}</p>
              <p className="text-lg font-medium">{item.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">follow us</h3>
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
              className="p-3 bg-neutral-100 hover:bg-neutral-200 rounded-full transition-colors"
              aria-label={item.label}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="p-6 bg-gradient-to-br from-black to-neutral-800 rounded-lg text-white">
          <p className="text-lg mb-3">
            at nola studios philippines, we believe the best projects start with
            real conversations. no complicated jargon, no pressure — just
            honest, creative collaboration.
          </p>
          <p className="font-medium text-[#FFDF1E]">
            big plans or baby steps, we&apos;re here for it.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
