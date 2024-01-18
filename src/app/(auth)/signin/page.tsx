import NavigationButton from '@/components/NavigationButton';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign In - Nekobook',
};

const SignInPage = () => {
  return (
    <main>
      <h1>Sign In</h1>
      <NavigationButton href="/feed">(pretend like you signed)</NavigationButton>
      <p>
        Don&apos;t have an account? <Link href="/signup">Sign Up</Link>
      </p>
    </main>
  );
};
export default SignInPage;
