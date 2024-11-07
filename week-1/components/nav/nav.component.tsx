'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  routesName: Array<string>;
};

const Nav = ({ routesName }: Props) => {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <nav className="border-b border-zinc-700 h-14 text-slate-500 flex items-center ">
      <ul className="flex gap-3 px-10 ">
        {routesName.map((item) => (
          <li
            className={`hover:text-slate-400 ${
              pathname.slice(1) === item ||
              (pathname.slice(1) === '' && item === 'home')
                ? 'text-slate-300'
                : ''
            }`}
            key={item}
          >
            <Link href={`/${item === 'home' ? '' : item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
