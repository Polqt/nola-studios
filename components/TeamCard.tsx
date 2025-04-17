'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
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
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h1 className="text-lg mb-16">meet our team</h1>
        <p className="text-lg mb-16">
          the creative and strategic minds behind the creation of nola studios
        </p>
        <div className="flex items-center">
          <button
            type="button"
            onClick={prevMember}
            className="p-2 mr-6 text-black"
            aria-label="Previous team member"
          >
            <ChevronLeft size={32} />
          </button>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 flex-grow">
            <div className="w-40 h-40 md:w-48 md:h-48 relative flex-shrink-0">
              <div className="bg-gray-200 w-full h-full overflow-hidden">
                <Image
                  src={currentMember.imageSrc}
                  alt={currentMember.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col max-w-xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">
                {currentMember.name}
              </h3>
              <p className="text-xl mb-4">{currentMember.role}</p>
              <p className="text-lg">{currentMember.description}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={nextMember}
            className="p-2 mr-6 text-black"
            aria-label="Next team member"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </div>
  );
}
