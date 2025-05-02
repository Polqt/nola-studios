import { cn } from '@/lib/utils';
import { Marquee } from '@/components/magicui/marquee';
import Image from 'next/image';

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
    body: 'Working with NOLA Studios was seamless. Their visuals and campaign execution elevated our brand’s image and drove real engagement.',
    img: '/logo/GAMBRINO.svg',
  },
  {
    name: 'Linkit',
    username: 'NFC Business Cardss',
    body: 'Professional, fast, and impactful—NOLA Studios delivered exactly what we needed to boost our brand presence.',
    img: '/logo/LINKIT.svg',
  },
  {
    name: 'Nomadico',
    username: 'Wallets',
    body: 'From strategy to execution, NOLA Studios made our brand feel bold and adventurous. A perfect match for Nomadico’s identity.',
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
    username: 'Clinic ',
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
    <figure
      className={cn(
        'relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function Testimonials() {
  return (
    <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map(review => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map(review => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map(review => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}
