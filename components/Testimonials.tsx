import { cn } from '@/lib/utils';
import { Marquee } from '@/components/magicui/marquee';
import Image from 'next/image';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: 'FOINE Essence',
    username: 'Perfume',
    body: 'NOLA Studios brought our brand to life online. Their creative direction and content strategy helped us reach and connect with a wider audience.',
    img: '/logo/FOINE.svg',
  },
  {
    name: 'Gambrino',
    username: 'Watches',
    body: 'Working with NOLA Studios was seamless. Their visuals and campaign execution elevated our brand\'s image and drove real engagement.',
    img: '/logo/GAMBRINO.svg',
  },
  {
    name: 'Linkit',
    username: 'NFC Business Cards',
    body: 'Professional, fast, and impactful—NOLA Studios delivered exactly what we needed to boost our brand presence.',
    img: '/logo/LINKIT.svg',
  },
  {
    name: 'Nomadico',
    username: 'Wallets',
    body: 'From strategy to execution, NOLA Studios made our brand feel bold and adventurous. A perfect match for Nomadico\'s identity.',
    img: '/logo/NOMADICO.svg',
  },
  {
    name: 'ROMOSS',
    username: 'Power Solutions',
    body: 'NOLA Studios nailed our product showcases. Their team knew how to highlight our tech in a way that resonated with our customers.',
    img: '/logo/ROMOSS.svg',
  },
  {
    name: 'Pacete Clinic',
    username: 'Clinic',
    body: 'NOLA Studios understood our vision perfectly. Their marketing approach was both strategic and personal—exactly what our clinic needed.',
    img: '/logo/PACETE.svg',
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <motion.figure
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={cn(
        'relative h-full w-72 cursor-pointer overflow-hidden rounded-lg p-6 m-3',
        'border border-neutral-800 bg-neutral-900/80 backdrop-blur-sm',
        'hover:border-[#FFDF1E]/30 hover:bg-neutral-800/90 transition-colors duration-300',
      )}
    >
      <div className="flex items-start gap-4">
        <div className="relative w-12 h-12 rounded-full bg-neutral-800 overflow-hidden border border-neutral-700 flex items-center justify-center">
          <Image 
            className="object-cover" 
            width="48" 
            height="48" 
            alt={`${name} logo`} 
            src={img} 
          />
        </div>
        <div className="flex-1">
          <div className="flex flex-col">
            <figcaption className="text-lg font-semibold text-white">
              {name}
            </figcaption>
            <p className="text-sm text-[#FFDF1E]">{username}</p>
          </div>
          <div className="mt-4 relative">
            <div className="absolute -left-2 -top-2 text-[#FFDF1E] opacity-30 text-4xl">&quot;</div>
            <blockquote className="relative pl-2 text-neutral-300">{body}</blockquote>
            <div className="absolute -bottom-4 right-0 text-[#FFDF1E] opacity-30 text-4xl">&quot;</div>
          </div>
        </div>
      </div>
    </motion.figure>
  );
};

export default function Testimonials() {
  return (
    <div className="relative w-full overflow-hidden py-4">
      <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
        <Marquee pauseOnHover vertical className="[--duration:25s]">
          {firstRow.map((review, index) => (
            <ReviewCard key={`first-${index}`} {...review} />
          ))}
        </Marquee>
        
        <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
          {secondRow.map((review, index) => (
            <ReviewCard key={`second-${index}`} {...review} />
          ))}
        </Marquee>
        
        <Marquee pauseOnHover vertical className="[--duration:22s]">
          {[...firstRow].reverse().map((review, index) => (
            <ReviewCard key={`third-${index}`} {...review} />
          ))}
        </Marquee>
        
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-neutral-900 to-transparent"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-neutral-900 to-transparent"></div>
      </div>
    </div>
  );
}