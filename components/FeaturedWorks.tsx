'use client';

import DummyContent from './DummyContent';
import SectionHeader from './SectionHeader';
import { Carousel, Card } from './ui/apple-cards-carousel';

interface FeaturedWorksProps {
  textHoverEnter?: () => void;
  textHoverLeave?: () => void;
}

const data = [
  {
    category: '7ryms',
    title: 'Premium Studio Microphones',
    src: '/7ryms/7RYMS1.png',
    content: <DummyContent category="7ryms" />,
  },
  {
    category: 'Boya',
    title: 'Professional Recording Solutions',
    src: '/boya/BOYA1.png',
    content: <DummyContent category="Boya" />,
  },
  {
    category: 'FOINE Essence',
    title: 'Luxury Fragrance Collection',
    src: '/foine/FOINE1.png',
    content: <DummyContent category="FOINE Essence" />,
  },
  {
    category: 'Romoss',
    title: 'Portable Power Solutions',
    src: '/romoss/ROMOSS1.png',
    content: <DummyContent category="Romoss" />,
  },
  {
    category: 'Pacete Clinic',
    title: 'Modern Healthcare Clinic',
    src: '/pacete/PACETE1.png',
    content: <DummyContent category="Pacete" />,
  },
  {
    category: 'Gambrino',
    title: 'Precision Timepieces',
    src: '/gambrino/GAMBRINO1.png',
    content: <DummyContent category="Gambrino" />,
  },
  {
    category: 'Linkit',
    title: 'Smart NFC Business Cards',
    src: '/linkit/LINKIT1.png',
    content: <DummyContent category="Linkit" />,
  },
  {
    category: 'Wallex',
    title: 'Secure Digital Wallet',
    src: '/wallex/WALLEX1.png',
    content: <DummyContent category="Wallex" />,
  },
  {
    category: 'Nomadico',
    title: 'Travel-friendly Payment Solutions',
    src: '/nomadico/NOMADICO1.png',
    content: <DummyContent category="Nomadico" />,
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
          title="our projects"
          titleHighlight="projects"
        />
        <Carousel items={cards} />
      </div>
    </div>
  );
};

export default FeaturedWorks;
