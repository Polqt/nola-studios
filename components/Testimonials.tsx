'use client';

import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

type Testimonial = {
  id: number;
  name: string;
  description: string;
  imageSrc: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'FOINE Essence',
    description: `NOLA Studious brought our vision to life with creativity, strategy, and heart. FOINE Essence has seen real growth in brand awareness, engagement, and sales. They don't just market your brand-- they believe in it.`,
    imageSrc: '',
  },
  {
    id: 2,
    name: 'Jani Essence',
    description: `NOLA Studious brought our vision to life with creativity, strategy, and heart. FOINE Essence has seen real growth in brand awareness, engagement, and sales. They don't just market your brand-- they believe in it.`,
    imageSrc: '',
  },
  {
    id: 3,
    name: 'Winjan Essence',
    description: `NOLA Studious brought our vision to life with creativity, strategy, and heart. FOINE Essence has seen real growth in brand awareness, engagement, and sales. They don't just market your brand-- they believe in it.`,
    imageSrc: '',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      prevIndex => (prevIndex - 1 + testimonials.length) % testimonials.length,
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
      <h1 className="text-5xl md:Text-6xl lg:text-7xl font-bold mb-12 md:mb-16">
        hear from our clients
      </h1>
      <div className="relative">
        <button
          title="prev"
          type="button"
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2"
        >
          <ChevronLeft size={36} className="text-black" />
        </button>
        <button
          title="next"
          type="button"
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2"
        >
          <ChevronRight size={36} className="text-black" />
        </button>
        <div className="flex items-start max-w-4xl mx-auto px-12">
          <div className="w-1/3 pr-8">
            <div className="bg-whtite rounded-full w-32 h-32 md:w-40 md:h-40"></div>
          </div>

          <div className="w-2/3">
            <h3 className="text-2xl font-bold mb-3">
              {testimonials[currentIndex].name}
            </h3>
            <p className="text-lg md:text-xl">
              {testimonials[currentIndex].description}
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              title={`testimonial ${index + 1}`}
              type="button"
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                'w-3 h-3 rounded-full transition-all duration-200 ease-in-out',
                currentIndex === index ? 'bg-black' : 'bg-gray-500 opacity-50',
              )}
              aria-label={`Testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
