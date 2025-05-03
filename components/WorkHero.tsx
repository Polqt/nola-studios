import { motion } from 'framer-motion';

interface WorkHeroProps {
  textHoverEnter: () => void;
  textHoverLeave: () => void;
}

const WorkHero = ({ textHoverEnter, textHoverLeave }: WorkHeroProps) => {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight lowercase"
          onMouseEnter={textHoverEnter}
          onMouseLeave={textHoverLeave}
        >
          our <span className="text-[#FFDF1E]">work</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto lowercase"
          onMouseEnter={textHoverEnter}
          onMouseLeave={textHoverLeave}
        >
          Transforming ideas into immersive digital experiences that leave a
          lasting impact
        </motion.p>
      </div>
    </div>
  );
};

export default WorkHero;
