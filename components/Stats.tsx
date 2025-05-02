import { motion } from "framer-motion";

const Stats = () => {
  const stats = [
    { number: '4', label: 'Months Experience' },
    { number: '5+', label: 'Projects Completed' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '0', label: 'Design Awards' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="text-center"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-[#FFDF1E]">
            {stat.number}
          </h3>
          <p className="text-sm uppercase tracking-wider mt-2">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Stats;