import NavigationButton from '@/components/NavigationButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Welcome to Nekobook',
};

const WelcomePage = () => {
  return (
    <>
      <h1>Welcome to Nekobook</h1>
      <h2>Join the biggest comunity of cats now!</h2>
      <NavigationButton href="/signup">Sign Up</NavigationButton>
    </>
  );
};
export default WelcomePage;
