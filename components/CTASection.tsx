import { motion } from "framer-motion";
import OrbitCTA from "./OrbitCTA";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  textHoverEnter: () => void;
  textHoverLeave: () => void;
}

const CTASection = ({ textHoverEnter, textHoverLeave }: CTASectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-32 bg-neutral-900 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2"
            >
              <div className="mb-4 flex items-center">
                <div className="h-1 w-16 bg-[#FFDF1E] mr-4"></div>
                <span className="text-[#FFDF1E] uppercase text-sm tracking-widest">
                  Let&apos;s Connect
                </span>
              </div>
              <h2
                className="font-bold text-4xl md:text-5xl mb-6 leading-tight"
                onMouseEnter={textHoverEnter}
                onMouseLeave={textHoverLeave}
              >
                Ready to create something{' '}
                <span className="text-[#FFDF1E]">extraordinary?</span>
              </h2>

              <p className="text-xl mb-8 text-neutral-300">
                Let&apos;s collaborate to bring your vision to life with strategic
                thinking and creative execution that exceeds expectations.
              </p>

              <motion.a
                href="/contacts"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFDF1E] text-neutral-900 font-medium rounded-full hover:bg-[#FFDF1E]/90 transition-all"
              >
                <span>Start a project</span>
                <ArrowRight size={18} />
              </motion.a>
            </motion.div>

            <OrbitCTA />
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-neutral-800 to-transparent" />
    </motion.div>
  );
};


export default CTASection;