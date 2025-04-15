import Link from 'next/link';
import {
  IconBrandBehance,
  IconBrandFacebookFilled,
  IconBrandInstagram,
} from '@tabler/icons-react';

export default function Footer() {
  return (
    <div className="min-h-screen flex flex-row">
      <div className="flex flex-col justify-center items-start mb-4">
        <h1 className="font-bold text-4xl">nola</h1>
        <p className="text-lg">building your brand, from vision to viral</p>
      </div>
      <div className="flex flex-col justify-center items-start mb-4">
        <p className="mb-2 font-semibold">
          bacolod city, <br />
          negros occidental, <br />
          philippines
        </p>
        <div className="mb-2 font-semibold">
          <p>
            contact@nolastudios.net <br />
            +63 905 236 7934
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start mb-4">
        <p>follow us on social media</p>
        <ul className="flex flex-row space-x-4">
          <li>
            <Link href={'https://www.instagram.com/nola.studios.ph/'}>
              <IconBrandInstagram size={24} />
            </Link>
          </li>
          <li>
            <Link href={'https://www.facebook.com/nola.studios.ph'}>
              <IconBrandFacebookFilled size={24} />
            </Link>
          </li>
          <li>
            {' '}
            <Link href={'https://www.behance.net/nolastudios'}>
              <IconBrandBehance size={24} />
            </Link>
          </li>
        </ul>
        <p className="text-xs">© 2025 / nola studios</p>
      </div>
    </div>
  );
}
