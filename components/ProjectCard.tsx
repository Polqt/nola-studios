import { motion } from "framer-motion";

interface ProjectCardProps {
    project: {
        title: string;
        category: string;
        description: string;
        technologies: string[];
        link: string;
    };
    index: number;
    textHoverEnter: () => void;
    textHoverLeave: () => void;
}

const ProjectCard = ({ project, index, textHoverEnter, textHoverLeave }: ProjectCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex flex-col ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      } gap-8 mb-24`}
    >
      <div className="md:w-7/12 relative group">
        <div className="absolute inset-0 bg-[#FFDF1E]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="bg-neutral-800 h-full rounded-xl overflow-hidden"
          onMouseEnter={textHoverEnter}
          onMouseLeave={textHoverLeave}
        >
          <div className="aspect-video bg-neutral-800 relative overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900/70"></div>
            <div className="h-full w-full bg-neutral-700 flex items-center justify-center">
              <span className="text-[#FFDF1E] text-4xl font-bold">
                {project.title}
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="md:w-5/12 flex flex-col justify-center">
        <div
          className="mb-3"
          onMouseEnter={textHoverEnter}
          onMouseLeave={textHoverLeave}
        >
          <span className="text-[#FFDF1E] text-sm uppercase tracking-widest">
            {project.category}
          </span>
        </div>
        <h3
          className="text-2xl md:text-3xl font-bold mb-4 lowercase"
          onMouseEnter={textHoverEnter}
          onMouseLeave={textHoverLeave}
        >
          {project.title}
        </h3>
        <p
          className="text-neutral-300 mb-6"
          onMouseEnter={textHoverEnter}
          onMouseLeave={textHoverLeave}
        >
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-neutral-800 rounded-full text-sm"
              onMouseEnter={textHoverEnter}
              onMouseLeave={textHoverLeave}
            >
              {tech}
            </span>
          ))}
        </div>
        <motion.a
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          href={project.link}
          className="inline-flex items-center text-[#FFDF1E] group w-fit"
          onMouseEnter={textHoverEnter}
          onMouseLeave={textHoverLeave}
        >
          View Project
          <svg
            className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;