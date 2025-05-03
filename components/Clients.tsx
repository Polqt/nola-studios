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
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-32 relative">
      <motion.div
        className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-[#FFDF1E]/10 to-transparent rounded-full blur-3xl z-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-[#FFDF1E]/5 to-transparent rounded-full blur-3xl z-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />

      <SectionHeader
        subtitle="collaborations"
        title="brands that trust us"
        titleHighlight="trust"
        center={true}
        description="We're proud to partner with innovative brands across diverse industries to create exceptional digital experiences."
      />

      <motion.div
        className="mt-24 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="hidden md:block">
          <motion.div
            className="flex flex-wrap justify-center gap-x-10 gap-y-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
          >
            {clients.map((client, index) => (
              <ClientCard key={index} client={client} index={index} />
            ))}
          </motion.div>
        </div>

        {/* Mobile layout */}
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
      </motion.div>
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

  return (
    <motion.div
      className={isMobile ? 'w-full' : 'w-auto'}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className="group relative flex flex-col items-center"
        whileHover={{
          y: -5,
          transition: { type: 'spring', stiffness: 400, damping: 17 },
        }}
      >
        <motion.div
          className="absolute -inset-4 bg-gradient-to-r from-[#FFDF1E]/5 to-[#FFDF1E]/10 rounded-full opacity-0 group-hover:opacity-100 blur-xl"
          initial={{ scale: 0.8 }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.7, ease: 'easeOut' },
          }}
        />

        <motion.div
          className="relative z-10 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border border-transparent group-hover:border-[#FFDF1E]/30 transition-all duration-300 flex items-center justify-center"
          whileHover={{
            scale: 1.05,
            transition: { type: 'spring', stiffness: 500, damping: 15 },
          }}
        >
          <Image
            width={100}
            height={100}
            src={client.logoPath}
            alt={client.name}
            className="w-full h-full object-cover rounded-full transition-all duration-500 filter grayscale group-hover:grayscale-0 group-hover:brightness-110"
          />
        </motion.div>

        <motion.div
          className="mt-4 text-center transform transition-all duration-300 overflow-hidden"
          style={{ maxHeight: '0px', opacity: 0 }}
          whileHover={{ maxHeight: '100px', opacity: 1 }}
          animate={{
            maxHeight: isMobile ? '100px' : '0px',
            opacity: isMobile ? 1 : 0,
          }}
        >
          <h3 className="font-medium text-base text-white">{client.name}</h3>
          <span className="inline-block h-px w-8 bg-[#FFDF1E]/50 my-2"></span>
          <p className="text-xs text-[#FFDF1E]">{client.category}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Clients;
