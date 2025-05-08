import { motion } from "framer-motion";

interface MainProps {
  textHoverEnter: () => void;
  textHoverLeave: () => void;
}

const Main = ({ textHoverEnter, textHoverLeave }: MainProps) => {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 min-h-[80vh] flex items-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl"
      >
        <div className="flex items-center space-x-4 mb-2">
          <div className="h-px w-12 bg-[#FFDF1E]" />
          <span className="text-[#FFDF1E] uppercase text-sm tracking-widest font-medium">
            Digital Creative Studio
          </span>
        </div>
        <h1
          className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight"
          onMouseEnter={textHoverEnter}
          onMouseLeave={textHoverLeave}
        >
          from vision,
          <br />
          to <span className="text-[#FFDF1E]">viral</span>.
        </h1>

        <motion.div
          className="space-y-6 text-xl bg-gradient-to-b "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="leading-relaxed max-w-2xl text-neutral-300 lowercase">
            At NOLA Studios Philippines, we transform bold ideas into
            attention-grabbing digital experiences that make your brand
            unforgettable.
          </p>

          <div className="pt-8 flex space-x-6">
            <motion.a
              href="#works"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FFDF1E] text-black px-8 py-4 font-medium inline-block transition-colors rounded-full"
              onMouseEnter={textHoverEnter}
              onMouseLeave={textHoverLeave}
            >
              see our work
            </motion.a>
            <motion.a
              href="#contacts"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white px-8 py-4 font-medium inline-block hover:bg-white/10 transition-colors rounded-full"
              onMouseEnter={textHoverEnter}
              onMouseLeave={textHoverLeave}
            >
              get in touch
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Main;