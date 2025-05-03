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
    category: '7ryms',
    title: 'You can do more with AI.',
    src: '/7ryms/7RYMS1.png',
    content: <DummyContent />,
  },
  {
    category: 'Boya',
    title: 'Enhance your productivity.',
    src: '/boya/BOYA1.png',
    content: <DummyContent />,
  },
  {
    category: 'FOINE Essence',
    title: 'Launching the new Apple Vision Pro.',
    src: '/foine/FOINE1.png',
    content: <DummyContent />,
  },

  {
    category: 'Romoss',
    title: 'Maps for your iPhone 15 Pro Max.',
    src: '/romoss/ROMOSS1.png',
    content: <DummyContent />,
  },
  {
    category: 'Pacete',
    title: 'Photography just got better.',
    src: '/pacete/PACETE1.png',
    content: <DummyContent />,
  },
  {
    category: 'Gambrino',
    title: 'Hiring for a Staff Software Engineer',
    src: '/gambrino/GAMBRINO1.png',
    content: <DummyContent />,
  },
  {
    category: 'Linkit',
    title: 'Hiring for a Staff Software Engineer',
    src: '/linkit/LINKIT1.png',
    content: <DummyContent />
  },
  {
    category: 'Wallex',
    title: 'Hiring for a Staff Software Engineer',
    src: '/wallex/WALLEX1.png',
    content: <DummyContent />,
  },
  {
    category: 'Nomadico',
    title: 'Hiring for a Staff Software Engineer',
    src: '/nomadico/NOMADICO1.png',
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
