import NavigationButton from '@/components/NavigationButton';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Welcome to Nekobook',
};

const WelcomePage = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-7">
      <h1 className="font-bold text-5xl text-text-accent">Welcome to Nekobook</h1>
      <NavigationButton
        href="/signup"
        className="text-xl py-2.5 px-20 rounded-2xl border-2 font-bold"
      >
        Sign Up
      </NavigationButton>
      <div className="absolute bottom-3 text-lg text-text-inactive flex gap-3.5">
        <Link href="/signin" className="no-underline hover:underline hover:text-text-primary">
          Sign In
        </Link>
        <span>|</span>
        <Link href="/signup" className="no-underline hover:underline hover:text-text-primary">
          Sign Up
        </Link>
      </div>
    </div>
  );
};
export default WelcomePage;
