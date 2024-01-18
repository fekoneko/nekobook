import Link from 'next/link';
import NavigationButton from '../NavigationButton';

const Header = () => {
  return (
    <header>
      <h1 role="banner">
        <Link href="/feed">Nekobook</Link>
      </h1>
      <NavigationButton href="/user">〇</NavigationButton>
    </header>
  );
};
export default Header;
