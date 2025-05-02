import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import ValueCard from './ValueCard';
import { ArrowRight, Circle, Sparkle, Star } from 'lucide-react';

const ValuesSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-32 bg-neutral-800 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <SectionHeader
          subtitle="Our Values"
          title="Principles that guide our work"
          description="Our core values shape everything we do and how we approach each project"
          center={true}
          titleHighlight="guide"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ValueCard
            icon={<Sparkle size={24} className="text-[#FFDF1E]" />}
            title="Innovation"
            description="We push boundaries to create unique digital solutions that set your brand apart."
            delay={0.1}
          />
          <ValueCard
            icon={<Circle size={24} className="text-[#FFDF1E]" />}
            title="Collaboration"
            description="Your vision combined with our expertise creates extraordinary results."
            delay={0.2}
          />
          <ValueCard
            icon={<Star size={24} className="text-[#FFDF1E]" />}
            title="Excellence"
            description="We deliver high-quality work that exceeds expectations every time."
            delay={0.3}
          />
          <ValueCard
            icon={<ArrowRight size={24} className="text-[#FFDF1E]" />}
            title="Impact"
            description="Creating digital experiences that drive real business results."
            delay={0.4}
          />
        </div>
      </div>

      <div className="absolute top-0 right-0 w-full h-32 bg-gradient-to-b from-neutral-900 to-transparent" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[#FFDF1E]/5 blur-3xl" />
    </motion.div>
  );
};

export default ValuesSection;
