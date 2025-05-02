import { motion } from "framer-motion";

const BackgroundParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#FFDF1E]/10"
          initial={{
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
            x: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            width: Math.random() * 200 + 50,
            height: Math.random() * 200 + 50,
            filter: 'blur(50px)',
          }}
        />
      ))}
    </div>
  );
};


export default BackgroundParticles;