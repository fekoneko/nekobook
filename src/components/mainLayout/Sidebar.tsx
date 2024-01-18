import Link from 'next/link';

const links = [
  {
    name: 'My page',
    href: '/user',
  },
  {
    name: 'Feed',
    href: '/feed',
  },
  {
    name: 'Messenger',
    href: '/messenger',
  },
];

const Sidebar = () => {
  return (
    <aside>
      {links.map((link, index) => (
        <Link href={link.href} key={index}>
          {link.name}
        </Link>
      ))}
    </aside>
  );
};
export default Sidebar;
