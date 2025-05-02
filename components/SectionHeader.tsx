import { motion } from "framer-motion";

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description?: string;
  center?: boolean;
  titleHighlight?: string;
}

const SectionHeader = ({
  subtitle,
  title,
  description,
  center = false,
  titleHighlight,
}: SectionHeaderProps) => {
  const highlightedTitle = titleHighlight
    ? title.replace(
        titleHighlight,
        `<span class="text-[#FFDF1E]">${titleHighlight}</span>`,
      )
    : title;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${
        center ? 'text-center max-w-2xl mx-auto' : 'max-w-4xl'
      }`}
    >
      <div
        className={`mb-4 flex items-center ${center ? 'justify-center' : ''}`}
      >
        <div className="h-1 w-16 bg-[#FFDF1E] mr-4"></div>
        <span className="text-[#FFDF1E] uppercase text-sm tracking-widest">
          {subtitle}
        </span>
        {center && <div className="h-1 w-16 bg-[#FFDF1E] ml-4"></div>}
      </div>
      <h2
        className="font-bold text-4xl md:text-5xl mb-6 leading-tight"
        dangerouslySetInnerHTML={{ __html: highlightedTitle }}
      />
      {description && <p className="text-lg text-neutral-300">{description}</p>}
    </motion.div>
  );
};

export default SectionHeader;