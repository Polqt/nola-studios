import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionHeader from './SectionHeader';

const Clients = () => {
  const clients = [
    { name: 'FOINE Essence', logoPath: '/logo/FOINE.svg', category: 'Perfume' },
    { name: 'Gambrino', logoPath: '/logo/GAMBRINO.svg', category: 'Watches' },
    {
      name: 'Linkit',
      logoPath: '/logo/LINKIT.svg',
      category: 'NFC Business Cards',
    },
    { name: 'Nomadico', logoPath: '/logo/NOMADICO.svg', category: 'Wallets' },
    {
      name: 'ROMOSS',
      logoPath: '/logo/ROMOSS.svg',
      category: 'Power Solutions',
    },
    {
      name: 'Pacete Clinic',
      logoPath: '/logo/PACETE.svg',
      category: 'Healthcare',
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-32">
      <SectionHeader
        subtitle="collaborations"
        title="brands that trust us"
        titleHighlight="trust"
        center={true}
        description="We're proud to partner with innovative brands across diverse industries to create exceptional digital experiences."
      />

      <div className="mt-24">
        <div className="hidden md:flex flex-wrap justify-center items-center">
          <motion.div
            className="w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
          >
            <div className="flex justify-center mb-16">
              {clients.slice(0, 3).map((client, index) => (
                <ClientCard key={index} client={client} index={index} />
              ))}
            </div>
            <div className="flex justify-center mt-8">
              {clients.slice(3).map((client, index) => (
                <ClientCard key={index + 3} client={client} index={index + 3} />
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:hidden">
          {clients.map((client, index) => (
            <ClientCard
              key={index}
              client={client}
              index={index}
              isMobile={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface Client {
  name: string;
  logoPath: string;
  category: string;
}

const ClientCard = ({
  client,
  index,
  isMobile = false,
}: {
  client: Client;
  index: number;
  isMobile?: boolean;
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
      },
    },
  };

  const hoverEffect = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 17,
      },
    },
  };

  const pulseAnimation = {
    rest: {
      opacity: 0.8,
      scale: 1,
    },
    hover: {
      opacity: 1,
      scale: 1.1,
      transition: {
        duration: 0.4,
        yoyo: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      className={`px-6 ${isMobile ? 'w-full' : ''}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className="group relative"
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={hoverEffect}
      >
        <div className="relative">
          <motion.div
            variants={pulseAnimation}
            className="absolute -inset-1 rounded-full bg-[#FFDF1E]/20 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300"
          />

          <div className="relative w-32 h-32 md:w-40 md:h-40 bg-neutral-800 rounded-full flex items-center justify-center overflow-hidden border border-neutral-700 group-hover:border-[#FFDF1E]/50 transition-colors duration-300">
            <Image
              width={100}
              height={100}
              src={client.logoPath}
              alt={client.name}
              className="w-20 h-20 md:w-24 md:h-24 object-contain transition-all duration-300 filter grayscale group-hover:grayscale-0"
            />
          </div>
        </div>

        <div className="mt-6 text-center transform transition-all duration-300">
          <h3 className="font-semibold text-lg text-white mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {client.name}
          </h3>
          <p className="text-sm text-[#FFDF1E] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {client.category}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Clients;
