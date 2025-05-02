import { motion } from "framer-motion";
import TeamCard from "./TeamCard";
import SectionHeader from "./SectionHeader";

const TeamSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-32 relative overflow-hidden bg-neutral-900"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <SectionHeader
          subtitle="Our Team"
          title="The creative minds behind nola"
          description="Talented professionals passionate about crafting exceptional digital experiences"
          center={true}
          titleHighlight="creative minds"
        />

        <TeamCard />
      </div>

      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-64 h-64 rounded-full bg-[#FFDF1E]/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#FFDF1E]/5 blur-3xl" />
    </motion.div>
  );
};

export default TeamSection;