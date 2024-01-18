import NavigationButton from '@/components/NavigationButton';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign Up - Nekobook',
};

const SignUpPage = () => {
  return (
    <main>
      <h1>Sign Up</h1>
      <NavigationButton href="/feed">(pretend like you signed)</NavigationButton>
      <p>
        Already have an account? <Link href="/signin">Sign In</Link>
      </p>
    </main>
  );
};
export default SignUpPage;