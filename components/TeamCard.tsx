import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

export default function TeamCard() {
  const testimonials = [
    {
      quote:
        'The brain behind the visuals and the vibe, making sure every pixel feels just right, and tells a story that sticks.',
      name: 'John Leonard',
      designation: 'Creative Director',
      src: '/avatar/JOHN-AVATAR.svg',
    },
    {
      quote:
        'Defines the who, what, and why of a brand—shaping its voice, values, and vision to ensure it connects, resonates, and leaves a lasting impression.',
      name: 'Franz',
      designation: 'Brand Strategist',
      src: '/avatar/FRANZ-AVATAR.svg',
    },
    {
      quote:
        'Turns ideas into interactive experiences—writing the code that powers function, form, and flawless performance across every digital touchpoint.',
      name: 'Jepoy',
      designation: 'Developer',
      src: '/avatar/JEPOY-AVATAR.svg',
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
