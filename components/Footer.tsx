import Link from 'next/link';
import {
  IconBrandBehance,
  IconBrandFacebookFilled,
  IconBrandInstagram,
} from '@tabler/icons-react';

export default function Footer() {
  return (
    <div className="bg-[#FFDF1E] py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <h1 className="font-bold text-4xl mb-2">nola</h1>
            <p className="text-lg">
              huilding your brand, <br />
              from vision to viral
            </p>
          </div>
          <div className="flex flex-col">
            <p className="mb-6 font-medium">
              bacolod city, <br />
              negros occidental, <br />
              philippines
            </p>
            <div className="font-medium">
              <p>contact@nolastudios.net</p>
              <p>+63 905 236 7934</p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="mb-4">follow us on social media</p>
            <div className="flex space-x-4 mb-8">
              <Link href={'https://www.instagram.com/nola.studios.ph/'}>
                <IconBrandInstagram size={32} />
              </Link>
              <Link href={'https://www.facebook.com/nola.studios.ph'}>
                <IconBrandFacebookFilled size={32} />
              </Link>
              <Link href={'https://www.behance.net/nolastudios'}>
                <IconBrandBehance size={32} />
              </Link>
            </div>
            <p className="text-xs mt-auto">© 2025 / nola studios</p>
          </div>
        </div>
      </div>
    </div>
  );
}
