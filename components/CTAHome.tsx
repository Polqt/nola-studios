import { motion } from "framer-motion";

interface CTAHomeProps {
  textHoverEnter: () => void;
  textHoverLeave: () => void;
}

const CTAHome = ({ textHoverEnter, textHoverLeave }: CTAHomeProps) => {
  return (
    <div id="contact" className="container mx-auto px-4 md:px-6 lg:px-8 py-32">
      <div className="bg-neutral-800/50 backdrop-blur-md p-12 md:p-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
            onMouseEnter={textHoverEnter}
            onMouseLeave={textHoverLeave}
          >
            ready to make your brand{' '}
            <span className="text-[#FFDF1E]">unforgettable</span>?
          </h2>
          <p className="text-xl text-neutral-300 mb-12 max-w-2xl mx-auto lowercase">
            Let&apos;s create something extraordinary together. Get in touch to
            start the conversation.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FFDF1E] text-black px-10 py-5 font-medium inline-block text-lg hover:bg-white transition-colors lowercase"
            onMouseEnter={textHoverEnter}
            onMouseLeave={textHoverLeave}
          >
            Start Your Project
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default CTAHome;