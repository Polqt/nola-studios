import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description:
        'We get to know your brand, goals, and audience to build a strategic foundation.',
    },
    {
      number: '02',
      title: 'Strategy',
      description:
        'We create a tailored roadmap that aligns with your business objectives and market position.',
    },
    {
      number: '03',
      title: 'Creation',
      description:
        'Our team produces high-quality content designed to capture attention and drive engagement.',
    },
    {
      number: '04',
      title: 'Launch',
      description:
        'We implement campaigns across channels and optimize for maximum impact and reach.',
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-32 bg-neutral-900">
      <SectionHeader
        subtitle="how we work"
        title="our creative process"
        titleHighlight="creative"
        center={true}
      />

      <div className="mt-20">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col md:flex-row items-start md:items-center py-12 border-t border-neutral-800"
          >
            <div className="text-6xl font-bold text-[#FFDF1E]/30 mr-8 mb-4 md:mb-0">
              {step.number}
            </div>
            <div className="md:w-1/4 mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">{step.title}</h3>
            </div>
            <div className="md:w-1/2">
              <p className="text-neutral-300 text-lg">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSection;