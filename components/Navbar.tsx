import Link from 'next/link';

export default function Header() {
  return (
    <nav className="py-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="font-bold text-4xl md:text-5xl tracking-tight">nola</h1>
        <ul className="flex gap-12 text-lg font-medium">
          <li>
            <Link href={'/'} className="">
              home
            </Link>
          </li>
          <li>
            <Link href={'/about'} className="">
              about
            </Link>
          </li>
          <li>
            <Link href={'/works'} className="">
              works
            </Link>
          </li>
          <li>
            <Link href={'/contacts'} className="">
              contact us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
