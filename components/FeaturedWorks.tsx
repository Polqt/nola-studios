import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

interface FeaturedWorksProps {
    textHoverEnter: () => void;
    textHoverLeave: () => void;
}

const FeaturedWorks = ({ textHoverEnter, textHoverLeave }: FeaturedWorksProps) => {
  const projects = [
    {
      title: 'TechVision',
      category: 'Web Development',
      description:
        'A cutting-edge platform designed for tech enthusiasts, featuring responsive design and real-time data analytics that engage users across all devices.',
      technologies: ['React', 'Next.js', 'TailwindCSS', 'Framer Motion'],
      link: '#',
    },
    {
      title: 'EcoTrack',
      category: 'Mobile App',
      description:
        'Innovative sustainability application that helps users track their carbon footprint through intuitive interfaces and personalized recommendations.',
      technologies: ['React Native', 'Firebase', 'Node.js', 'Express'],
      link: '#',
    },
    {
      title: 'ArtisanMarket',
      category: 'E-commerce',
      description:
        'A premium marketplace connecting artisan creators with global customers through a seamless shopping experience and secure payment system.',
      technologies: ['Vue.js', 'Strapi', 'GraphQL', 'AWS'],
      link: '#',
    },
  ];

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        <SectionHeader
          subtitle="Featured"
          title="Selected projects"
          description="Dive into our portfolio of innovative solutions across web, mobile, and digital experiences that we've crafted for forward-thinking clients."
          titleHighlight="projects"
        />

        <div>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              textHoverEnter={textHoverEnter}
              textHoverLeave={textHoverLeave}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedWorks;