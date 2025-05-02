import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

interface HeroSectionProps {
  textHoverEnter: () => void;
  textHoverLeave: () => void;
}

const HeroSection = ({ textHoverEnter, textHoverLeave }: HeroSectionProps) => {
  return (
    <div className="min-h-screen flex flex-col justify-center relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 flex items-center"
          >
            <div className="h-1 w-16 bg-[#FFDF1E] mr-4"></div>
            <span className="text-[#FFDF1E] uppercase text-sm tracking-widest">
              About us
            </span>
          </motion.div>

          <motion.h1
            className="font-bold text-7xl md:text-8xl lg:text-9xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onMouseEnter={textHoverEnter}
            onMouseLeave={textHoverLeave}
          >
            we are
          </motion.h1>

          <motion.div
            className="relative"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h1
              className="font-bold text-7xl md:text-8xl lg:text-9xl mb-8 text-[#FFDF1E]"
              onMouseEnter={textHoverEnter}
              onMouseLeave={textHoverLeave}
            >
              nola
            </h1>
            <motion.div
              className="absolute -top-6 -right-6 text-6xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <Star size={40} className="text-[#FFDF1E]/50" />
            </motion.div>
          </motion.div>

          <motion.p
            className="text-2xl font-light max-w-xl text-neutral-300 lowercase"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Crafting digital experiences that inspire, engage, and elevate
            brands to new heights.
          </motion.p>

          <motion.div
            className="mt-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.a
              href="#story"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFDF1E] text-neutral-900 font-medium rounded-full hover:bg-[#FFDF1E]/90 transition-all"
            >
              <span className="lowercase">Our Story</span>
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-16 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 1 },
          y: { delay: 1.5, duration: 2, repeat: Infinity },
        }}
      >
        <ArrowRight size={24} className="rotate-90 text-[#FFDF1E]" />
      </motion.div>
    </div>
  );
};

export default HeroSection;