'use client';

import { useState } from 'react';

type TeamMember = {
  id: number;
  name: string;
  role: string;
  description: string;
  imageSrc: string;
};

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'john',
    role: 'creative director',
    description:
      'the brain behind the visuals and the vibe, making sure every pixel feels just right, and tells a story that sticks.',
    imageSrc: '',
  },
  {
    id: 2,
    name: 'franz',
    role: 'creative director',
    description:
      'the brain behind the visuals and the vibe, making sure every pixel feels just right, and tells a story that sticks.',
    imageSrc: '',
  },
  {
    id: 3,
    name: 'jepoy',
    role: 'creative director',
    description:
      'the brain behind the visuals and the vibe, making sure every pixel feels just right, and tells a story that sticks.',
    imageSrc: '',
  },
  {
    id: 4,
    name: 'owen',
    role: 'creative director',
    description:
      'the brain behind the visuals and the vibe, making sure every pixel feels just right, and tells a story that sticks.',
    imageSrc: '',
  },
];

export default function TeamCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevMember = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1,
    );
  };

  const nextMember = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const currentMember = teamMembers[currentIndex];

  return (
    <div>
      <h1 className="font-bold text-6xl">meet our team</h1>
      <p>
        the creative and strategic minds behind the creation of nola studios
      </p>
    </div>
  );
}
