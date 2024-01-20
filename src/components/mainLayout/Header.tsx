import Link from 'next/link';
import UserButton from './UserButton';

const Header = () => {
  return (
    <header className="px-3 py-2 bg-bg-accent shadow-lg flex justify-between items-center">
      <h1 role="banner">
        <Link href="/feed" className="no-underline font-bold text-3xl">
          Nekobook
        </Link>
      </h1>
      <UserButton />
    </header>
  );
};
export default Header;
