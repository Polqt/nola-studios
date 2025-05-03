'use client';

import DummyContent from './DummyContent';
import SectionHeader from './SectionHeader';
import { Carousel, Card } from './ui/apple-cards-carousel';

interface FeaturedWorksProps {
  textHoverEnter: () => void;
  textHoverLeave: () => void;
}

const data = [
  {
    category: 'Artificial Intelligence',
    title: 'You can do more with AI.',
    src: '/logo/FOINE.svg',
    content: <DummyContent />,
  },
  {
    category: 'Productivity',
    title: 'Enhance your productivity.',
    src: '/logo/FOINE.svg',
    content: <DummyContent />,
  },
  {
    category: 'Product',
    title: 'Launching the new Apple Vision Pro.',
    src: '/logo/FOINE.svg',
    content: <DummyContent />,
  },

  {
    category: 'Product',
    title: 'Maps for your iPhone 15 Pro Max.',
    src: '/logo/FOINE.svg',
    content: <DummyContent />,
  },
  {
    category: 'iOS',
    title: 'Photography just got better.',
    src: '/logo/FOINE.svg',
    content: <DummyContent />,
  },
  {
    category: 'Hiring',
    title: 'Hiring for a Staff Software Engineer',
    src: '/logo/FOINE.svg',
    content: <DummyContent />,
  },
];

const FeaturedWorks = ({}: FeaturedWorksProps) => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto">
        <SectionHeader
          subtitle="Featured"
          title="Selected projects"
          titleHighlight="projects"
        />
        <Carousel items={cards} />
      </div>
    </div>
  );
};

export default FeaturedWorks;
