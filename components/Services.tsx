import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const Services = () => {
  const services = [
    {
      title: 'Brand Strategy',
      description:
        'Develop a cohesive brand identity that resonates with your audience and stands out in your industry.',
      icon: '✨',
    },
    {
      title: 'Content Creation',
      description:
        'Produce scroll-stopping visuals and compelling narratives that capture attention and drive engagement.',
      icon: '🎨',
    },
    {
      title: 'Digital Marketing',
      description:
        'Execute targeted campaigns that connect with your ideal customers and generate measurable results.',
      icon: '📈',
    },
    {
      title: 'Social Media',
      description:
        'Build and maintain an active presence across platforms that matters most to your audience.',
      icon: '📱',
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-32 lowercase">
      <SectionHeader
        subtitle="our expertise"
        title="services that drive results"
        titleHighlight="results"
        center={true}
        description="We combine strategic thinking with creative execution to deliver experiences that elevate your brand."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-neutral-800/50 p-8 backdrop-blur-sm"
          >
            <div className="text-4xl mb-4 text-[#FFDF1E]">{service.icon}</div>
            <h3 className="text-2xl font-bold mb-4 lowercase">
              {service.title}
            </h3>
            <p className="text-neutral-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
