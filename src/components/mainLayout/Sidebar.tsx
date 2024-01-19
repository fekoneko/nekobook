'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Link {
  name: string;
  href: string;
  active: boolean;
}
const links: Link[] = [
  {
    name: 'My page',
    href: '/user',
    active: false,
  },
  {
    name: 'Feed',
    href: '/feed',
    active: false,
  },
  {
    name: 'Messenger',
    href: '/messenger',
    active: false,
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  links.forEach((link) => {
    if ('/' + pathname.split('/')[1] === link.href) link.active = true;
    else link.active = false;
    console.log(pathname);
  });

  return (
    <aside className="flex flex-col gap-2 py-2 px-3 w-[10.8rem]">
      {links.map((link, index) => (
        <Link
          href={link.href}
          key={index}
          className={`px-3 py-2 no-underline border-[1.5px] rounded-md shadow-lg hover:border-text-primary border-bg-accent ${
            link.active ? 'bg-bg-accent' : ''
          }`}
        >
          {link.name}
        </Link>
      ))}
    </aside>
  );
};
export default Sidebar;
