import { motion } from 'framer-motion';

interface WorkCTAProps {
  textHoverEnter: () => void;
  textHoverLeave: () => void;
}

const WorkCTA = ({ textHoverEnter, textHoverLeave }: WorkCTAProps) => {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight lowercase"
            onMouseEnter={textHoverEnter}
            onMouseLeave={textHoverLeave}
          >
            ready to <span className="text-[#FFDF1E]">transform</span> your
            vision?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-neutral-300 mb-12"
            onMouseEnter={textHoverEnter}
            onMouseLeave={textHoverLeave}
          >
            Let&apos;s collaborate to create something extraordinary together
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            href="/contacts"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#FFDF1E] text-neutral-900 font-bold text-lg transition-transform"
            onMouseEnter={textHoverEnter}
            onMouseLeave={textHoverLeave}
          >
            Start a Project
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default WorkCTA;
