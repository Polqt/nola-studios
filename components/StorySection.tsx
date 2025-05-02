import { motion } from "framer-motion";
import About from "./About";
import Stats from "./Stats";
import SectionHeader from "./SectionHeader";

const StorySection = () => {
  return (
    <motion.div
      id="story"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-32 relative overflow-hidden bg-gradient-to-b from-neutral-900 to-neutral-800"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            subtitle="Our story"
            title="A passion for creating digital experiences that leave an impact"
            titleHighlight="passion"
          />

          <About />

          <Stats />
        </div>
      </div>

      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FFDF1E]/5 blur-3xl rounded-l-full" />
    </motion.div>
  );
};

export default StorySection;