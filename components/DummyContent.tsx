import Image from 'next/image';

interface DummyContentProps {
  category: string;
}

const categoryContent = {
  '7ryms': {
    images: Array(7).fill(0).map((_, i) => `/7ryms/7RYMS${i+1}.png`)
  },
  'Boya': {
    images: Array(9).fill(0).map((_, i) => `/boya/BOYA${i+1}.png`)
  },
  'FOINE Essence': {
    images: Array(9).fill(0).map((_, i) => `/foine/FOINE${i+1}.png`)
  },
  'Romoss': {
    images: Array(9).fill(0).map((_, i) => `/romoss/ROMOSS${i+1}.png`)
  },
  'Pacete': {
    images: Array(9).fill(0).map((_, i) => `/pacete/PACETE${i+1}.png`)
  },
  'Gambrino': {
    images: Array(5).fill(0).map((_, i) => `/gambrino/GAMBRINO${i+1}.png`)
  },
  'Linkit': {
    images: Array(7).fill(0).map((_, i) => `/linkit/LINKIT${i+1}.png`)
  },
  'Wallex': {
    images: Array(9).fill(0).map((_, i) => `/wallex/WALLEX${i+1}.png`)
  },
  'Nomadico': {
    images: Array(9).fill(0).map((_, i) => `/nomadico/NOMADICO${i+1}.png`)
  },
};

const DummyContent = ({ category = 'default' }: DummyContentProps) => {
  const content = categoryContent[category as keyof typeof categoryContent];
  
  return (
    <div className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {content.images.map((src, index) => (
          <div key={index} className="aspect-square relative overflow-hidden rounded-xl bg-neutral-200 dark:bg-neutral-700">
            <Image
              src={src}
              alt={`${category} project image ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DummyContent;