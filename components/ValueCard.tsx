import { motion } from 'framer-motion';


interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-white/5 p-6 md:p-8 rounded-xl backdrop-blur-md border border-white/10 hover:border-[#FFDF1E]/30 transition-all group"
    >
      <div className="bg-[#FFDF1E]/10 w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#FFDF1E]/20 transition-all">
        {icon}
      </div>
      <h3 className="font-bold text-xl mb-3 text-[#FFDF1E]">{title}</h3>
      <p className="text-neutral-300">{description}</p>
    </motion.div>
  );
};

export default ValueCard;
