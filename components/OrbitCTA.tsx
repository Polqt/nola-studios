import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const OrbitCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="md:w-1/2 relative"
    >
      <div className="aspect-square relative rounded-full border border-[#FFDF1E]/30 p-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-full h-full rounded-full border border-[#FFDF1E]/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FFDF1E] rounded-full" />
          </motion.div>
          <div className="absolute inset-8 rounded-full border border-[#FFDF1E]/10" />
          <div className="absolute inset-16 rounded-full border border-[#FFDF1E]/5" />
          <div className="absolute inset-24 rounded-full bg-[#FFDF1E]/5" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-16 h-16 rounded-full bg-[#FFDF1E] flex items-center justify-center cursor-pointer"
            >
              <ArrowRight size={24} className="text-neutral-900" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OrbitCTA;